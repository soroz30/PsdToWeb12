var desktopViewport = window.matchMedia('screen and (min-width: 992px)');
const sections = document.querySelectorAll('section');
const scroll = new SmoothScroll('a[href*="#"]', {
                 speed: 1500,
                 easing: 'easeInOutQuad'
               });

const showOnScroll = () => {
    if (sections[sections.length - 1].className === 'opaque') {
        window.removeEventListener('scroll', showOnScroll); 
    }
    sections.forEach(section => {
        const offsetTop = section.offsetTop;
        const scrollTop = window.pageYOffset
                          || document.documentElement.scrollTop
                          || document.body.scrollTop;
        const distanceFromTop = window.innerHeight + scrollTop
        if (distanceFromTop > offsetTop + 150) {
            section.classList.add('opaque');
        }
    });
}

if (desktopViewport.matches) {
    window.addEventListener('scroll', showOnScroll);
} else {
    sections.forEach(section => {
        section.classList.add('opaque');
    });
}