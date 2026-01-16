# 🎭 Mask Tasker Website

Welcome to the Mask Tasker website! This is a simple, easy-to-manage static website for your monthly challenge game.

## 📁 Project Structure

```
masktasker-website/
├── index.html              # Home page
├── month.html              # Template for displaying monthly challenges
├── results.html            # Overall results/leaderboard page
├── css/
│   └── style.css          # All styling for the website
├── js/
│   └── main.js            # JavaScript utilities
├── data/
│   ├── config.json        # Main configuration (list of all months)
│   └── months/
│       ├── month1.json    # January data
│       ├── month2.json    # February data
│       └── ...            # Add more months here
├── images/
│   └── months/
│       ├── month1/        # January images
│       ├── month2/        # February images
│       └── ...
├── videos/
│   └── months/
│       ├── month1/        # January videos
│       ├── month2/        # February videos
│       └── ...
└── README.md              # This file!
```

## 🚀 Getting Started

### Viewing the Website Locally

1. **Option 1: Open directly in browser**
   - Navigate to the `masktasker-website` folder
   - Double-click `index.html`
   - The website will open in your default browser

2. **Option 2: Use a local web server (recommended)**
   - If you have Python installed, open a terminal/command prompt
   - Navigate to the `masktasker-website` folder
   - Run: `python -m http.server 8000`
   - Open your browser and go to: `http://localhost:8000`

### Why use a local server?
Some browsers have security restrictions when opening HTML files directly. Using a local server ensures all features work correctly, especially when loading JSON data files.

## ✏️ How to Add/Edit Content

### Step 1: Adding a New Month

1. **Update the config file** (`data/config.json`)

   Open `data/config.json` and add a new month to the `months` array:

   ```json
   {
     "id": "8",
     "title": "August 2024",
     "date": "August 2024",
     "shortDescription": "Your task description here"
   }
   ```

   **Important:**
   - The `id` should be the next number in sequence
   - Keep it simple - just the number, no "month" prefix
   - The `shortDescription` appears on the home page

2. **Create a new month data file**

   - Go to the `data/months/` folder
   - Copy an existing month file (e.g., `month1.json`)
   - Rename it to match your new month (e.g., `month8.json`)
   - Edit the contents (see "Editing Month Data" below)

3. **Create folders for media**

   - Create `images/months/month8/` for photos
   - Create `videos/months/month8/` for videos

### Step 2: Editing Month Data

Open your month's JSON file (e.g., `data/months/month1.json`). Here's what each field means:

```json
{
  "id": "1",                           // Must match the ID in config.json
  "title": "January 2024",             // Full month name
  "date": "January 2024",              // Display date
  "taskDescription": "Build the tallest...",  // Full task instructions
  "submissions": [                     // Array of team submissions
    {
      "teamName": "The Tower Titans",  // Team name
      "score": 5,                      // Score out of 5
      "description": "Our team built...",  // Description of their submission
      "images": [                      // List of image paths
        "images/months/month1/tower-titans-1.jpg",
        "images/months/month1/tower-titans-2.jpg"
      ],
      "videos": [                      // List of video paths
        "videos/months/month1/tower-titans-build.mp4"
      ]
    }
  ]
}
```

### Step 3: Adding Images

1. Take or collect your team photos
2. Save them in the appropriate month folder: `images/months/month1/`
3. Use descriptive filenames like `team-name-1.jpg`
4. Update the JSON file with the image paths

**Image Tips:**
- Supported formats: JPG, PNG, GIF
- Recommended size: 1200x800 pixels
- Keep files under 2MB for fast loading
- Use lowercase filenames with hyphens (e.g., `my-team-photo.jpg`)

### Step 4: Adding Videos

1. Place your video files in: `videos/months/month1/`
2. Use MP4 format for best compatibility
3. Update the JSON file with the video paths

**Video Tips:**
- MP4 format is most compatible
- Keep files under 50MB when possible
- Use 720p or 1080p resolution
- Use tools like HandBrake to compress large videos
- Filename example: `team-name-build.mp4`

**Alternative - Embedding from YouTube:**
If you prefer to host videos on YouTube instead, you'll need to modify the `month.html` template. Replace the video code with an iframe embed. (Let me know if you need help with this!)

### Step 5: Updating Scores

To change a team's score:

1. Open the month's JSON file (e.g., `data/months/month1.json`)
2. Find the team's submission
3. Change the `score` value (must be between 0 and 5)
4. Save the file
5. Refresh the website in your browser

The results page will automatically recalculate total scores!

## 🎨 Customizing the Website

