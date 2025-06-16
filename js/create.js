// Path: /js/create.js
// JavaScript specific to the Create page

function createPost() {
    const text = prompt('What would you like to post?');
    if (text) {
        alert('Post created: ' + text);
    }
}

function uploadPhoto() {
    alert('Photo upload coming soon!');
}

function shareVideo() {
    alert('Video sharing coming soon!');
}

function openDraft(draftName) {
    alert('Opening draft: ' + draftName);
}

// Add any other Create-specific functions here
console.log('Create page loaded!');