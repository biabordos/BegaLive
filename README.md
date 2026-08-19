# Bega River Monitoring System 

A modern, self-hosted web application for visualizing and monitoring the Bega River's environmental data including temperature, water quality, and flow rates.

## Features
- ✅ Interactive Map - Leaflet-based map with real-time station markers
- ✅ Temperature Visualization - Color-coded markers (blue=cold, red=hot)
- ✅ 24-Hour Trend Chart - Chart.js displaying temperature trends
- ✅ Real-time Data - Live water quality metrics (pH, Oxygen, Turbidity)
- ✅ Auto-Refresh - Data updates every 30 seconds (or 2s in simulation mode)
- ✅ Data Export - Download monitoring reports as text files
- ✅ Responsive Design - Works on desktop and mobile devices
- ✅ Pure Frontend - No backend required, runs entirely in the browser

## Quick Start
### Option 1: Direct File Opening
Simply open index.html in your web browser. Everything is included!

### Option 2: Local Web Server (Recommended)
# Using Python 3
python -m http.server 8000
# Using Node.js
npx http-server
# Using PHP
php -S localhost:8000
Then navigate to http://localhost:8000

## Project Structure
bega/
├── index.html       # Main HTML structure
├── styles.css       # Modern responsive styling
├── app.js          # Main application logic & map initialization
├── data.js         # Station data & utility functions
└── README.md       # This file

## Technologies Used
- Leaflet.js - Interactive mapping library
- Chart.js - Data visualization library
- OpenStreetMap - Map tiles
- CSS Grid - Responsive layout
- Vanilla JavaScript - No frameworks required

## Monitoring Stations
The system monitors 5 key stations along the Bega River:
- Bega Source (Coka) - 120m elevation, Cold water
- Backa Palanka - 85m elevation, Cool water
- Becej Station - 80m elevation, Moderate temperature
- Zrenjanin Area - 75m elevation, Warm water
- Bega - Tisa Mouth - 70m elevation, Warmest point

## Key Metrics Tracked
- Temperature (°C) - Water temperature with 24h trend
- pH Level - Water acidity/alkalinity (6.8-7.6 typical range)
- Oxygen Content - Dissolved oxygen in mg/L
- Turbidity - Water clarity in NTU
- Flow Rate - Water discharge in m3/s

## How to Use
- View Map: Interactive map shows all monitoring stations
- Hover/Click Markers: See detailed station information
- Check Stats Panel: Real-time metrics and 24h temperature trend
- Refresh Data: Click Refresh Data to get latest readings
- Toggle Simulation: Click Toggle Simulation for continuous updates
- Download Report: Click Download Report to export data

## Potential Improvements 🚀
1. Backend Integration: Add Express.js/Node.js backend, PostgreSQL/MongoDB, and REST APIs.
2. Real Data Sources: Integrate IoT sensors, USGS/EPA APIs, and WebSockets.
3. Advanced Analytics: Machine learning for anomaly detection and forecasting.
4. User Features: Authentication, authorization, and custom alerts.
5. Visualization Enhancements: 3D river visualization and heatmap overlays.
6. Data Quality & Performance: Input validation, caching, and lazy loading.
7. Environmental Context: Weather overlays and seasonal trend analysis.
8. Mobile App & Compliance: React Native companion and automated reports.

## Current Limitations
- ⚠️ Data is simulated (not from real sensors)
- ⚠️ No persistent storage (refreshing page resets data)
- ⚠️ Limited historical data (24-hour only)
- ⚠️ No user authentication
- ⚠️ Single-view dashboard (no customization)

## Implementation Roadmap
- Phase 1 (MVP): Current system ✅ 
- Phase 2: Backend API + Real data source 
- Phase 3: User accounts & custom dashboards 
- Phase 4: Mobile app & advanced analytics 
- Phase 5: AI/ML integration & predictive features

## API Structure (for future backend)
GET /api/stations              # List all stations
GET /api/stations/:id          # Get station details
GET /api/data/:stationId       # Get latest readings
GET /api/data/:stationId/history?hours=24  # Get historical data
POST /api/data                 # Submit sensor readings
GET /api/reports/export        # Export data report

## Configuration
To customize the system:
- Add More Stations - Edit MONITORING_STATIONS in data.js
- Change Map Center - Modify coordinates in initMap() in app.js
- Adjust Refresh Rate - Change 30000 (ms) in auto-refresh interval
- Customize Colors - Edit getTempColor() function in data.js

## License & Support
Open Source - Feel free to use and modify. For questions or suggestions, feel free to contribute!

---
* Current Version: 1.0.0 (Demo) 
* Last Updated: 2026-05-15 
* Status: MVP Ready for Enhancement
