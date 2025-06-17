
## 3. **README-FRONTEND.md** (HTML Folder)

```markdown
# 🏗️ Front-End Developer Guide

Welcome Front-End Developer! You build the structure of the app. This guide is just for you!

## 📁 Your Workspace
You work in the `/html` folder. Your files:
- `home.html` - Home page structure
- `explore.html` - Explore page structure
- `create.html` - Create page structure
- `profile.html` - Profile page structure

**Note:** You can also edit `index.html` in the root folder for main structure changes!

## 🚀 Getting Started

### Step 1: Understand the Current Structure
1. Open each HTML file
2. Read the comments (green text)
3. Notice the patterns in how things are built
4. See how elements connect to CSS classes

### Step 2: Plan Your Pages
Based on your client, what should each page become?
- Home → Welcome/Dashboard?
- Explore → Services/Products?
- Create → Forms/Booking?
- Profile → Account/Settings?

### Step 3: Start Changing Content
Begin with text - it's the easiest!
```html
<!-- Change this: -->
<h1>Welcome</h1>

<!-- To something like: -->
<h1>Welcome to Blue Park Dental</h1>
```

## 💡 HTML Developer Tips

### 1. Work in Small Steps
- Change one thing
- Save (Ctrl+S)
- Refresh browser
- See if it worked
- Repeat!

### 2. Use Semantic HTML
```html
<!-- Good - Clear meaning -->
<button>Click Me</button>
<h1>Main Title</h1>
<nav>Menu here</nav>

<!-- Not as good -->
<div onclick="...">Click Me</div>
<span class="big">Main Title</span>
<div>Menu here</div>
```

### 3. Keep the Structure
Don't delete these important parts:
- `<div class="content">` wrapper
- Script tags at the bottom
- Link tags at the top

## 🎯 Common Tasks

### Add a New Button
```html
<button class="btn btn-primary" onclick="yourFunction()">
    Button Text
</button>
```

### Add a New Card
```html
<div class="native-card">
    <div class="card-content">
        <h3 class="card-title">Title Here</h3>
        <p class="card-subtitle">Description here</p>
    </div>
</div>
```

### Add a List
```html
<div class="list-container">
    <div class="list-item">
        <div class="list-item-content">
            <div class="list-item-title">Item 1</div>
        </div>
    </div>
    <!-- Add more list items -->
</div>
```

### Add an Image
```html
<!-- Using emoji (easiest) -->
<div class="icon">🦷</div>

<!-- Using web image -->
<img src="https://example.com/image.jpg" alt="Description">
```

## 🤖 Getting Help from AI

### Perfect HTML Prompt Template:
```
I'm a teenage student learning HTML for a school project.
I'm building the structure for a [client type] app.
I need to create [what you need].
Can you show me simple HTML with comments explaining each part?
No complex features - just basic HTML.
```

### Example Prompts:

**For Forms:**
```
I need a simple appointment booking form for a dental app.
Just basic fields like name, date, and time.
Show me HTML with comments explaining each input.
```

**For Layouts:**
```
I need to show a list of services for a police app.
Each service should have a title and description.
Simple HTML structure please.
```

**For Navigation:**
```
How do I make a simple menu for a school app?
It needs links to grades, homework, and calendar.
Basic HTML only.
```

## 🔧 Troubleshooting

### "My page looks broken!"
1. Check all tags are closed: `<div>` needs `</div>`
2. Look for red underlines in your editor
3. Make sure quotes match: `"..."` not `"..."`
4. Check the browser console (F12)

### "My button doesn't work!"
1. Check onclick spelling
2. Make sure function name matches JS file
3. Look for typos in quotes
4. Try a simple `onclick="alert('test')"`

### "Content is in wrong place!"
1. Make sure you're inside `<div class="content">`
2. Check you didn't delete wrapper divs
3. Count opening and closing tags
4. Use proper nesting

## 📚 HTML Cheat Sheet

### Basic Structure
```html
<div class="container">
    <h1>Title</h1>
    <p>Paragraph text</p>
    <button>Click Me</button>
</div>
```

### Text Elements
```html
<h1>Biggest Title</h1>
<h2>Section Title</h2>
<h3>Smaller Title</h3>
<p>Regular paragraph</p>
<span>Inline text</span>
```

### Interactive Elements
```html
<button onclick="function()">Button</button>
<input type="text" placeholder="Type here">
<select>
    <option>Option 1</option>
    <option>Option 2</option>
</select>
```

### Containers
```html
<div>Generic container</div>
<section>Page section</section>
<nav>Navigation area</nav>
<header>Top area</header>
<footer>Bottom area</footer>
```

## ✨ Build Something Great!

Remember:
- Structure is like a house frame
- Make it solid before decorating
- Keep it organized and clean
- Test every change

You're the architect of the team - build something amazing! 🏗️
