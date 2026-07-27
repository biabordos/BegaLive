# Bega River Monitoring System 🌊

A modern, self-hosted web application for visualizing and monitoring the Bega River's environmental data including temperature, water quality, and flow rates.

## Features
* ✅ **Interactive Map** - Leaflet-based map with real-time station markers
* ✅ **Temperature Visualization** - Color-coded markers (blue=cold, red=hot)
* ✅ **24-Hour Trend Chart** - Chart.js displaying temperature trends
* ✅ **Real-time Data** - Live water quality metrics (pH, Oxygen, Turbidity)
* ✅ **Auto-Refresh** - Data updates every 30 seconds (or 2s in simulation mode)
* ✅ **Data Export** - Download monitoring reports as text files
* ✅ **Responsive Design** - Works on desktop and mobile devices
* ✅ **Pure Frontend** - No backend required, runs entirely in the browser

## Quick Start

### Option 1: Direct File Opening
Simply open `index.html` in your web browser. Everything is included!

### Option 2: Local Web Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
