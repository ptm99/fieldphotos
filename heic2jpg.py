import sys, os
if __name__ == "__main__":
  if len(sys.argv) ==1:
    print('Need input')
    sys.exit()
  iPath = sys.argv[1]
  if len(sys.argv) ==3:
    oPath = sys.argv[2]
  else:
    oPath=iPath
  from PIL import Image
  from pillow_heif import register_heif_opener
  register_heif_opener()
  from glob import glob
  for fname in glob(os.path.join(iPath,'*')):
    if os.path.splitext(os.path.basename(fname))[1].upper() not in ['.HEIC']: continue
    image = Image.open(fname)
    image.verify()
    e = image.getexif()
    fout = os.path.join(oPath, os.path.basename(fname).replace('.HEIC', '.JPG'))
    image.save(fout, 'JPEG', exif=e, quality="high")
    print(fname,' -> ', fout)

