/**
 * UI Module
 * 
 * Manages all user interface interactions and component initializations.
 * Handles DOM manipulation and event listeners for UI elements.
 */

// Create UI namespace
const UI = {
  /**
   * Initialize all UI components
   */
  initializeComponents: function() {
    this.initNavigationEvents();
    this.initFeatureHoverEffects();
  },

  /**
   * Set up navigation event handling
   */
  initNavigationEvents: function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // For now just prevent default since we don't have real navigation
        if (link.getAttribute('href') === '#') {
          e.preventDefault();
          console.log('Navigation clicked:', link.textContent);
        }
      });
    });
  },
  
  /**
   * Set up hover effects for feature items
   * This enhances the CSS hover effects with JavaScript
   */
  initFeatureHoverEffects: function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        // Additional JavaScript hover effects could be added here
        // Currently using CSS for hover animations
      });
    });
  }
};
