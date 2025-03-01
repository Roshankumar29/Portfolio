HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roshan Kumar | Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
    <header>
        <nav>
            <h1>Roshan Kumar</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home" class="hero fade-in">
        <img src="mypic.jpg" alt="Roshan Kumar" class="profile-img">
        <h2>Hi, I'm Roshan Kumar</h2>
        <p>A passionate Computer Science student & problem solver.</p>
        <a href="#projects" class="btn scale-up">Explore My Work</a>
    </section>
    
    <section id="about" class="fade-in slide-up">
        <h2>About Me</h2>
        <p>I am an enthusiastic and ambitious Computer Science student with a deep interest in technology and problem-solving. 
           I enjoy exploring innovative ideas, learning new concepts, and applying them to real-world challenges.</p>
    </section>
    
    <section id="projects" class="fade-in slide-up">
        <h2>Projects</h2>
        <div class="project zoom-in">
            <h4><a href="https://roshankumar29.github.io/Calculator/" target="_blank">Calculator</a></h4>
            <p>Developed a simple calculator using HTML, CSS, and JavaScript.</p>
        </div>
        <div class="project zoom-in">
            <h4><a href="https://roshankumar29.github.io/snake-/" target="_blank">Snake Game</a></h4>
            <p>Built an interactive Snake Game with responsive design and smooth game logic.</p>
        </div>
        <div class="project zoom-in">
            <h4><a href="https://roshankumar29.github.io/Portfolio/" target="_blank">My Portfolio</a></h4>
            <p>Designed and developed an interactive portfolio website using HTML, CSS, and JavaScript.</p>
        </div>
    </section>
    
    <section id="resume" class="resume-section fade-in slide-up">
        <h2>My Resume</h2>
        <a href="updated_res.pdf" class="btn" target="_blank">Download Resume</a>
    </section>

    <section id="certifications" class="resume-section fade-in slide-up">
        <h2>Certifications</h2>
        <a href="web_dev_cer.pdf" target="_blank">Web Development (Udemy)</a> <br>
        <a href="ux_design.pdf" target="_blank">UX Design (Coursera)</a> <br>
        <a href="mastering_cpp.pdf" target="_blank">Mastering C++ (Udemy)</a> <br>
        <a href="cyber_security.pdf" target="_blank">Cyber Security (Udemy)</a>
    </section>
    
    <section id="coding" class="coding-links fade-in slide-up">
        <h2>Coding Profiles</h2>
        <a href="https://leetcode.com/u/Roshan_kumar_29/" target="_blank">LeetCode</a> <br>
        <a href="https://www.geeksforgeeks.org/user/Roshan/" target="_blank">GeeksforGeeks</a> <br>
        <a href="https://www.hackerrank.com/profile/roshankumar29121" target="_blank">HackerRank</a> <br>
        <a href="https://www.codechef.com/users/roshankumar29" target="_blank">CodeChef</a>
    </section>
    
    <section id="contact" class="fade-in slide-up">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:roshankumarofficial293@gmail.com">roshankumar291234@gmail.com</a></p>
        <p>Phone: <a href="tel:+917903995929">+91 7903995929</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/roshan-kumar29" target="_blank">roshan-kumar29</a></p>
        <p>GitHub: <a href="https://github.com/Roshankumar29" target="_blank">Roshan29</a></p>
    </section>
    
    <footer>
        <p>&copy; 2025 Roshan Kumar. All rights reserved.</p>
    </footer>
</body>
</html>



CSS


/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

/* Body Styling */
body {
    background-color: #121212;
    color: white;
    line-height: 1.6;
    text-align: center;
}

/* Header and Navigation */
header {
    background: #1a1a1a;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
}

nav h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f39c12;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li {
    display: inline-block;
}

nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px 15px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #f39c12;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    background: #f39c12;
    color: white;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.btn:hover {
    transform: scale(1.05);
}

/* Sections */
section {
    padding: 80px 20px;
    max-width: 1100px;
    margin: auto;
    text-align: center;
}

/* Projects */
.project {
    background: #222;
    padding: 20px;
    margin: 20px auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.project:hover {
    transform: scale(1.05);
}

.project h4 a {
    color: #f39c12;
    text-decoration: none;
}

.project h4 a:hover {
    text-decoration: underline;
}

/* Resume Section */
.resume-section iframe {
    border-radius: 10px;
    border: none;
}

/* Contact Section */
#contact a {
    color: #f39c12;
    text-decoration: none;
}

#contact a:hover {
    text-decoration: underline;
}

/* Footer */
footer {
    background: #1a1a1a;
    padding: 15px;
    text-align: center;
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        text-align: center;
    }

    nav ul {
        flex-direction: column;
        padding-top: 10px;
        gap: 10px;
    }

    .hero h2 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .btn {
        font-size: 1rem;
        padding: 8px 16px;
    }
}
.profile-img {
    width: 150px; /* Adjust size as needed */
    height: 150px; 
    border-radius: 50%; /* Makes it circular */
    object-fit: cover; /* Ensures the image fits well */
    border: 3px solid #fff; /* Optional: Adds a white border */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Optional: Adds a soft shadow */
    display: block;
    margin: 0 auto 20px; /* Centers the image */
}




JAVA SCRIPT


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

