from PIL import Image
import os


def convert_png_to_jpg(folder_path):
    # Lista de todos los archivos en la carpeta
    for filename in os.listdir(folder_path):
        print(f"Convirtiendo: {filename}")
        if filename.endswith(".png"):
            # Ruta completa del archivo PNG
            png_file_path = os.path.join(folder_path, filename)
            # Cargar la imagen PNG
            with Image.open(png_file_path) as img:
                # Remover la extensión .png y agregar .jpg
                jpg_file_path = os.path.splitext(png_file_path)[0] + '.jpg'
                # Convertir y guardar como JPG
                img.convert('RGB').save(jpg_file_path, "JPEG")
                print(f"Convertido: {jpg_file_path}")


# Ruta de la carpeta que contiene los archivos PNG
folder_path = 'C:\\Users\calde\OneDrive\Escritorio\Hortensias'
convert_png_to_jpg(folder_path)
