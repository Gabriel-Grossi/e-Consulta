const scrollTop = document.querySelector('.move-top');

const scrollToTop = () => {
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollTop.onclick= () => scrollToTop();
ScrollReveal({ reset: true });
//ScrollReveal().reveal('.item', { delay: 400 });
ScrollReveal().reveal('.card', { delay: 400 });