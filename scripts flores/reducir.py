from PIL import Image
import os

input_dir = 'C:\\Users\calde\OneDrive\Escritorio\Hortensias'
output_dir = 'C:\\Users\calde\OneDrive\Escritorio\Hortensias'

os.makedirs(output_dir, exist_ok=True)
target_size = (100, 100)

input_files = os.listdir(input_dir)

for input_file in input_files:
    input_path = os.path.join(input_dir, input_file)
    output_path = os.path.join(output_dir, input_file)
    
    img = Image.open(input_path)
    
    width, height = img.size
    size = min(width, height)
    
    # Calculate the coordinates for the square crop
    left = (width - size) / 2
    upper = (height - size) / 2
    right = (width + size) / 2
    lower = (height + size) / 2
    
    square_img = img.crop((left, upper, right, lower))
    
    # Resize the image to the target size while maintaining aspect ratio
    square_img.thumbnail(target_size)
    
    # Create a new square image with a white background
    small_img = Image.new('RGB', target_size, (255, 255, 255))
    
    # Paste the resized image onto the square canvas
    offset = ((target_size[0] - square_img.width) // 2, (target_size[1] - square_img.height) // 2)
    small_img.paste(square_img, offset)
    
    small_img.save(output_path)

print(f"Images saved to '{output_dir}'")