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