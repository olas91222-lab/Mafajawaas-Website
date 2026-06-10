// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting Mafajawaas Construction & Properties. We will get back to you shortly.");

    form.reset();

});


// Smooth Reveal Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});