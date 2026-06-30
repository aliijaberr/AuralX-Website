/*==========================================
  AURALX WEBSITE
==========================================*/

// ==========================
// Hero Mouse Effect
// ==========================

const heroEarbuds = document.getElementById("heroEarbuds");

document.addEventListener("mousemove", (e) => {

    if (!heroEarbuds) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroEarbuds.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(5,7,13,.92)";
        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.35)";

    }

    else{

        header.style.background = "rgba(5,7,13,.45)";
        header.style.padding = "25px 8%";
        header.style.boxShadow = "none";

    }

});

// ==========================
// Scroll Reveal
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition=".8s";

    observer.observe(section);

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

}

// ==========================
// Smooth Image Hover
// ==========================

const images = document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

    image.style.transition=".4s";

});

});

// ==========================
// Console
// ==========================

console.log("AuralX Website Loaded Successfully");