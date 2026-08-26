from PIL import Image

# Crop story3.png
img_story3 = Image.open('assets/img/lattafa/story3.png')
w, h = img_story3.size
# Let's crop top 250px and bottom 350px
cropped_story3 = img_story3.crop((0, 300, w, h - 350))
cropped_story3.save('assets/img/lattafa/story3_cropped.png')

# Crop d614 (hand holding bottle)
img_hand = Image.open('assets/img/lattafa/d6145c69-bddb-488e-a303-84e1f4f94de6.png')
w2, h2 = img_hand.size
# Bottle is likely in the left-center. Thumb is at the bottom.
# Let's crop a tighter bounding box.
# Left: 150, Top: 150, Right: w2 - 500, Bottom: h2 - 300
cropped_hand = img_hand.crop((350, 100, w2 - 250, h2 - 280))
cropped_hand.save('assets/img/lattafa/hand_bottle_cropped.png')
