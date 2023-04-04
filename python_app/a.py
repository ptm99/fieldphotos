import sys, os
#fname = 'E:/GIS/AAS2109 - WB Nepal road and drainage resilience/UrlabariWS/GROUP A Session 2.jpg'
fpPath = 'E:/T_Script/docker_app/fieldphotos/tomcat/ROOT/fieldphotos/'
fjson = fpPath+'fieldphotos.geojson'
#fjson = '../tomcat/ROOT/fieldphotos/fieldphotos.geojson'
def exifout(fname):
  import exifread
  from uuid import uuid4
  from datetime import datetime, timedelta
  tags = {}
  p = {'type': 'Feature', 'properties': {'fid': 0, 'id': '0', 'fname': '0.jpg', 'lat': 0, 'lon': 0, 'year': 0, 'month': 0, 'beacon_deg': 0, 'focal_length35mm': 0, 'tags': ''}, 'geometry': {'type': 'Point', 'coordinates': []}}
  with open(fname, 'rb') as f:
    tags = exifread.process_file(f, details=False)
  if 'GPS GPSLatitude' not in tags.keys():
    print(fname, ' - GPS data not found')
    return 0
  p['properties']['id']=str(uuid4())
  newname = tags['GPS GPSLatitudeRef'].values+str(tags['GPS GPSLatitude'].values[0]+1000)[-3:]+tags['GPS GPSLongitudeRef'].values+str(tags['GPS GPSLongitude'].values[0]+1000)[-3:]+'_'
  p['properties']['fname']=fname  #change file name to new format: LONLAT_YEAR.MONTH.DAY.HR.MIN.SEC.jpg   E104N013_20230329_163532.jpg
  t=tags['GPS GPSLatitude'].values
  p['properties']['lat']= t[0]+t[1]/60.0+t[2]/3600.0 if tags['GPS GPSLatitudeRef'].values=='N' else -(t[0]+t[1]/60.0+t[2]/3600.0)
  t=tags['GPS GPSLongitude'].values
  p['properties']['lon']= t[0]+t[1]/60.0+t[2]/3600.0 if tags['GPS GPSLongitudeRef'].values=='E' else 360-(t[0]+t[1]/60.0+t[2]/3600.0)
  p['geometry']['coordinates']=[p['properties']['lat'],p['properties']['lon'],float(tags['GPS GPSAltitude'].values[0]) if 'GPS GPSAltitude' in tags.keys() else -999]
  t=datetime.strptime(tags['EXIF DateTimeOriginal'].values, '%Y:%m:%d %H:%M:%S')
  p['properties']['year']=t.year
  p['properties']['month']=t.month
  imgPath=os.path.join(fpPath, tags['GPS GPSLatitudeRef'].values+str(tags['GPS GPSLatitude'].values[0]+1000)[-3:], tags['GPS GPSLongitudeRef'].values+str(tags['GPS GPSLongitude'].values[0]+1000)[-3:])
  if not os.path.isdir(imgPath): os.makedirs(imgPath)
  t1=t
  while True:
    imgName = newname+datetime.strftime(t1, '%Y%m%d_%H%M%S')+'.jpg'
    if not os.path.isfile(os.path.join(imgPath, imgName)): break
    t1=t1+timedelta(seconds=1)
  p['properties']['fname']=imgName
  p['properties']['beacon_deg']=-1
  p['properties']['focal_length35mm']=tags['EXIF FocalLengthIn35mmFilm'].values[0]
  p['properties']['tags']=imgTags
  return [p, os.path.join(imgPath, imgName)]

if __name__ == "__main__":
  if len(sys.argv) ==1:
    print('Need input')
    sys.exit()
  iPath = sys.argv[1]
  if len(sys.argv) ==3:
    imgTags = sys.argv[2]
    print('Apply images tags: ', imgTags)
  else:
    imgTags=''
  import json, shutil
  with open(fjson, 'r') as f:
    fj=json.load(f)
  from glob import glob
  for fname in glob(os.path.join(iPath,'*.jpg')):
    toJson = exifout(fname)
    if not toJson: continue
    fj['features'].append(toJson[0])
    shutil.copy(fname,toJson[1])
    print(fname,' -> ',toJson[1])
  with open(fjson, 'w') as f:
    json.dump(fj,f)

