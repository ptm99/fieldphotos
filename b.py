import sys, os
from PIL import ExifTags
fpPath = ''
fjson = fpPath+'fieldphotos.geojson'

def get_exiftags(exif):
    exif_tagging_info = {}
    if not exif:
        raise ValueError("No EXIF metadata found")
    else:
        e_ifd = exif.get_ifd(ExifTags.IFD.GPSInfo)
        for k, v in e_ifd.items():
            exif_tagging_info[ExifTags.GPSTAGS[k] if k in ExifTags.GPSTAGS.keys() else k]=v
        e_ifd = exif.get_ifd(ExifTags.IFD.Exif)
        for k, v in e_ifd.items():
            exif_tagging_info[ExifTags.TAGS[k] if k in ExifTags.TAGS.keys() else k]=v
        return exif_tagging_info
    
def exifout(exif):
  p = {'type': 'Feature', 'properties': {'id': '', 'fname': '', 'oldname': '', 'lat': 0, 'lon': 0, 'year': 0, 'month': 0, 'beacon_deg': 0, 'focal_length35mm': 0, 'tags': ''}, 'geometry': {'type': 'Point', 'coordinates': []}}
  from uuid import uuid4
  from datetime import datetime, timedelta
  tags = get_exiftags(exif)
  if 'GPSLatitude' not in tags.keys():
    print(fname, ' - GPS data not found')
    return 0
  p['properties']['id']=str(uuid4())
  newname = tags['GPSLatitudeRef']+str(int(tags['GPSLatitude'][0])+1000)[-3:]+tags['GPSLongitudeRef']+str(int(tags['GPSLongitude'][0])+1000)[-3:]+'_'
  p['properties']['oldname']=fname  
  t=tags['GPSLatitude']
  p['properties']['lat']= t[0]+t[1]/60+t[2]/3600.0 if tags['GPSLatitudeRef']=='N' else -(t[0]+t[1]/60+t[2]/3600.0)
  t=tags['GPSLongitude']
  p['properties']['lon']= t[0]+t[1]/60+t[2]/3600.0 if tags['GPSLongitudeRef']=='E' else 360-(t[0]+t[1]/60+t[2]/3600.0)
  p['geometry']['coordinates']=[p['properties']['lat'],p['properties']['lon'],(float(tags['GPSAltitude']) if 'GPSAltitude' in tags.keys() else -999)]
  t=datetime.strptime(tags['DateTimeOriginal'], '%Y:%m:%d %H:%M:%S')
  p['properties']['year']=t.year
  p['properties']['month']=t.month
  imgPath=os.path.join(fpPath, tags['GPSLatitudeRef']+str(int(tags['GPSLatitude'][0])+1000)[-3:], tags['GPSLongitudeRef']+str(int(tags['GPSLongitude'][0])+1000)[-3:])
  t1=t
  while True:
    imgName = newname+datetime.strftime(t1, '%Y%m%d_%H%M%S')+'.jpg'
    if not os.path.isfile(os.path.join(imgPath, imgName)): break
    t1=t1+timedelta(seconds=1)
  p['properties']['fname']=imgName #change file name to new format: LONLAT_YEAR.MONTH.DAY.HR.MIN.SEC.jpg   E104N013_20230329_163532.jpg
  p['properties']['beacon_deg']=float(tags['GPSDestBearing']) if 'GPSDestBearing' in tags.keys() else -1
  p['properties']['focal_length35mm']=int(tags['FocalLengthIn35mmFilm'])
  p['properties']['tags']=imgTags
  return [p, imgPath, imgName]

if __name__ == "__main__":
  if len(sys.argv) ==1:
    print('Input image folder.')
    sys.exit()
  iPath = sys.argv[1]
  a=input('Input tags for the images batch: ')
  while len(a):
    imgTags=a
    a=input('Tags read:"{}"; Enter if accept or type new:'.format(imgTags))
  #print(imgTags)
  import json, shutil
  from PIL import Image
  from pillow_heif import register_heif_opener
  register_heif_opener()
  from glob import glob
  tmp=[]
  for fname in glob(os.path.join(iPath,'*')):
    toJson=[]
    if os.path.splitext(os.path.basename(fname))[1].upper() not in ['.JPG','.JPEG','.HEIC']: continue
    image = Image.open(fname)
    image.verify()
    e = image.getexif()
    toJson = exifout(e)
    if not toJson: continue
    try:
      if not os.path.isdir(os.path.join('www','fp',toJson[1])): os.makedirs(os.path.join('www','fp',toJson[1]))
      if os.path.splitext(os.path.basename(fname))[1].upper() in ['.JPG','.JPEG']:
        shutil.copy(fname, os.path.join('www','fp',toJson[1], toJson[2]))
      else:
        image.save(os.path.join('www','fp',toJson[1], toJson[2]), 'JPEG', exif=e, quality="high")
      tmp.append(toJson[0])
    except:
      print('Not saved as JPEG from ',fname)
    else:
      print(fname,' -> ',toJson[1],toJson[2])
  if tmp:
    with open(fjson, 'r') as f:
      fj=json.load(f)
    fj['features'].extend(tmp)
    with open(fjson, 'w') as f:
      json.dump(fj,f)
    print(len(tmp),'image added...')
  else:
    print('No image added...')
