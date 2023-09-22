document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress2');

  // Intersection Observer to trigger animation
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBar = entry.target.querySelector('.progress-bar2');
              const percentage = parseInt(entry.target.getAttribute('data-percentage'), 10);
              
              // Set the width to trigger animation
              progressBar.style.width = percentage + '%';

              // Add class for color animation if necessary
              // Determine the color based on the percentage
              if (percentage <= 33) {
                  progressBar.classList.add('low');
              } else if (percentage <= 66) {
                  progressBar.classList.add('medium');
              } else {
                  progressBar.classList.add('high');
              }

              observer.unobserve(entry.target); // Stop observing the current target
          }
      });
  }, {
      threshold: 0.1 // Start the callback when at least 10% of the element is visible
  });

  progressBars.forEach(bar => observer.observe(bar));
});