### Changing Colors

Open `css/style.css` and modify the color variables at the top:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;    /* Blue accent */
    --accent-color: #e74c3c;       /* Red accent */
    --light-bg: #ecf0f1;           /* Light background */
}
```

### Changing the Site Name

1. Open `data/config.json`
2. Update `siteName` and `siteDescription`
3. These changes will appear in the header

### Adding More Teams

Simply add more submission objects to the `submissions` array in any month's JSON file. The website supports unlimited teams!

## 🌐 Deploying to the Web

Once you're happy with your website, you need to upload it to a web hosting service. Here are some popular options:

### Free Hosting Options:

1. **Netlify** (Recommended for beginners)
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up for free
   - Drag and drop the entire `masktasker-website` folder
   - You'll get a free URL like `your-site.netlify.app`
   - You can connect your own domain (Masktasker.co.uk)

2. **GitHub Pages**
   - Create a GitHub account
   - Create a new repository
   - Upload your website files
   - Enable GitHub Pages in repository settings
   - Your site will be at `username.github.io/repository-name`

3. **Vercel**
   - Similar to Netlify
   - Go to [vercel.com](https://vercel.com)
   - Sign up and deploy

### Connecting Your Domain (Masktasker.co.uk)

Once your site is hosted:

1. Log in to your domain registrar (where you bought Masktasker.co.uk)
2. Find DNS settings
3. Follow your hosting provider's instructions to connect your domain
4. Usually involves adding a CNAME record or changing nameservers

**Need help with this?** Most hosting providers have excellent documentation and support.

## 📝 Common Tasks

### Adding a new team to an existing month

1. Open `data/months/monthX.json`
2. Add a new object to the `submissions` array:
   ```json
   {
     "teamName": "New Team Name",
     "score": 4,
     "description": "Description here",
     "images": ["images/months/month1/new-team.jpg"],
     "videos": []
   }
   ```
3. Save and refresh

### Removing a month

1. Open `data/config.json`
2. Remove the month from the `months` array
3. You can keep or delete the month's JSON file (it won't be displayed)

### Changing the number of months

The website supports any number of months! Just add or remove entries from `data/config.json`. You're not limited to 7 months.

## ❓ Troubleshooting

**Problem:** Images or videos don't appear

- Check the file paths in your JSON file match the actual file locations
- Make sure filenames match exactly (including uppercase/lowercase)
- Check that files are in the correct folders
- Try using a local web server instead of opening files directly

**Problem:** Changes don't appear

- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Make sure you saved all JSON files
- Check the browser console for errors (F12 to open)

**Problem:** JSON file errors

- Use a JSON validator like [jsonlint.com](https://jsonlint.com)
- Common mistakes:
  - Missing commas between items
  - Extra comma after the last item
  - Missing quotes around strings
  - Unclosed brackets or braces

**Problem:** Website looks broken

- Make sure all CSS and JS files are in the correct folders
- Check that `style.css` is in the `css/` folder
- Check that `main.js` is in the `js/` folder

## 🎯 Quick Reference

### File Naming Rules
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `team-name-action.jpg` not `img1.jpg`
- No special characters except hyphens and underscores

### JSON Editing Tips
- Always use double quotes `"` not single quotes `'`
- Numbers don't need quotes: `"score": 5` ✓
- Text needs quotes: `"teamName": "Team Name"` ✓
- Don't forget commas between items
- No comma after the last item in an array or object

### Scores
- Must be whole numbers between 0 and 5
- Results page automatically calculates totals
- You can use decimals if you want (e.g., 4.5)

## 📞 Need Help?

If you get stuck:

1. Check this README again carefully
2. Look at the example files (`month1.json` and `month2.json`)
3. Use a JSON validator to check your syntax
4. Check the browser console (F12) for error messages
5. Try copying a working example and modifying it

## 🎉 Tips for Success

1. **Start small** - Get one month working perfectly before adding more
2. **Keep backups** - Save copies of your JSON files before making big changes
3. **Test locally** - Always test changes on your computer before uploading to the web
4. **Consistent naming** - Use the same naming pattern for all files
5. **Optimize media** - Compress images and videos before adding them
6. **Regular updates** - Update the site soon after each monthly challenge while it's fresh

## 📚 What's Next?

Now that you have your website set up:

1. Replace the example data in `month1.json` and `month2.json` with your real data
2. Add your actual team photos and videos
3. Update `config.json` with your actual month names and tasks
4. Test everything locally
5. Deploy to the web
6. Share with your teams!

Good luck with Mask Tasker! 🎭
