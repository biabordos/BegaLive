# Bega River Monitoring System 🌊

A modern, self-hosted web application for visualizing and monitoring the Bega River's environmental data including temperature, water quality, and flow rates.

## Features

✅ **Interactive Map** - Leaflet-based map with real-time station markers
✅ **Temperature Visualization** - Color-coded markers (blue=cold, red=hot)
✅ **24-Hour Trend Chart** - Chart.js displaying temperature trends
✅ **Real-time Data** - Live water quality metrics (pH, Oxygen, Turbidity)
✅ **Auto-Refresh** - Data updates every 30 seconds (or 2s in simulation mode)
✅ **Data Export** - Download monitoring reports as text files
✅ **Responsive Design** - Works on desktop and mobile devices
✅ **Pure Frontend** - No backend required, runs entirely in the browser

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
```
Then navigate to `http://localhost:8000`

## Project Structure

```
bega/
├── index.html       # Main HTML structure
├── styles.css       # Modern responsive styling
├── app.js          # Main application logic & map initialization
├── data.js         # Station data & utility functions
└── README.md       # This file
```

## Technologies Used

- **Leaflet.js** - Interactive mapping library
- **Chart.js** - Data visualization library
- **OpenStreetMap** - Map tiles
- **CSS Grid** - Responsive layout
- **Vanilla JavaScript** - No frameworks required

## Monitoring Stations

The system monitors 5 key stations along the Bega River:
1. **Bega Source (Čoka)** - 120m elevation, Cold water
2. **Bačka Palanka** - 85m elevation, Cool water
3. **Bečej Station** - 80m elevation, Moderate temperature
4. **Zrenjanin Area** - 75m elevation, Warm water
5. **Bega - Tisa Mouth** - 70m elevation, Warmest point

## Key Metrics Tracked

- **Temperature (°C)** - Water temperature with 24h trend
- **pH Level** - Water acidity/alkalinity (6.8-7.6 typical range)
- **Oxygen Content** - Dissolved oxygen in mg/L
- **Turbidity** - Water clarity in NTU
- **Flow Rate** - Water discharge in m³/s

## How to Use

1. **View Map**: Interactive map shows all monitoring stations
2. **Hover/Click Markers**: See detailed station information
3. **Check Stats Panel**: Real-time metrics and 24h temperature trend
4. **Refresh Data**: Click "🔄 Refresh Data" to get latest readings
5. **Toggle Simulation**: Click "▶️ Toggle Simulation" for continuous updates
6. **Download Report**: Click "📥 Download Report" to export data

## Potential Improvements 🚀

### 1. **Backend Integration**
   - Add Express.js/Node.js backend for real database
   - Use PostgreSQL/MongoDB to store historical data
   - Create REST API for data retrieval
   - Enable persistent data storage and analytics

### 2. **Real Data Sources**
   - Integrate with actual water quality IoT sensors
   - Connect to USGS/EPA water data APIs
   - Implement real-time data streaming (WebSocket)
   - Add satellite image overlay for visual context

### 3. **Advanced Analytics**
   - Machine learning for anomaly detection
   - Predictive modeling for flood/drought warnings
   - Time-series analysis and forecasting
   - Statistical trend analysis

### 4. **User Features**
   - User authentication & authorization
   - Custom alerts/notifications for threshold exceedances
   - Save favorite stations & custom views
   - Historical data comparison & export
   - Multi-language support

### 5. **Visualization Enhancements**
   - 3D river visualization
   - Heatmap overlays for temperature distribution
   - Animation of water flow simulation
   - Multiple chart types (box plots, histograms, etc.)
   - Real-time particle effects for flow visualization

### 6. **Data Quality**
   - Input validation & error handling
   - Data quality metrics (completeness, accuracy)
   - Outlier detection & handling
   - Missing data imputation

### 7. **Performance**
   - Data caching strategies
   - Compression for large datasets
   - Pagination for station lists
   - Lazy loading for historical data

### 8. **Environmental Context**
   - Weather overlay (rain, wind, etc.)
   - Seasonal trend analysis
   - Ecosystem impact assessment
   - Species monitoring integration

### 9. **Mobile App**
   - React Native/Flutter mobile companion
   - Offline data access
   - Push notifications
   - QR codes for station quick access

### 10. **Reporting & Compliance**
   - Automated compliance reports
   - Water quality standards comparison
   - Permit requirement tracking
   - Audit trail & logging

## Current Limitations

- ⚠️ Data is simulated (not from real sensors)
- ⚠️ No persistent storage (refreshing page resets data)
- ⚠️ Limited historical data (24-hour only)
- ⚠️ No user authentication
- ⚠️ Single-view dashboard (no customization)

## Implementation Roadmap

**Phase 1 (MVP):** Current system ✅
**Phase 2:** Backend API + Real data source
**Phase 3:** User accounts & custom dashboards
**Phase 4:** Mobile app & advanced analytics
**Phase 5:** AI/ML integration & predictive features

## API Structure (for future backend)

```
GET /api/stations              # List all stations
GET /api/stations/:id          # Get station details
GET /api/data/:stationId       # Get latest readings
GET /api/data/:stationId/history?hours=24  # Get historical data
POST /api/data                 # Submit sensor readings
GET /api/reports/export        # Export data report
```

## Configuration

To customize the system:

1. **Add More Stations** - Edit `MONITORING_STATIONS` in `data.js`
2. **Change Map Center** - Modify coordinates in `initMap()` in `app.js`
3. **Adjust Refresh Rate** - Change `30000` (ms) in auto-refresh interval
4. **Customize Colors** - Edit `getTempColor()` function in `data.js`

## License

Open Source - Feel free to use and modify

## Contributing

Ideas for improvements:
- Real IoT sensor integration
- Historical data database
- Advanced charting
- Mobile responsiveness
- API backend

## Support

For questions or suggestions, feel free to contribute!

---

**Current Version:** 1.0.0 (Demo)
**Last Updated:** 2026-05-15
**Status:** MVP Ready for Enhancement
