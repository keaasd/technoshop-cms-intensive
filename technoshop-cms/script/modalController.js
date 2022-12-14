
const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen)
};
const closeModal = (modal, classOpen) => {
    modal.classList.remove(classOpen)
};
export const modalController = ({ modal, btn, classOpen, classClose })  => {
    btn.addEventListener('click', () => {
        openModal(modal, classOpen);
    })    
    
    modal.addEventListener('click', ({target}) => {
        // console.log(target)
        if(target === modal || target.classList.contains(classClose)) {
            closeModal(modal, classOpen); }
        // modal.classList.remove(classOpen)
    })    
    

// console.log(modal, btn, classOpen, classClose);
};