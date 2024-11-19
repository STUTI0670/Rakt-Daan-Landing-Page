// TYPEWRITER ANIMATION FOR LANDING PAGE
document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('text-container');
    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Welcome<br>')
    .pauseFor(300)
    .typeString('to Rakt Daan ')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .typeString("India's Awareness and Blood Support Centre")
    .pauseFor(3000)
    .start();
});



window.onscroll = function() {
    const header = document.getElementById('header');
    const headerline = document.getElementById('header-line');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 60) {
        header.classList.add('sticky');
        headerline.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
        headerline.classList.remove('sticky');
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}