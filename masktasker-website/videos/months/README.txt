VIDEOS FOLDER STRUCTURE
========================

This folder contains all videos for monthly submissions.

Structure:
  videos/months/month1/    - Videos for January 2024
  videos/months/month2/    - Videos for February 2024
  videos/months/month3/    - Videos for March 2024
  ... and so on

SUPPORTED FORMATS:
- MP4 (recommended - best browser compatibility)
- WebM (good compression, modern browsers)
- OGG (alternative format)

IMPORTANT NOTES:
- Keep video files under 50MB when possible for reasonable loading times
- Videos are hosted directly on your site (not embedded from YouTube/Vimeo)
- Use descriptive names like "team-name-build.mp4"
- Recommended resolution: 1280x720 (720p) or 1920x1080 (1080p)

VIDEO COMPRESSION TIPS:
- Use tools like HandBrake (free) to compress videos
- H.264 codec works best for web
- 30fps is usually sufficient
- Consider reducing bitrate to lower file size

HOW TO ADD VIDEOS:
1. Create a folder for your month (e.g., "month1")
2. Copy your team videos into that folder
3. Reference them in your month's JSON file

Example:
  "videos": [
    "videos/months/month1/tower-titans-build.mp4"
  ]

NOTE: If you prefer to embed videos from YouTube or other platforms,
you can modify the month.html template to support embedded videos instead.
