/**
 * Animation Module
 * 
 * Handles all animation logic for the HelloWorld language learning platform.
 * Currently focuses on skill bar animations with intersection observer.
 */

/**
 * Initialize skill bar animations
 * Uses IntersectionObserver to trigger animations when elements enter viewport
 */
function initSkillBarAnimations() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  
  // Create an observer instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Set the width according to data attribute when visible
        entry.target.style.width = entry.target.getAttribute('data-width');
      } else {
        // Reset width when not visible
        entry.target.style.width = '0%';
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of element is visible
  
  // Start observing each skill bar
  bars.forEach(bar => {
    observer.observe(bar);
  });
}

// Initialize all animations when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initSkillBarAnimations();
});
