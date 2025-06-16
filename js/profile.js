// Path: /js/profile.js
// JavaScript specific to the Profile page

function changeAvatar() {
    alert('Change avatar feature coming soon!');
}

function showPosts() {
    alert('Showing your posts...');
}

function showFollowers() {
    alert('Showing your followers...');
}

function showFollowing() {
    alert('Showing who you follow...');
}

function editProfile() {
    const newName = prompt('Enter your name:', 'John Doe');
    if (newName) {
        document.querySelector('.profile-name').textContent = newName;
    }
}

function showPrivacySettings() {
    alert('Privacy settings coming soon!');
}

function showNotifications() {
    alert('Notification settings coming soon!');
}

function showHelpCenter() {
    alert('Help center coming soon!');
}

function showTerms() {
    alert('Terms of Service coming soon!');
}

function signOut() {
    if (confirm('Are you sure you want to sign out?')) {
        alert('Signed out successfully!');
        // Use window.switchTab to access the global function
        window.switchTab(0, 'Home', 'home.html');
    }
}

// Add any other Profile-specific functions here
console.log('Profile page loaded!');