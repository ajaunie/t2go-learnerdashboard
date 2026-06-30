# NC State T2Go Learner Engagement Dashboard

An offline, native desktop application designed to turn raw Moodle 4.x CSV exports into actionable, visual insights for educators and administrators. Built with a custom North Carolina State University (Wolfpack) theme.

![Electron](https://img.shields.io/badge/Electron-Desktop-47848F?logo=electron)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-FF6384?logo=chartdotjs)
![License](https://img.shields.io/badge/License-MIT-green)

## Overview
The **T2Go Dashboard** eliminates the hassle of manually digging through massive Moodle spreadsheets. Simply drag and drop your exported CSV files into the app, and it will instantly parse the data, generate interactive charts, and identify learners who may be falling behind. 

🔒 **100% Local & Private:** Because student data privacy (FERPA) is critical, this app processes everything locally on your machine. **No data is ever sent to the cloud.**

## Key Features
* **Drag-and-Drop CSV Parsing:** Automatically detects and handles Moodle's various delimiter formats (pipe `|`, comma `,`, tab `\t`, semicolon `;`).
* **At-Risk Identification:** Automatically flags learners with high inactivity or low engagement scores.
* **Visual Analytics:** 
  * Weekly Engagement Trends
  * Activity Heatmaps (by day of the week)
  * Quiz Performance & Pass Rates
  * Lesson-Level Interaction Breakdowns
* **Native Desktop App:** Distributed as a Windows `.exe` and Mac `.dmg`.
* **Auto-Updating:** Uses `electron-updater` to silently fetch and install new features directly from GitHub Releases.
* **Wolfpack Branding:** Fully themed with official NC State Red (`#CC0000`), Black, and White color palettes.

## How to Use (For End Users)
1. Go to the **[Releases Page](https://github.com/Ajaunie/t2go-learnerdashboard/releases)** on the right sidebar.
2. Download the latest `.exe` (Windows) or `.dmg` (Mac) installer.
3. Install and open the application.
4. Export your data from Moodle (Logs, Activity Completion, Gradebook, Enrolled Users).
5. Drag and drop the CSV files into the dashboard drop-zones!

## 🛠️ How to Build (For Developers)
If you want to run the app locally, modify the code, or build your own installers:

**Prerequisites:** [Node.js](https://nodejs.org/) installed on your machine.

```bash
# 1. Clone the repository
git clone https://github.com/Ajaunie/t2go-learnerdashboard.git
cd t2go-learnerdashboard

# 2. Install dependencies
npm install

# 3. Run the app in development mode
npm start

# 4. Build installers
npm run build:win   # Creates Windows .exe in the /dist folder
npm run build:mac   # Creates Mac .dmg in the /dist folder (Must be run on macOS)