/*const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.onclick = () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active-content');
}*/

const accordion = document.querySelector(".accordion");
const accordionPatientAcc = document.querySelector(".patient-acc");
const panel = document.querySelector(".panel");
const patientPanel = document.querySelector(".patient-panel");

accordion.onclick = () => panel.classList.toggle("active-accordion");
accordionPatientAcc.onclick = () => patientPanel.classList.toggle("active-accordion");