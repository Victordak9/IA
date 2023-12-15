from PIL import Image
import os

input_dir = 'C:\\Users\calde\OneDrive\Escritorio\Hortensias'
output_dir = 'C:\\Users\calde\OneDrive\Escritorio\Hortensias'

os.makedirs(output_dir, exist_ok=True)

input_files = os.listdir(input_dir)

for input_file in input_files:
    input_path = os.path.join(input_dir, input_file)

    img = Image.open(input_path)

    for i in range(0, 360, 90):
        rotated_img = img.rotate(i, expand=True)

        # if i in (45, 135, 225, 315):
        if i not in (0, 90, 180, 270):
            width, height = rotated_img.size

            # Calculate the size of the center section (half size) with the same aspect ratio
            if width > height:
                new_width = height // 2
                new_height = height // 2
            else:
                new_width = width // 2
                new_height = width // 2

            # Calculate the coordinates for the center section
            left = (width - new_width) // 2
            upper = (height - new_height) // 2
            right = left + new_width
            lower = upper + new_height

            # Crop the center section
            rotated_img = rotated_img.crop((left, upper, right, lower))

            # Resize the image
            rotated_img = rotated_img.resize((image_standart_size, image_standart_size))

        output_filename = f"rotated_{i}degrees{input_file}"
        output_path = os.path.join(output_dir, output_filename)
        rotated_img.save(output_path)

print(f"Images saved in '{output_dir}' with rotations at 15-degree intervals.")