(function() {
  const header = document.querySelector('.header');
  window.onscroll = () => {
      if (window.pageYOffset > 40) {
          header.classList.add('header__moved')
      } else
      header.classList.remove('header__moved')
  }
}());



const hamburger = document.querySelector('#menu__toggle');

hamburger.addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('hide-scroll')) {
        body.classList.remove('hide-scroll');
    } else {
        body.classList.add('hide-scroll');
    }
})




var mobileMenuButton = document.querySelectorAll('menu__btn')
var mobileMenuItems = document.querySelectorAll('menu__nav')


// TOGGLE MOBILE MENU
var mobileMenu = false

if (mobileMenu === false) {

  function showMobileMenu() {

    mobileMenuButton.onclick(function() {
      console.log("clicked");
    })

    mobileMenu = true
  }

}





var slideIndex = 1;
    showSlides(slideIndex);
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }



