// PYLO Header Section JS - Modular and accessible

document.addEventListener('DOMContentLoaded', function() {
  // Example: Sticky header
  var header = document.querySelector('.pylo-header');
  if (header && header.classList.contains('pylo-header--sticky')) {
    var lastScroll = 0;
    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 80) {
        header.classList.add('pylo-header--hidden');
      } else {
        header.classList.remove('pylo-header--hidden');
      }
      lastScroll = currentScroll;
    });
  }
  // Example: Mobile nav toggle (if you add a button and menu)
  var navToggle = document.querySelector('.pylo-header__nav-toggle');
  var nav = document.querySelector('.pylo-header__nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('pylo-header__nav--open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('pylo-header__nav--open'));
    });
  }
}); 