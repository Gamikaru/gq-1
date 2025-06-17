// Path: /js/main.js
// 🎮 MAIN APP CONTROLLER - The Brain of Your App!
// ================================================
// This file controls the entire app. Think of it like a TV remote -
// it changes channels (pages) and controls what you see!

// 📚 WHAT YOU'LL LEARN HERE:
// 1. How to track which page (tab) is active
// 2. How to load different pages without refreshing
// 3. How to make functions available everywhere in your app
// 4. How to handle errors gracefully

// ============================================
// 🎯 SECTION 1: KEEPING TRACK OF THE CURRENT TAB
// ============================================
// This variable remembers which tab is currently selected
// It starts at 0 (Home tab) because arrays start counting at 0!
let currentTab = 0;

// 🤔 WHY DO WE NEED THIS?
// Imagine you're watching TV - you need to know what channel you're on!
// This variable is like the channel number display on your TV.

// ============================================
// 🎯 SECTION 2: THE TAB SWITCHING FUNCTION
// ============================================
// This is the most important function - it changes between pages!

// 💡 MAKING FUNCTIONS GLOBAL
// By adding functions to 'window', they become available everywhere
// It's like making a TV remote work from any room in the house!

window.switchTab = function(tabNumber, tabName, fileName) {
    // 📝 FUNCTION INPUTS EXPLAINED:
    // - tabNumber: Which tab to activate (0=Home, 1=Explore, 2=Create, 3=Profile)
    // - tabName: The title to show in the header (like "Home" or "Profile")
    // - fileName: Which HTML file to load (like './html/home.html')
    
    console.log(`🔄 Switching to tab ${tabNumber}: ${tabName}`);
    
    // STEP 1: Remember which tab we're on
    currentTab = tabNumber;
    
    // STEP 2: Update the visual appearance of tabs
    // First, find ALL the tab buttons
    const allTabs = document.querySelectorAll('.tab-item');
    
    // 🎨 VISUAL FEEDBACK
    // Loop through each tab and update its appearance
    allTabs.forEach((tab, index) => {
        // 🤓 CODING CONCEPT: forEach Loop
        // This runs the code inside for EACH tab
        // 'tab' = the current tab element
        // 'index' = its position (0, 1, 2, or 3)
        
        if (index === tabNumber) {
            // This is the tab we clicked - make it active!
            tab.classList.add('active');
            console.log(`✅ Tab ${index} is now active`);
        } else {
            // These are the other tabs - make them inactive
            tab.classList.remove('active');
        }
    });
    
    // STEP 3: Update the page title at the top
    const headerTitle = document.querySelector('.header-title');
    if (headerTitle) {
        headerTitle.textContent = tabName;
        // 💡 TIP: textContent is safer than innerHTML for plain text
    }
    
    // STEP 4: Load the new page content
    loadPageContent(fileName);
    
    // STEP 5: Special handling for the Create tab
    // We hide the floating action button (+) on the Create page
    // because that page already has create options
    updateFloatingActionButton(tabNumber);
};

// ============================================
// 🎯 SECTION 3: LOADING PAGE CONTENT
// ============================================
// This function loads HTML files without refreshing the page!

function loadPageContent(fileName) {
    console.log(`📄 Loading page: ${fileName}`);
    
    // Find the container where we'll put the new content
    const contentContainer = document.getElementById('content-container');
    
    // 🌐 FETCH API - Loading Files
    // fetch() is like ordering food - you request it and wait for delivery!
    fetch(fileName)
        .then(response => {
            // 🤓 PROMISES EXPLAINED:
            // .then() means "when the file loads successfully, do this"
            // It's like saying "when the pizza arrives, then eat it"
            
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            return response.text();
        })
        .then(html => {
            // Success! Put the HTML into our container
            contentContainer.innerHTML = html;
            console.log(`✅ Page loaded successfully!`);
            
            // 🎯 CHALLENGE: Add a fade-in animation here!
            // Hint: Add a CSS class with opacity transition
        })
        .catch(error => {
            // 🚨 ERROR HANDLING
            // If something goes wrong, show a helpful message
            console.error('❌ Error loading page:', error);
            
            // Show user-friendly error message
            contentContainer.innerHTML = `
                <div class="content error-state">
                    <div class="error-card">
                        <h2>📁 Oops! Page Not Found</h2>
                        <p>We couldn't load this page. This usually happens when:</p>
                        <ul>
                            <li>You're opening the file directly (file:// URL)</li>
                            <li>The page file is missing</li>
                        </ul>
                        
                        <div class="error-solution">
                            <h3>💡 How to Fix This:</h3>
                            <p>Run a local web server using one of these commands:</p>
                            <code>python -m http.server 8000</code>
                            <p>or</p>
                            <code>npx http-server</code>
                        </div>
                    </div>
                </div>
            `;
        });
}

// ============================================
// 🎯 SECTION 4: FLOATING ACTION BUTTON (FAB)
// ============================================
// The + button that floats in the corner

function updateFloatingActionButton(tabNumber) {
    const fab = document.querySelector('.fab');
    
    if (!fab) return; // Safety check - stop if FAB doesn't exist
    
    if (tabNumber === 2) { // 2 = Create tab
        // Hide FAB on Create page (it already has create options)
        fab.style.display = 'none';
        console.log('🔽 FAB hidden on Create page');
    } else {
        // Show FAB on all other pages
        fab.style.display = 'flex';
        console.log('🔼 FAB visible');
    }
}

// ============================================
// 🎯 SECTION 5: BOTTOM SHEET FUNCTIONS
// ============================================
// These control the slide-up menu when you tap the + button

window.openBottomSheet = function() {
    console.log('📤 Opening bottom sheet...');
    
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.classList.add('active');
        
        // 🎯 CHALLENGE: Add swipe-down gesture to close!
        // Research: Touch events in JavaScript
    }
};

window.closeBottomSheet = function() {
    console.log('📥 Closing bottom sheet...');
    
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
};

// ============================================
// 🎯 SECTION 6: CREATE ACTIONS
// ============================================
// What happens when you choose an option from the bottom sheet

window.createAction = function(type) {
    console.log(`🎨 Creating new ${type}`);
    
    // Close the bottom sheet first
    closeBottomSheet();
    
    // If we're not already on the Create tab, go there
    if (currentTab !== 2) {
        switchTab(2, 'Create', './html/create.html');
        
        // 💡 ADVANCED TIP:
        // You could pass the 'type' to the Create page
        // and automatically start that creation flow!
    }
    
    // 🎯 CHALLENGE: Make each type do something different
    // For example:
    // - 'Post' could open a text editor
    // - 'Photo' could open a file picker
    // - 'Video' could start camera access
};

// ============================================
// 🎯 SECTION 7: APP INITIALIZATION
// ============================================
// This runs when the app first loads

window.onload = function() {
    console.log('🚀 App starting up!');
    
    // Load the home page by default
    switchTab(0, 'Home', './html/home.html');
    
    // 🎯 EXTRA FEATURES YOU COULD ADD:
    // 1. Check if user has a saved preference
    // 2. Show a welcome message for first-time users
    // 3. Load user settings from localStorage
    // 4. Start background tasks (like checking for updates)
    
    // Example: Welcome message for new users
    if (!localStorage.getItem('hasVisited')) {
        console.log('👋 Welcome, new user!');
        localStorage.setItem('hasVisited', 'true');
        // You could show a tutorial or welcome modal here!
    }
};

// ============================================
// 🎯 BONUS SECTION: HELPER FUNCTIONS
// ============================================
// Useful utilities for your app

// 🕒 Debounce Function - Prevents functions from running too often
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 📱 Check if we're on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
