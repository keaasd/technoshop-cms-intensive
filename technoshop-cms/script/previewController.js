import { form, preview } from "./elems.js";
import { toBase64 } from "./utils.js";

const showPreview = (src) => {
    // preview.getElementsByClassName.display = 'block';
    preview.style.display = 'block';
    preview.src = src;
}

const hidePreview = () => {
    preview.style.display = '';
    preview.src = '';
}

export const previewController = () => {
    // form.image здесь image - это name='image' из инпута.
    const imageFile = form.image;
    // событие изменения 
    console.log(imageFile)
    image.addEventListener('change', async () => {
        if (imageFile.files.length) {
            // toBase64(imageFile.files[0]);
            console.log(toBase64(imageFile.files[0]))
            const src = await toBase64(imageFile.files[0]);
            showPreview(src)
        }
        // console.log(image.files)
    })
};

// console.log(toBase64());
// 1:02 трансляция 