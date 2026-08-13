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

def make_transparent_and_white(im):
    im = im.convert('RGBA')
    data = im.getdata()
    newData = []
    # If the pixel is close to white, make it completely transparent
    # Otherwise, it's part of the logo. We want the logo to be pure white.
    for item in data:
        # Assuming background is white (e.g. R,G,B > 220)
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            # We want the logo to be pure white with the anti-aliased alpha
            # Let's map the darkness of the pixel to the alpha channel
            # A completely black pixel -> alpha 255 (solid)
            # A gray pixel (e.g., 128) -> alpha 128 (semi-transparent)
            # Since the logo is dark blue, we use its luminance.
            lum = int(0.299*item[0] + 0.587*item[1] + 0.114*item[2])
            alpha = 255 - lum
            newData.append((255, 255, 255, alpha))
            
    im.putdata(newData)
    return im

try:
    img = Image.open('public/Web pic.jpeg')
    cropped = trim(img)
    transparent = make_transparent_and_white(cropped)
    transparent.save('public/logo-white.png')
    print('Cropped and converted to transparent white PNG successfully.')
except Exception as e:
    print('Error:', e)
