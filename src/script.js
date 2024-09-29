let currentSection = 0;
const sections = document.querySelectorAll("section");

const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSection = index;
};

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) { 
        scrollToSection(currentSection + 1);
    } else if (event.deltaY < 0) { 
        scrollToSection(currentSection - 1);
    }
    event.preventDefault(); 
}, { passive: false }); 

let touchStartY = 0;

document.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchmove", (event) => {
    const touchEndY = event.touches[0].clientY;
    if (touchStartY - touchEndY > 50) { 
        scrollToSection(currentSection + 1);
    } else if (touchEndY - touchStartY > 50) {
        scrollToSection(currentSection - 1);
    }
    event.preventDefault();
});