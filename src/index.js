let isScrolling = false; 

document.addEventListener('wheel', function(e) {
    e.preventDefault(); 

    if (isScrolling) return; 

    const sections = document.querySelectorAll('section');
    let currentSection = 0; 

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentSection = index;
        }
    });

    isScrolling = true; 

    if (e.deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }

    else if (e.deltaY < 0 && currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}, { passive: false });
