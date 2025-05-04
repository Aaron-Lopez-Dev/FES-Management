// script.js
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {
      navbar.classList.add('scrolled');

    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('heading');
    const originalHTML = heading.innerHTML.trim(); // Get the raw HTML
    heading.innerHTML = ""; // Clear the heading initially
    let index = 0;
  
    function typeWriter() {
      if (index < originalHTML.length) {
        // If the next character starts an HTML tag
        if (originalHTML[index] === "<") {
          // Find where the tag closes
          const closingIndex = originalHTML.indexOf(">", index);
          heading.innerHTML += originalHTML.slice(index, closingIndex + 1);
          index = closingIndex + 1;
        } else {
          heading.innerHTML += originalHTML[index];
          index++;
        }
        setTimeout(typeWriter, 50); // Typing speed
      }
    }
  
    typeWriter();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const navHeight = nav.offsetHeight; // 40px in your case

    document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        // Calculate how far down the page to scroll:
        const targetY = target.getBoundingClientRect().top
                      + window.pageYOffset
                      - navHeight;

        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      });
    });
  });
