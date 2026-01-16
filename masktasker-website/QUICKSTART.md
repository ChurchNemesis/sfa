# 🚀 Quick Start Guide

Get your Mask Tasker website running in 5 minutes!

## Step 1: View the Website (RIGHT NOW!)

**Option A: Simple Method**
1. Open the `masktasker-website` folder
2. Double-click `index.html`
3. Your website opens in your browser!

**Option B: Better Method (recommended)**
1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Navigate to the masktasker-website folder:
   ```
   cd path/to/masktasker-website
   ```
3. Start a local server:
   ```
   python -m http.server 8000
   ```
   Or if you have Python 2:
   ```
   python -m SimpleHTTPServer 8000
   ```
4. Open your browser and go to: `http://localhost:8000`

## Step 2: Add Your First Real Month (10 minutes)

1. **Edit the task description**
   - Open `data/months/month1.json` in any text editor
   - Change the `taskDescription` to your actual task
   - Change the `date` and `title` to match your month

2. **Add team submissions**
   - Edit the team names
   - Change the descriptions
   - Update the scores (0-5)

3. **Add photos**
   - Put your team photos in `images/months/month1/`
   - Name them clearly (e.g., `team-awesome-1.jpg`)
   - Update the `images` array in the JSON file

4. **Add videos**
   - Put videos in `videos/months/month1/`
   - Name them clearly (e.g., `team-awesome-build.mp4`)
   - Update the `videos` array in the JSON file

5. **Refresh your browser** - done! ✅

## Step 3: Add More Months

1. Copy `data/months/month1.json` to `data/months/month3.json`
2. Edit the new file with your month 3 data
3. Make sure the `id` matches: `"id": "3"`
4. Create folders: `images/months/month3/` and `videos/months/month3/`
5. Add your media files
6. Refresh - your new month appears!

## Need Help?

Read the full `README.md` for detailed instructions on everything!

## Common Mistakes to Avoid

❌ Forgetting commas between items in JSON
❌ Having a comma after the last item
❌ File paths don't match actual file locations
❌ Using single quotes instead of double quotes in JSON

✅ Use a JSON validator: https://jsonlint.com
✅ Copy working examples and modify them
✅ Test each change before adding more

## You're Ready! 🎉

Your website is fully functional with example data. Now just replace the examples with your real content!
