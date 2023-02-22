const closeIcon = document.querySelector('.close-icon')
const modalPrescription =  document.getElementById('modal-wrapper');
const generatePrescription =  document.getElementById('createPrescription');
const generateSickNote =  document.getElementById('createSickNote');

generatePrescription.onclick = () =>{
    modalPrescription.classList.toggle('active-modal');
}
generateSickNote.onclick = () =>{
    modalPrescription.classList.toggle('active-modal');
}

closeIcon.onclick = () => modalPrescription.classList.remove('active-modal')