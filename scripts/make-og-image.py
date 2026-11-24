# Builds static/og-image.png, the 1200x630 picture shown when a link to the site is shared
# (LinkedIn, Slack, iMessage, X). Design: "kubectl describe", GitHub Dark colours.
# Re-run after changing the photo or any text below:  python3 scripts/make-og-image.py
from PIL import Image, ImageDraw, ImageFont, ImageOps

# --- Text (keep in line with the résumé) ---
COMMAND = 'kubectl describe engineer akhil-gandhi'
ROWS = [
    ('Name:', 'Akhil Gandhi', 'text'),
    ('Role:', 'Site Reliability Engineer', 'blue'),
    ('Platform:', 'Kubernetes (EKS), ArgoCD, Terraform', 'muted'),
    ('Practices:', 'Observability, Incident response', 'muted'),
    ('Certs:', 'CKA, Terraform, Google Cloud, AWS', 'green'),
]
URL = 'akhilgandhi1999.github.io/Personal-Website'
PHOTO = 'static/images/profile1.jpeg'

# --- GitHub Dark palette ---
C = dict(bg='#0D1117', text='#E6EDF3', muted='#C9D1D9', faint='#8B949E', blue='#58A6FF', green='#3FB950')

W, H, S = 1200, 630, 2  # draw at 2x, then shrink, for smooth edges
MONO = '/System/Library/Fonts/SFNSMono.ttf'


def P(v):
    return int(v * S)


def font(size):
    return ImageFont.truetype(MONO, size * S)


img = Image.new('RGB', (P(W), P(H)), C['bg'])
d = ImageDraw.Draw(img)
d.rectangle([0, 0, P(W), P(6)], fill=C['blue'])
d.rectangle([0, P(H - 6), P(W), P(H)], fill=C['green'])

# Round photo with a blue (top) / green (bottom) ring.
cx, cy, r = 1010, 315, 125
ring = [P(cx - r - 8), P(cy - r - 8), P(cx + r + 8), P(cy + r + 8)]
d.ellipse(ring, fill=C['green'])
d.pieslice(ring, 180, 360, fill=C['blue'])
photo = ImageOps.fit(Image.open(PHOTO).convert('RGB'), (P(2 * r), P(2 * r)), centering=(0.5, 0.4))
mask = Image.new('L', photo.size, 0)
ImageDraw.Draw(mask).ellipse([0, 0, *photo.size], fill=255)
img.paste(photo, (P(cx - r), P(cy - r)), mask)

f = font(26)
d.text((P(70), P(70)), '$ ', font=f, fill=C['green'])
d.text((P(70) + d.textlength('$ ', font=f), P(70)), COMMAND, font=f, fill=C['text'])

y = 140
for key, value, colour in ROWS:
    d.text((P(70), P(y)), key, font=f, fill=C['blue'])
    d.text((P(260), P(y)), value, font=f, fill=C[colour])
    y += 52
d.text((P(70), P(y + 6)), 'Status:', font=f, fill=C['blue'])
d.ellipse([P(262), P(y + 16), P(278), P(y + 32)], fill=C['green'])
d.text((P(290), P(y + 6)), 'Running', font=f, fill=C['green'])

d.text((P(70), P(H - 70)), URL, font=font(20), fill=C['faint'])

img.resize((W, H), Image.LANCZOS).save('static/og-image.png', optimize=True)
print('wrote static/og-image.png')
