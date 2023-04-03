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
