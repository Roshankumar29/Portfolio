document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll(".fade-in, .slide-up, .zoom-in");
    
    function checkScroll() {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check

    // 3D Hover Animation for Project Cards
    document.querySelectorAll(".project").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            let rect = card.getBoundingClientRect();
            let x = (e.clientX - rect.left) / rect.width - 0.5;
            let y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `rotateY(${x * 20}deg) rotateX(${y * -20}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
        });
    });

    // Typing Animation
    const typingElement = document.querySelector(".hero h2");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    typeText();

    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover Effects on Coding Links
    document.querySelectorAll(".coding-links a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});
