import { modalBtn, modal, preview } from "./elems.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";
// import { preview } from "./elems.js";

modalController({
    modal, 
    btn: modalBtn,
    classOpen: 'd-block',
    classClose: 'btn-close'
});
previewController();