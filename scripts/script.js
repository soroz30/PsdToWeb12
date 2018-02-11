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

window.addEventListener('scroll', showOnScroll);