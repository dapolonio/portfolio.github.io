// Smooth scrolling function
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// Attach click event listeners to menu items
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

