// Path: /js/home.js
// 🏠 HOME PAGE FUNCTIONALITY
// ================================================
// This file controls all the interactive features on the Home page
// It's the main entry point for your app's functionality

// 📚 WHAT THIS FILE DOES:
// 1. Handles navigation to other pages
// 2. Shows settings and help information
// 3. Could include welcome animations
// 4. Manages quick actions from the home screen

// ============================================
// 👤 GO TO PROFILE FUNCTION
// ============================================
// This runs when someone clicks the "Profile" quick action
function goToProfile() {
    // Uses the global switchTab function from main.js
    // Parameters: (tab number, tab title, file path)
    window.switchTab(3, 'Profile', './html/profile.html');
    
    // 💡 ABOUT WINDOW.SWITCHTAB:
    // - First parameter (3) is the tab index (0,1,2,3)
    // - Second parameter is what shows in the header
    // - Third parameter is the HTML file to load
    
    // Note: We use window.switchTab because switchTab
    // is defined in main.js as a global function
}

// ============================================
// ⚙️ SHOW SETTINGS FUNCTION
// ============================================
// This runs when someone clicks "Settings"
function showSettings() {
    // Currently shows a coming soon message
    alert('Settings page coming soon!');
    
    // 💡 FOR YOUR APP:
    // You could create a settings.html page and navigate to it
    // Or show settings in a popup modal
    // 
    // Example settings for different apps:
    // - Dental: Notification preferences, appointment reminders
    // - Police: Alert radius, emergency contacts
    // - Energy: Usage alerts, billing preferences
    // - School: Grade notifications, parent access
}

// ============================================
// ❓ SHOW HELP FUNCTION
// ============================================
// This runs when someone clicks "Help & Support"
function showHelp() {
    // Currently shows a coming soon message
    alert('Help & Support coming soon!');
    
    // 💡 IDEAS FOR HELP SECTION:
    // 1. Create a FAQ list
    // 2. Add contact information
    // 3. Include tutorial videos
    // 4. Show common issues and solutions
    // 
    // You could also link to external help:
    // window.open('https://your-help-site.com', '_blank');
}

// ============================================
// 🚀 PAGE LOADED MESSAGE
// ============================================
// This confirms the JavaScript loaded successfully
console.log('Home page loaded!');

// 💡 ADDITIONAL FEATURES FOR YOUR HOME PAGE:
// 
// Welcome message for first-time users:
// function showWelcomeMessage() {
//     const hasVisited = localStorage.getItem('hasVisited');
//     if (!hasVisited) {
//         alert('Welcome to our app!');
//         localStorage.setItem('hasVisited', 'true');
//     }
// }
// 
// Quick action shortcuts:
// function quickAction(actionType) {
//     switch(actionType) {
//         case 'appointment':
//             window.switchTab(2, 'Create', './html/create.html');
//             break;
//         case 'emergency':
//             alert('Calling emergency number...');
//             break;
//     }
// }
// 
// Display user's name:
// function personalizeWelcome() {
//     const userName = localStorage.getItem('userName');
//     if (userName) {
//         document.querySelector('.hero h1').textContent = 
//             'Welcome back, ' + userName + '!';
//     }
// }

// 🎯 CUSTOMIZATION TIPS:
// - Add animations when the page loads
// - Show different content based on time of day
// - Display user-specific information
// - Add shortcuts to most-used features

// 📝 EXAMPLE: Time-based greeting
// function getGreeting() {
//     const hour = new Date().getHours();
//     if (hour < 12) return 'Good morning!';
//     if (hour < 18) return 'Good afternoon!';
//     return 'Good evening!';
// }