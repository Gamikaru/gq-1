// Path: /js/main.js
// Main app functionality - keeps track of tabs and loads pages

// Current tab tracking
let currentTab = 0;

// IMPORTANT: Attach functions to window so they're globally available
window.switchTab = function(tabNumber, tabName, fileName) {
    // Update which tab is active
    currentTab = tabNumber;
    
    // Update tab bar appearance
    const allTabs = document.querySelectorAll('.tab-item');
    allTabs.forEach((tab, index) => {
        if (index === tabNumber) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    // Update header title
    document.querySelector('.header-title').textContent = tabName;
    
    // Load the new page content
    const contentContainer = document.getElementById('content-container');
    
    // Simple way to load content
    fetch(fileName)
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => {
            contentContainer.innerHTML = `
                <div class="content" style="text-align: center; padding: 40px;">
                    <h2>📁 Loading Error</h2>
                    <p>Please run this app from a web server:</p>
                    <code style="display: block; margin: 20px; padding: 10px; background: #f0f0f0; border-radius: 8px;">
                        python -m http.server 8000
                    </code>
                </div>
            `;
        });
    
    // Hide FAB on Create tab
    const fab = document.querySelector('.fab');
    if (tabNumber === 2) {
        fab.style.display = 'none';
    } else {
        fab.style.display = 'flex';
    }
}

// Attach other functions to window too
window.openBottomSheet = function() {
    document.getElementById('modalOverlay').classList.add('active');
}

window.closeBottomSheet = function() {
    document.getElementById('modalOverlay').classList.remove('active');
}

window.createAction = function(type) {
    console.log('Creating:', type);
    closeBottomSheet();
    
    // If we're not on the Create tab, switch to it
    if (currentTab !== 2) {
        switchTab(2, 'Create', 'create.html');
    }
}

// Load home page when app starts
window.onload = function() {
    switchTab(0, 'Home', './html/home.html');
};