window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {
      navbar.classList.add('scrolled');

    } else {
      navbar.classList.remove('scrolled');
    }
  });
  