import Header from "./Modules/Header.js";
new Header();

import Modal from "./Modules/Modal.js";
new Modal();

const element = document.getElementById('phone');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(element, maskOptions);