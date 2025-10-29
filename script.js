
function showSection(sectionId) {
    console.log(`Navigating to section: ${sectionId}`);
    
}


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    

    const contactForm = document.querySelector('.contact-form form');
    
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            
            const nameInput = this.querySelector('input[type="text"][placeholder*="Name"]');
            const emailInput = this.querySelector('input[type="email"]');
            const messageInput = this.querySelector('textarea');
            
            
            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';
            
            let isValid = true;

            
            if (name === '') {
                alert('Please enter your name.');
                nameInput.focus();
                isValid = false;
            } else if (email === '') {
                alert('Please enter your email address.');
                emailInput.focus();
                isValid = false;
            } else if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                isValid = false;
            } else if (message === '') {
                alert('Please enter your message.');
                messageInput.focus();
                isValid = false;
            }

            if (isValid) {
                
                alert('Form submitted successfully! (In a live site, data would be sent to a server.)');
                
                
                
                this.reset(); 
            }
        });
    }


    if (typeof Typed !== 'undefined') {
        new Typed('.text', {
            strings: ["Full Stack Developer", "Data Scientist", "Java Programmer", "Web Designer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.warn("Typed.js library not found. The text animation will not run.");
    }
});