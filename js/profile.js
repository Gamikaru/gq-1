// Path: /js/profile.js
// 👤 PROFILE PAGE FUNCTIONALITY
// ================================================
// This file handles all the user profile and account features
// It manages personal information, settings, and account actions

// 📚 WHAT THIS FILE DOES:
// 1. Manages user profile editing
// 2. Handles account settings
// 3. Shows user statistics
// 4. Controls sign out functionality

// ============================================
// 🖼️ CHANGE AVATAR FUNCTION
// ============================================
// This runs when someone clicks on their profile picture
function changeAvatar() {
    // Currently shows a coming soon message
    alert('Change avatar feature coming soon!');
    
    // 💡 TO IMPLEMENT AVATAR CHANGE:
    // 1. Let users pick from preset avatars/emojis
    // 2. Upload a photo (advanced)
    // 3. Use their initials
    // 
    // Simple emoji picker example:
    // const emojis = ['😊', '😎', '🤓', '🤗', '😇'];
    // const chosen = prompt('Pick a number 1-5 for your avatar');
    // if (chosen >= 1 && chosen <= 5) {
    //     document.querySelector('.profile-avatar').textContent = 
    //         emojis[chosen - 1];
    // }
}

// ============================================
// 📄 SHOW POSTS FUNCTION
// ============================================
// This runs when someone clicks on their posts count
function showPosts() {
    // Currently shows a simple message
    alert('Showing your posts...');
    
    // 💡 FOR YOUR APP:
    // - Dental: Show appointment history
    // - Police: Show submitted reports
    // - Energy: Show usage history
    // - School: Show submitted assignments
}

// ============================================
// 👥 SHOW FOLLOWERS FUNCTION
// ============================================
// This runs when someone clicks on followers count
function showFollowers() {
    // Currently shows a simple message
    alert('Showing your followers...');
    
    // 💡 This might not apply to all apps
    // You could repurpose this for:
    // - Dental: Family members on account
    // - Police: Community connections
    // - Energy: Household members
    // - School: Classmates or study groups
}

// ============================================
// 👥 SHOW FOLLOWING FUNCTION
// ============================================
// This runs when someone clicks on following count
function showFollowing() {
    // Currently shows a simple message
    alert('Showing who you follow...');
    
    // 💡 Consider if this makes sense for your app
    // Alternative uses:
    // - Dental: Favorite doctors
    // - Police: Subscribed alert areas
    // - Energy: Monitored devices
    // - School: Enrolled classes
}

// ============================================
// ✏️ EDIT PROFILE FUNCTION
// ============================================
// This runs when someone clicks "Edit Profile"
function editProfile() {
    // Asks for a new name with current name as default
    const newName = prompt('Enter your name:', 'John Doe');
    
    // If they entered a name (didn't cancel)
    if (newName) {
        // Update the name on the page
        document.querySelector('.profile-name').textContent = newName;
        
        // 💡 TO SAVE THE NAME:
        // localStorage.setItem('userName', newName);
        // 
        // To load it when page opens:
        // const savedName = localStorage.getItem('userName');
        // if (savedName) {
        //     document.querySelector('.profile-name').textContent = savedName;
        // }
    }
}

// ============================================
// 🔒 PRIVACY SETTINGS FUNCTION
// ============================================
// This runs when someone clicks "Privacy Settings"
function showPrivacySettings() {
    // Currently shows a coming soon message
    alert('Privacy settings coming soon!');
    
    // 💡 PRIVACY OPTIONS MIGHT INCLUDE:
    // - Who can see your information
    // - Data sharing preferences
    // - Communication preferences
    // - Account visibility
}

// ============================================
// 🔔 NOTIFICATIONS FUNCTION
// ============================================
// This runs when someone clicks "Notifications"
function showNotifications() {
    // Currently shows a coming soon message
    alert('Notification settings coming soon!');
    
    // 💡 NOTIFICATION OPTIONS:
    // - Email notifications on/off
    // - Push notifications (advanced)
    // - SMS alerts
    // - Notification frequency
}

// ============================================
// ❓ HELP CENTER FUNCTION
// ============================================
// This runs when someone clicks "Help Center"
function showHelpCenter() {
    // Currently shows a coming soon message
    alert('Help center coming soon!');
    
    // 💡 Same as the help function in home.js
    // You might want to reuse that code
}

// ============================================
// 📜 TERMS OF SERVICE FUNCTION
// ============================================
// This runs when someone clicks "Terms of Service"
function showTerms() {
    // Currently shows a coming soon message
    alert('Terms of Service coming soon!');
    
    // 💡 You could:
    // - Show terms in a modal
    // - Link to an external page
    // - Display a simplified version
}

// ============================================
// 🚪 SIGN OUT FUNCTION
// ============================================
// This runs when someone clicks "Sign Out"
function signOut() {
    // Ask for confirmation first
    if (confirm('Are you sure you want to sign out?')) {
        // Show success message
        alert('Signed out successfully!');
        
        // Navigate back to home page
        window.switchTab(0, 'Home', './html/home.html');
        
        // 💡 FOR A REAL SIGN OUT:
        // 1. Clear user data from localStorage
        // localStorage.removeItem('userName');
        // localStorage.removeItem('userEmail');
        // 
        // 2. Reset any user-specific settings
        // 3. Maybe show a login screen
    }
}

// ============================================
// 🚀 PAGE LOADED MESSAGE
// ============================================
// Confirms the JavaScript loaded correctly
console.log('Profile page loaded!');

// 💡 ADDITIONAL PROFILE FEATURES:
// 
// Load user data when page opens:
// window.addEventListener('DOMContentLoaded', function() {
//     const savedName = localStorage.getItem('userName');
//     if (savedName) {
//         document.querySelector('.profile-name').textContent = savedName;
//     }
// });
// 
// Update statistics dynamically:
// function updateStats() {
//     // Get saved data
//     // Count items
//     // Update the display
// }
// 
// Profile completion meter:
// function calculateProfileCompletion() {
//     let completed = 0;
//     if (localStorage.getItem('userName')) completed += 25;
//     if (localStorage.getItem('userEmail')) completed += 25;
//     // ... check other fields
//     return completed;
// }

// 🎯 REMEMBER:
// - Save important data to localStorage
// - Always confirm before destructive actions
// - Update the page when data changes
// - Test each function thoroughly