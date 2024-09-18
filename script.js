document.getElementById('nav-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const toggleIcon = this.querySelector('i');

    // Toggle the 'active' class on the nav links
    navLinks.classList.toggle('active');

    // Change the icon between 'hamburger' and 'close'
    if (navLinks.classList.contains('active')) {
        toggleIcon.classList.remove('bi-list');
        toggleIcon.classList.add('bi-x');
    } else {
        toggleIcon.classList.remove('bi-x');
        toggleIcon.classList.add('bi-list');
    }
});


const toggleButton = document.querySelector('.toggle-nav'); // Button or icon for menu
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});