import sys
from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def make_transparent_and_dark(im):
    im = im.convert('RGBA')
    data = im.getdata()
    newData = []
    for item in data:
        # Assuming background is white (e.g. R,G,B > 220)
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            # Recolor the logo to dark navy (#0F172A = 15, 23, 42)
            # The lighter the original pixel, the more transparent it becomes.
            lum = int(0.299*item[0] + 0.587*item[1] + 0.114*item[2])
            alpha = 255 - lum
            newData.append((15, 23, 42, alpha))
            
    im.putdata(newData)
    return im

try:
    img = Image.open('public/Web pic.jpeg')
    cropped = trim(img)
    transparent = make_transparent_and_dark(cropped)
    transparent.save('public/logo-dark.png')
    print('Cropped and converted to dark PNG successfully.')
except Exception as e:
    print('Error:', e)
