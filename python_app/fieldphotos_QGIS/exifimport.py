def exifout(fname):
    import os, pyheif
fname = 'E:/FieldPhotos/aas2205/20230324_153226.jpg'
import exifread
import json
fp='E:/T_Script/fieldphotos/python_app/fp_tmp.geojson'
with open(fp, 'r') as f:
    fj=json.load(f)
a=[fj['features'][0]['properties']]
fp1='E:/T_Script/fieldphotos/python_app/fp_tmp.json'
with open(fp1, 'w') as f:
    json.dump(a,f)

from PIL import Image
import logging
im = Image.open(fname)

tags = {}
with open(fname, 'rb') as f:
    tags = exifread.process_file(f, details=False, stop_tag='GPS GPSLatitude')

for i in tags.keys():
    print(i,' = ', tags[i])

b=a[0]
b['id']=
b['fname']=
t=tags['GPS GPSLatitude'].values
b['lat']= t[0]+t[1]/60.0+t[2]/3600.0 if tags['GPS GPSLatitudeRef'].values=='N' else -(t[0]+t[1]/60.0+t[2]/3600.0)
t=tags['GPS GPSLongitude'].values
b['lon']= t[0]+t[1]/60.0+t[2]/3600.0 if tags['GPS GPSLongitudeRef'].values=='E' else 360-(t[0]+t[1]/60.0+t[2]/3600.0)
t=tags['Image DateTime'].values
b['year']=
b['month']=
b['beacon_deg']=-1
b['focal_length35mm']=0

fname = 'E:/GIS/AAS2109 - WB Nepal road and drainage resilience/UrlabariWS/GROUP A Session 2.jpg'
fname = r'G:\Z_TMP\AAS2205_March_FieldTrip\Moni\IMG_9401.heic'
import piexif
a=piexif.load(fname)
for i in a.keys(): print(i, a[i])
for ifd in ("0th", "Exif", "GPS", "1st"):
    print(ifd)
    for tag in a[ifd]:
        print(piexif.TAGS[ifd][tag]["name"], a[ifd][tag])

fname = 'E:/GIS/AAS2109 - WB Nepal road and drainage resilience/UrlabariWS/GROUP A Session 2.jpg'
#fname = r'G:\Z_TMP\AAS2205_March_FieldTrip\Moni\IMG_9401.heic'
from PIL import Image
from pillow_heif import register_heif_opener

def get_exif(filename):
    image = Image.open(filename)
    image.verify()
    return image.getexif().get_ifd(0x8825)

def get_geotagging(exif):
    geo_tagging_info = {}
    if not exif:
        raise ValueError("No EXIF metadata found")
    else:
        gps_keys = ['GPSVersionID', 'GPSLatitudeRef', 'GPSLatitude', 'GPSLongitudeRef', 'GPSLongitude',
                    'GPSAltitudeRef', 'GPSAltitude', 'GPSTimeStamp', 'GPSSatellites', 'GPSStatus', 'GPSMeasureMode',
                    'GPSDOP', 'GPSSpeedRef', 'GPSSpeed', 'GPSTrackRef', 'GPSTrack', 'GPSImgDirectionRef',
                    'GPSImgDirection', 'GPSMapDatum', 'GPSDestLatitudeRef', 'GPSDestLatitude', 'GPSDestLongitudeRef',
                    'GPSDestLongitude', 'GPSDestBearingRef', 'GPSDestBearing', 'GPSDestDistanceRef', 'GPSDestDistance',
                    'GPSProcessingMethod', 'GPSAreaInformation', 'GPSDateStamp', 'GPSDifferential']
        for k, v in exif.items():
            try:
                geo_tagging_info[gps_keys[k]] = str(v)
            except IndexError:
                pass
        return geo_tagging_info
register_heif_opener()
image_info = get_exif(fname)
results = get_geotagging(image_info)
print(results)


{'GPSLatitudeRef': 'N', 'GPSLatitude': '(26.0, 39.0, 39.64)', 'GPSLongitudeRef': 'E', 'GPSLongitude': '(87.0, 41.0, 46.57)', 'GPSAltitudeRef': "b'\\x00'", 'GPSAltitude': '76.3', 'GPSTimeStamp': '(10.0, 16.0, 9.0)', 'GPSProcessingMethod': "b'ASCII\\x00\\x00\\x00CELLID\\x00'", 'GPSDateStamp': '2022:11:01'}

{'GPSLatitudeRef': 'N', 'GPSLatitude': '(12.0, 27.0, 30.92)', 'GPSLongitudeRef': 'E', 'GPSLongitude': '(106.0, 10.0, 24.6)', 'GPSAltitudeRef': "b'\\x00'", 'GPSAltitude': '35.59856996935649', 'GPSSpeedRef': 'K', 'GPSSpeed': '1.1299999952314579', 'GPSImgDirectionRef': 'T', 'GPSImgDirection': '118.74505424377791', 'GPSDestBearingRef': 'T', 'GPSDestBearing': '118.74505424377791'}