let currentSection = 0;
const sections = document.querySelectorAll("section");
const scrollThreshold = 100;
let isScrolling = false;

const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length || isScrolling) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSection = index; 
    setTimeout(() => isScrolling = false, 1000); 
};

document.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) > scrollThreshold) {
        if (event.deltaY > 0) { 
            scrollToSection(currentSection + 1);
        } else { 
            scrollToSection(currentSection - 1);
        }
        event.preventDefault(); 
    }
}, { passive: false });

let touchStartY = 0;

document.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchmove", (event) => {
    const touchEndY = event.touches[0].clientY;
    if (Math.abs(touchStartY - touchEndY) > scrollThreshold) {
        if (touchStartY - touchEndY > 0) { 
            scrollToSection(currentSection + 1);
        } else { 
            scrollToSection(currentSection - 1);
        }
        event.preventDefault();
    }
});