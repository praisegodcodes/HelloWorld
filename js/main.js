/**
 * Main JavaScript Module
 * 
 * Acts as the primary entry point for all JavaScript functionality.
 * Initializes all required modules and handles page setup.
 */

// Global variables and configuration
const APP_CONFIG = {
  version: '1.0.0',
  name: 'HelloWorld Language Learning'
};

/**
 * Initialize the application when DOM is loaded
 */
function initApp() {
  console.log(`${APP_CONFIG.name} v${APP_CONFIG.version} initialized`);
  
  // Initialize UI components
  UI.initializeComponents();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);
