# BegaLive

## Bega River Monitoring System

BegaLive is a web-based environmental monitoring interface designed to provide a visual overview of the Bega River through monitoring stations, environmental measurements, data visualizations, and an interactive 3D representation.

View website: https://biabordos.github.io/BegaLive/

The current version combines a browser-based interface with a simulated monitoring environment and a 3D river/map visualization. The project is structured to support further development toward a more complete monitoring platform.

---

## Overview

BegaLive focuses on making environmental monitoring data easier to understand by combining multiple views of the same monitoring system.

The current application includes:

* Monitoring station visualization
* Environmental data presentation
* Data visualization through dedicated charts
* Sensor-oriented views
* A 3D representation of the monitored area
* Station markers positioned within the 3D environment
* Dedicated views for fauna and species information
* A simulation-oriented project structure
* A modular project organization separating frontend, backend, database, models, and simulator components

The repository currently represents an evolving MVP/prototype rather than a production-connected environmental monitoring infrastructure.

---

## System Structure

The project is organized into several main components:

```text
BegaLive/
└── BegaLive-master/
    ├── backend/
    ├── database/
    ├── frontend/
    ├── harta_extracted/
    ├── models/
    │   └── harta.glb
    ├── simulator/
    ├── app.js
    ├── data.js
    ├── index.html
    ├── dashboard.html
    ├── grafice.html
    ├── fauna.html
    ├── specii.html
    ├── senzor.html
    ├── styles.css
    ├── start-demo.bat
    └── README.md
```

### Core project areas

| Component        | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| `frontend/`      | Frontend-related project area                           |
| `backend/`       | Backend-related project area                            |
| `database/`      | Database-related project area                           |
| `simulator/`     | Simulation-related project area                         |
| `models/`        | 3D assets used by the application                       |
| `app.js`         | Initializes and controls the 3D visualization           |
| `data.js`        | Defines the monitoring station data used by the 3D view |
| `dashboard.html` | Dashboard interface                                     |
| `grafice.html`   | Data visualization interface                            |
| `senzor.html`    | Sensor-oriented interface                               |
| `fauna.html`     | Fauna information interface                             |
| `specii.html`    | Species information interface                           |
| `index.html`     | Main entry page                                         |
| `styles.css`     | Shared styling                                          |

---

## Monitoring Stations

The current station configuration contains four monitoring points:

| ID       | Station          | Base Temperature |
| -------- | ---------------- | ---------------: |
| `bega-1` | Nod Uzina de Apă |             14°C |
| `bega-2` | Nod Centru       |             16°C |
| `bega-3` | Nod Iosefin      |             17°C |
| `bega-4` | Nod Freidorf     |             18°C |

Each station also contains a 3D position used to place its marker in the visualization.

The station configuration is currently defined in `data.js`.

---

## 3D Visualization

One of the main visual components of BegaLive is its interactive 3D environment.

The application:

1. Creates a Three.js scene.
2. Creates a perspective camera.
3. Initializes a WebGL renderer.
4. Enables orbit-based camera controls.
5. Loads the `models/harta.glb` 3D model.
6. Places monitoring markers according to the station coordinates defined in `data.js`.
7. Continuously renders the scene.
8. Updates the renderer and camera when the browser window is resized.

The 3D model is loaded from:

```text
models/harta.glb
```

If the model cannot be loaded, the application creates a fallback ground plane and still displays the monitoring markers.

---

## Monitoring Data

The current station model contains a base temperature value for each monitoring point.

These values are used by the application's monitoring/simulation logic and provide the initial temperature context for the stations.

The current repository should therefore be understood as a **simulation/prototype environment**, not as a system currently connected to physical environmental sensors.

---

## Application Views

BegaLive is divided into several dedicated interfaces.

### Dashboard

The dashboard provides the central monitoring interface and brings together information from the monitoring system into a single view.

### Graphs

The `grafice.html` interface is dedicated to data visualization.

### Sensor

The `senzor.html` interface provides a dedicated view for sensor-related information.

### Fauna

The `fauna.html` interface focuses on fauna-related environmental information.

### Species

The `specii.html` interface provides a dedicated species-oriented view.

### 3D Map

