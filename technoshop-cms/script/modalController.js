
const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen)
};
const closeModal = () => {

};
export const modalController = ({ modal, btn, classOpen, classClose })  => {
    btn.addEventListener('click', () => {
        openModal(modal, classOpen);
    })    
    
};
console.log(modal, btn, classOpen, classClose)