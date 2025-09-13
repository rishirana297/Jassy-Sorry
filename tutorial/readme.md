# 💕 Sorry Letter Website - Customization Guide

## 🚀 Quick Setup Instructions
# My Video tutorials : 
---> For getting the sharable link : https://youtu.be/bFCnDsQwNvA


### 1. Install Required Software

VS Code Installation:
- Download and install VS Code if you don't have it
- Tutorial: https://youtu.be/3eCmc0t6aqA?si=TkV0bVEz_95FbMmi

Node.js Installation:
- Download and install Node.js if you don't have it
- Tutorial: https://youtu.be/uCgAuOYpJd0?si=2ICwr3Ih1P_ru9KA

⚠️ Important: Both VS Code and Node.js are required!

### 2. Open the Project

1. Open the "project-sorry-renew" folder in VS Code

2. ⚠️ Important: Open the main project folder only!

### 3. Install Dependencies

3. Open terminal in VS Code (Terminal → New Terminal)
4. Type this command and press Enter:

   npm install

   **If you get a script error on Windows, run this first:**

   Set-ExecutionPolicy -Scope CurrentUser Unrestricted


### 4. Run the Website

5. Type this command and press Enter:
   npm run dev


6. Ctrl + Click on the localhost link to view your website!

---

## 🎨 Customization Guide

### 📝 How to Change Main Content

#### 1. Update Names and Greetings
File to edit: `src/App.tsx`

Find and change the greeting around line 94.

## change according to you


#### 2. Update the Apology Letter Content
File to edit: `src/App.tsx`

Find the letter content (around line 321):


## change according to you


Find the letter paragraphs (around line 323)

## change according to you


#### 3. Update the Poem Section
File to edit: `src/App.tsx`

Find the poem (around line 271):

**Replace with your own poem:**


#### 4. Change Sticky Notes Messages

File to edit: `src/App.tsx`

Find the stickyNotes array (around line 148):

## change according to you


### 🖼️ How to Replace Images

#### 1. Add Your Images
1. Put your images in the `src/images/` folder
2. Supported formats: `.jpg`, `.png`, `.gif`

#### 2. Update Image References
**File to edit:** `src/App.tsx`

Find the image imports (at the top):
```tsx
import Img1 from './images/pic1.gif';
import Img2 from './images/pic2.gif';
import Img3 from './images/pic3.jpg';
```
**Replace with your images:**
```tsx
import Img1 from './images/your-photo1.jpg';
import Img2 from './images/your-photo2.jpg';
import Img3 from './images/couple-photo.jpg';
```

#### 3. Update Image Captions
Find the panels array (around line 241):
```tsx
text: "I know I've been distant, and I'm truly sorry...",
caption: "I hope you can forgive me."
```

**update according to you**


### 🎵 How to Change Background Music

#### 1. Prepare Your Music
- Get your music file in `.mp3` format
- Keep file size under 10MB for better loading
- Name it `music.mp3`

#### 2. Replace the Music File
- Put your `music.mp3` file in the `src/` folder
- Update the import in `src/App.tsx`:
```tsx
import Musicc from './music.mp3';
```

### 🎮 Customize the Heart Catching Game

#### 1. Change Game Messages
File to edit: `src/components/HeartCatcherGame.tsx`

Find the game completion message (around line 260):
```tsx
"Thank you for playing! I hope this little game shows how much I care..."
```
**Replace with your message:**


#### 2. Adjust Game Difficulty
Change the goal score (around line 21):
```tsx
const goalScore = 15; // Make it easier: 10, harder: 20
```

Change game time (around line 32):
```tsx
setTimeLeft(30); // Change to 45 for more time, 20 for less
```

### 🎨 Color Customization

#### 1. Change Color Scheme

File to edit: `src/App.tsx`

Find gradient backgrounds:

className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50"




**Try different color combinations:**

// Romantic Pink
className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50"

// Purple Theme
className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50"

// Warm Theme
className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50"



#### 2. Change Button Colors
Find button classes:

className="bg-gradient-to-r from-pink-500 to-purple-500"

**Change to:**

className="bg-gradient-to-r from-red-500 to-pink-500"  // Red theme
className="bg-gradient-to-r from-blue-500 to-purple-500"  // Blue theme


### 🌟 Add Personal Touches

#### 1. Add More Photos
In the panels section, you can add more image panels:
```tsx
{
  text: "Remember this special day?",
  img: YourNewImage,
  caption: "I cherish every moment with you."
}
```

#### 2. Add Custom Animations
The website uses Framer Motion. You can modify hover effects:
```tsx
whileHover={{ scale: 1.05, rotate: 2 }}  // Adds scaling and rotation on hover
```

---

## 🌐 How to Share Your Website
Watch my tutorial:  https://youtu.be/bFCnDsQwNvA

### Vercel
1. Push your code to GitHub
2. Connect your GitHub to [vercel.com](https://vercel.com)
3. Deploy automatically



## 🆘 Common Issues & Solutions

### ❌ "Cannot find module" errors
Solution: Run `npm install` to install all dependencies

### ❌ Images not loading
Solutions:
1. Make sure images are in `src/images/` folder
2. Check the import paths match your file names
3. Supported formats: `.jpg`, `.png`, `.gif`

### ❌ Music not playing
Solutions:
1. Check if `music.mp3` is in the `src/` folder
2. Some browsers block autoplay (user needs to click music button)
3. File size should be under 10MB

### ❌ Changes not showing
Solutions:
1. Save your files (Ctrl+S)
2. The dev server should auto-reload
3. Hard refresh browser (Ctrl+Shift+R)



## 📁 Project Structure

project-sorry-renew/
├── src/
│   ├── components/
│   │   ├── ScrollReveal.tsx       # Animation component
│   │   └── HeartCatcherGame.tsx   # Interactive game
│   ├── images/                    # Your images go here
│   ├── App.tsx                    # Main application file
│   ├── main.tsx                   # App entry point
│   ├── index.css                  # Global styles
│   └── music.mp3                  # Background music
├── public/                        # Static assets
├── package.json                   # Project dependencies
└── README.md                      # This file



## 🎉 Final Tips

- Test everything before sharing the link
- Keep backups of your original content
- Personal touch - add inside jokes and special memoriest

**Good luck with your apology! 💕**


## 📞 Need Help?

If you're stuck:
1. Check the common issues section above
2. Make sure you saved all files
3. Try restarting the development server
4. Contact if needed help still

