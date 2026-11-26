# Builds the site icons in GitHub Dark colours: a ">_" terminal prompt.
#   static/favicon.svg          browser tabs (sharp at any size)
#   static/favicon.ico          older browsers (16, 32, 48 px)
#   static/apple-touch-icon.png iPhone/iPad home screen (180 px)
# The prompt is drawn as shapes (not font text) so every file looks the same.
# Re-run after changing colours:  python3 scripts/make-favicon.py
from PIL import Image, ImageDraw

BG, BORDER, BLUE, GREEN = '#0D1117', '#30363D', '#58A6FF', '#3FB950'

# Geometry on a 64x64 grid, shared by the SVG and the PNG/ICO drawings.
CHEVRON = [(15, 20), (29, 32), (15, 44)]  # the ">" (stroke)
STROKE = 7
UNDERSCORE = (33, 41, 50, 48)  # the "_" (x1, y1, x2, y2)

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect x="1" y="1" width="62" height="62" rx="14" fill="{BG}" stroke="{BORDER}" stroke-width="2"/>
<polyline points="{' '.join(f'{x},{y}' for x, y in CHEVRON)}" fill="none" stroke="{BLUE}" stroke-width="{STROKE}" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="{UNDERSCORE[0]}" y="{UNDERSCORE[1]}" width="{UNDERSCORE[2] - UNDERSCORE[0]}" height="{UNDERSCORE[3] - UNDERSCORE[1]}" rx="2" fill="{GREEN}"/>
</svg>
'''
open('static/favicon.svg', 'w').write(svg)


def draw(size, rounded=True):
    k = 8 * size / 64  # draw at 8x, then shrink, for smooth edges
    big = int(size * 8)
    im = Image.new('RGBA', (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if rounded:
        d.rounded_rectangle([k * 1, k * 1, k * 63, k * 63], radius=k * 14, fill=BG, outline=BORDER, width=max(1, int(k * 2)))
    else:  # Apple adds its own rounded corners, so fill the whole square
        d.rectangle([0, 0, big, big], fill=BG)
    pts = [(x * k, y * k) for x, y in CHEVRON]
    w = int(STROKE * k)
    d.line(pts, fill=BLUE, width=w, joint='curve')
    for x, y in pts[::2]:  # round the two ends
        d.ellipse([x - w / 2, y - w / 2, x + w / 2, y + w / 2], fill=BLUE)
    x1, y1, x2, y2 = UNDERSCORE
    d.rounded_rectangle([x1 * k, y1 * k, x2 * k, y2 * k], radius=2 * k, fill=GREEN)
    return im.resize((size, size), Image.LANCZOS)


draw(48).save('static/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
draw(180, rounded=False).convert('RGB').save('static/apple-touch-icon.png', optimize=True)
print('wrote static/favicon.svg, static/favicon.ico, static/apple-touch-icon.png')