The 3D environment provides a spatial representation of the monitored area and visualizes the configured monitoring stations directly on the model.

---

## Technology Stack

The current implementation uses web technologies and browser-based visualization libraries.

### Frontend

* HTML5
* CSS3
* JavaScript
* Three.js

### 3D Visualization

* Three.js
* WebGL
* `GLTFLoader`
* `OrbitControls`
* GLB 3D model format

### Data Visualization

The project contains dedicated visualization pages for presenting monitoring data.

### Data Model

Monitoring stations are currently defined directly in JavaScript through the `MONITORING_STATIONS` configuration.

---

## Architecture

At its current stage, BegaLive can be viewed as a modular monitoring platform with the following conceptual structure:

```text
                    ┌──────────────────────┐
                    │      BegaLive       │
                    │ Monitoring Platform  │
                    └──────────┬───────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │  Frontend   │      │  Simulator  │      │  3D Model   │
   │   Views     │      │   / Data    │      │   harta.glb │
   └──────┬──────┘      └──────┬──────┘      └──────┬──────┘
          │                    │                    │
          │                    ▼                    │
          │             ┌─────────────┐             │
          │             │ Monitoring  │             │
          │             │   Stations  │◄────────────┘
          │             └──────┬──────┘
          │                    │
          └──────────┬─────────┘
                     ▼
             ┌───────────────┐
             │ Visualization │
             │ & Monitoring  │
             └───────────────┘
```

The repository also contains separate `backend` and `database` areas, providing a structure for continued development of the system.

---

## 3D Station Model

Each monitoring station is represented in the 3D scene by a spherical marker.

The marker configuration is generated from the station definitions in `data.js`:

```javascript
{
    id: 'bega-1',
    name: 'Nod Uzina de Apă',
    pos3D: { x: -5, y: 0.5, z: 2 },
    baseTemp: 14
}
```

The same structure is used for the other configured stations.

Each 3D marker stores the corresponding station ID and station name as metadata, allowing the visualization to associate the graphical element with its monitoring station.

---

## Running the Project

The repository contains a `start-demo.bat` file for starting the demo environment on Windows.

The project also contains several standalone HTML interfaces, allowing the application to be explored through the browser.

For the 3D visualization, the application expects the model to be available at:

```text
models/harta.glb
```

The project should be run in an environment where the referenced local assets can be loaded correctly by the browser.

---

## Current State

BegaLive is currently an **MVP/prototype**.

The repository already contains the main structural components for a larger monitoring platform, including:

* Multiple application views
* Monitoring station definitions
* A 3D environmental visualization
* A 3D model asset
* Sensor-oriented functionality
* Data visualization pages
* Fauna and species information pages
* Dedicated backend, database, frontend, and simulator directories

At the same time, the monitoring station data currently defined in `data.js` is application-side data rather than a demonstrated connection to physical environmental sensors.

---

## Current Limitations

The current implementation should not be interpreted as a production environmental monitoring network.

In particular:

* Monitoring station data is currently defined in the application.
* The configured stations are not demonstrated as live physical IoT sensor connections.
* The project is still under development.
* The backend and database directories are part of the project structure, but the current README should not imply a fully operational production backend/database pipeline without corresponding implementation.
* The 3D environment depends on the included `harta.glb` model.

---

## Development Direction

The repository structure leaves room for extending BegaLive into a more complete monitoring platform.

Possible future development areas include:

* Connecting monitoring stations to real sensor hardware
* Introducing persistent environmental data storage
* Expanding historical data analysis
* Connecting the frontend to a production backend
* Extending the monitoring and simulation layers
* Improving environmental data visualization
* Expanding the 3D monitoring environment
* Adding more detailed station information
* Developing richer fauna and species monitoring capabilities

These represent development directions rather than features currently claimed as implemented.

---

## Project Status

**Version:** 1.0.0
**Status:** MVP / Prototype
**Monitoring data:** Application-side / simulated
**3D visualization:** Implemented
**Monitoring stations:** 4 configured stations
**Physical sensor integration:** Not currently demonstrated

---

## License

Open Source — feel free to use and modify the project.

---

## Repository

Source code:

[BegaLive on GitHub](https://github.com/biabordos/BegaLive?utm_source=chatgpt.com)
