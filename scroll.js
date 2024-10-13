document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const navbar = document.querySelector('.navbar');

    // Function to handle loading screen display
    function hideLoadingScreen() {
        document.body.classList.add('loaded');
        navbar.classList.add('show');
    }

    // Function to handle navbar class changes based on scroll position
    function handleScroll() {
        if (window.scrollY > 150) {
            navbar.classList.add('box');  // Add the class when scrolled past 150px
        } else {
            navbar.classList.remove('box'); // Remove the class when scrolled above 150px
        }
    }

    // Set timeout to hide the loading screen after 1500ms
    setTimeout(hideLoadingScreen, 1500);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
