// Path: /js/create.js
// ➕ CREATE PAGE FUNCTIONALITY
// ================================================
// This file handles all the interactive features on the Create page
// It controls what happens when users click on creation options

// 📚 WHAT THIS FILE DOES:
// 1. Handles creating new posts/content
// 2. Manages photo uploads
// 3. Controls video sharing
// 4. Opens saved drafts

// ============================================
// 📝 CREATE POST FUNCTION
// ============================================
// This runs when someone clicks "Write a Post"
function createPost() {
    // Shows a popup asking for text input
    // prompt() is a simple way to get text from the user
    const text = prompt('What would you like to post?');
    
    // Check if the user entered something (didn't click cancel)
    if (text) {
        // For now, just show what they entered
        alert('Post created: ' + text);
        
        // 💡 FOR YOUR APP: Replace this with real functionality
        // Examples:
        // - For dental app: Save appointment request
        // - For police app: Save report details
        // - For energy app: Save service request
        // - For school app: Save homework submission
        
        // You might want to:
        // 1. Save the text to localStorage
        // 2. Send it to a server (advanced)
        // 3. Add it to a list on the page
        // 4. Navigate to a success page
    }
}

// ============================================
// 📷 UPLOAD PHOTO FUNCTION
// ============================================
// This runs when someone clicks "Upload Photo"
function uploadPhoto() {
    // Currently just shows a message
    alert('Photo upload coming soon!');
    
    // 💡 TO MAKE THIS WORK FOR REAL:
    // You could add an invisible file input to your HTML:
    // <input type="file" id="photoInput" accept="image/*" style="display: none;">
    // 
    // Then in this function:
    // document.getElementById('photoInput').click();
    // 
    // This would open the device's photo picker!
}

// ============================================
// 🎥 SHARE VIDEO FUNCTION
// ============================================
// This runs when someone clicks "Share Video"
function shareVideo() {
    // Currently just shows a message
    alert('Video sharing coming soon!');
    
    // 💡 FOR YOUR APP:
    // - Dental: Maybe this becomes "View procedure videos"
    // - Police: Could be "Submit video evidence"
    // - Energy: Might be "Watch energy saving tips"
    // - School: Could be "Submit video project"
}

// ============================================
// 📂 OPEN DRAFT FUNCTION
// ============================================
// This runs when someone clicks on a saved draft
// It receives the draft name as a parameter
function openDraft(draftName) {
    // Shows which draft was clicked
    alert('Opening draft: ' + draftName);
    
    // 💡 TO MAKE THIS FUNCTIONAL:
    // 1. Load the draft content from localStorage
    // 2. Fill in a form with the saved data
    // 3. Navigate to an edit page
    // 
    // Example of loading from localStorage:
    // const savedDrafts = localStorage.getItem('drafts');
    // if (savedDrafts) {
    //     const drafts = JSON.parse(savedDrafts);
    //     const thisDraft = drafts.find(d => d.name === draftName);
    //     // Now use thisDraft data to fill in forms
    // }
}

// ============================================
// 🚀 PAGE LOADED MESSAGE
// ============================================
// This shows in the browser console when the page loads
// Helpful for debugging to know the JavaScript is working
console.log('Create page loaded!');

// 💡 ADDING MORE FEATURES:
// 
// You might want to add functions like:
// - saveAsDraft(): Save work in progress
// - validateForm(): Check if all required fields are filled
// - showSuccessMessage(): Display a nice confirmation
// - clearForm(): Reset all inputs
// 
// Example of a new function:
// function saveAsDraft() {
//     // Get all the form values
//     // Save them to localStorage
//     // Show a "Draft saved!" message
// }

// 🎯 REMEMBER:
// - Test each function by clicking the buttons
// - Use console.log() to debug your code
// - Start simple, then add more features
// - Ask for help if something doesn't work!