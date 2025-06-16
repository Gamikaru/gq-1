// Path: /js/home.js
// JavaScript specific to the Home page

function goToProfile() {
    // Use window.switchTab to access the global function
    window.switchTab(3, 'Profile', 'profile.html');
}

function showSettings() {
    alert('Settings page coming soon!');
}

function showHelp() {
    alert('Help & Support coming soon!');
}

// Add any other Home-specific functions here
console.log('Home page loaded!');