# The convert PNG or JPG images in ./assets/img/ to WebP format and store in the same folder. After converting, print the folder path and file name of the converted images. Then remove the png images.
convert:
	find ./assets/img/ -type f -name "*.png" -exec sh -c 'cwebp -q 80 "$$1" -o "$${1%.png}.webp"' _ {} \;
	find ./assets/img/ -type f -name "*.jpg" -exec sh -c 'cwebp -q 80 "$$1" -o "$${1%.jpg}.webp"' _ {} \;
	find ./assets/img/ -type f -name "*.webp" -print
	find ./assets/img/ -type f -name "*.png" -delete
	find ./assets/img/ -type f -name "*.jpg" -delete

# Find all images from ./assets/img/ in index.html and rename the images.png to images.webp
rename:
	sed -i 's/\.png/\.webp/g' index.html