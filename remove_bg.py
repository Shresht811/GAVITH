from PIL import Image
import sys

def remove_white_bg(image_path, output_path, threshold=220):
    try:
        img = Image.open(image_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            if item[0] > threshold and item[1] > threshold and item[2] > threshold:
                new_data.append((255, 255, 255, 0)) # Transparent
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

remove_white_bg("/Users/shreshtnaveen/Desktop/GAVITH/public/logo.jpg", "/Users/shreshtnaveen/Desktop/GAVITH/public/logo_transparent.png")
