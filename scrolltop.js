const scrollTopButton = document.getElementById('scrollTopButton');

window.addEventListener('scroll', () => {
    // Show the button if we've scrolled beyond 200px, else hide it
    if (window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    // Use smooth scrolling to scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
