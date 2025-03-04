document.addEventListener("DOMContentLoaded", function() {
    const floatingText = document.querySelector('.floating-text');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingText.classList.add('visible');
          observer.unobserve(floatingText); // Stop observing after the animation triggers
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the element is visible
    });
  
    observer.observe(floatingText);
  });