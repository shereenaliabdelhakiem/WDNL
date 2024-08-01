window.addEventListener("scroll", function() {
    if (window.scrollY >= 72) {
        document.querySelector(".navbar").classList.add("fixed");
    } else {
        document.querySelector(".navbar").classList.remove("fixed");
    }
});
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
    this.classList.toggle('opened');
    
    document.body.classList.toggle('no-scroll');
});
document.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back_to_top');
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition > viewportHeight) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
document.querySelector('.back_to_top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
