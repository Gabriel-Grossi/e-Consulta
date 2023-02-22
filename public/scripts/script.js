const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.onclick = () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active-content');
}

const accordion = document.querySelector(".accordion");
const accordionDocs = document.querySelector(".docs");
const panel = document.querySelector(".panel");
const docsPanel = document.querySelector(".docs-panel");

accordion.onclick = () => panel.classList.toggle("active-accordion");
accordionDocs.onclick = () => docsPanel.classList.toggle("active-accordion");
