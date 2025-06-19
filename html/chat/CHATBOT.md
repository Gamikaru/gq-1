# How to Add Your AI Chatbot to Your App

Hello Gentlemen's Quest team!

You're about to add a powerful, pre-built AI chatbot to your app. This guide will walk you through every step. Even with no prior coding experience, if you follow these instructions carefully, you'll have your chatbot running in no time!

The chatbot is a self-contained HTML file. Think of it as a complete, single webpage with all the code it needs (HTML, CSS, and JavaScript) already baked in. Your job is to simply add this file to your project and create a link or button so your users can open it.

---

### **Step 1: Find and Copy Your Chatbot Code**

First, you need to get the code for your specific client's chatbot.

1.  **Go to the Project Folder:** In this GitHub repository (`www.github/gamikaru/gq-1`), navigate to the `html/chat` folder. (go to html folder and then chat folder inside of that)
2.  **Find Your Client's File:** Look for the HTML file that matches your client case study. The filenames are:
    * `blue-park-dental-chat.html`
    * `coke-chat.html`
    * `cot-disaster-waste-chat.html`
    * `cot-waste-mgmt-chat.html`
    * `hcsd-chat.html`
    * `hcso-chat.html`
    * `teco-chat.html`
3.  **Open and Copy:** Click on the correct file. You will see all the code inside. Select **ALL** of the code (a quick way is `Ctrl + A` on Windows or `Cmd + A` on Mac) and copy it (`Ctrl + C` or `Cmd + C`).

---

### **Step 2: Create the Chatbot File in Your Project**

Now, let's go to your project space (the W3Schools space where your app lives) and add this code.

1.  **Create a New File:** In your project's file explorer on the left, create a new, blank file.
2.  **Name the File:** Name this new file `chat.html`.
    * *If you have an `html` folder in your project, it's best to create this new file inside that folder.*
3.  **Paste the Code:** Open your new, empty `chat.html` file, click inside, and paste all the code you copied earlier (`Ctrl + V` or `Cmd + V`).
4.  **Save the File!**

You now have a fully functional chatbot page living inside your project! The next step is to make a button so users can get to it.

---

### **Step 3: Link the Chatbot to Your App**

This is the most important step. You need to decide where you want to access the chatbot from. You can either add a button to one of your pages or add a "Chat" option to your main navigation bar.

#### **Option A: Add a "Chat" Button to a Page (Most Common)**

This is a great choice if you want a big, visible button on your home page.

1.  **Open an Existing Page:** Open the HTML file for the page where you want the button, like `index.html` or `home.html`.
2.  **Copy this Button Code:** Copy the following line of HTML code. This is a special link that we will make look like a button.

    ```html
    <a href="chat.html" class="chat-button">💬 Chat with our AI Assistant</a>
    ```

3.  **Paste the Button Code:** Find a good spot in your HTML file to paste this code. A good place is usually inside the `<body>` tag, after your main content and before the closing `</body>` tag.
4.  **Style the Button (Optional but Recommended!):** To make the link look like a nice button, open your main CSS file (it might be called `styles.css`, `global.css`, or `main.css`). Copy and paste the following CSS code at the very bottom of the file.

    ```css
    /* Style for the AI Chatbot Button */
    .chat-button {
      display: block;
      width: 80%;
      margin: 30px auto; /* Adds space above and below the button */
      padding: 15px;
      background-color: #007bff; /* A nice blue color */
      color: white; /* White text */
      text-align: center;
      text-decoration: none; /* Removes the underline from the link */
      font-size: 16px;
      font-weight: bold;
      border-radius: 12px; /* Rounded corners */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* A subtle shadow */
    }
    ```

> **Important:** If you put `chat.html` inside an `html` folder, you MUST update the link in Step 2 to point to it correctly: `<a href="html/chat.html" class="chat-button">...</a>`

#### **Option B: Add a "Chat" Link to Your Bottom Navigation Bar**

If your app uses a tab bar at the bottom for navigation, this is the best option.

1.  **Find Your Navigation Code:** Open the HTML file that contains your navigation bar (this is probably `index.html`). You will see a list of links that look something like this:
    ```html
    <nav>
      <a href="index.html">Home</a>
      <a href="profile.html">Profile</a>
      <a href="explore.html">Explore</a>
    </nav>
    ```
2.  **Copy the New Chat Link:** Copy the following line of HTML:
    ```html
    <a href="chat.html">Chat</a>
    ```
3.  **Paste the New Link:** Paste this new link into your navigation bar, alongside your other links. The result should look like this:
    ```html
    <nav>
      <a href="index.html">Home</a>
      <a href="profile.html">Profile</a>
      <a href="explore.html">Explore</a>
      <a href="chat.html">Chat</a> <!-- Your new link! -->
    </nav>
    ```

> **Important:** Just like in Option A, if you put `chat.html` inside an `html` folder, you MUST update the link: `<a href="html/chat.html">Chat</a>`

---

### **Step 4: Test Your App!**

You're done with the code! Now for the fun part.

1.  **Save All Files:** Make sure you have saved all the files you edited (`chat.html`, the page where you added the button/link, and your CSS file).
2.  **Run Your Project:** Click the "Run" button in W3Schools.
3.  **Check for the Link:** Look for your new "Chat with our AI Assistant" button or the "Chat" link in your navigation bar.
4.  **Click It!** Clicking your new link should open the chatbot page, ready to go!

If it works, congratulations! You have successfully integrated a powerful AI feature into your app.
If it doesn't work, don't panic! The most common issue is a simple typo in the file path. Go back to Step 3 and carefully check that the `href` in your `<a>` tag exactly matches the name and location of your `chat.html` file.

