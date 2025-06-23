# GCP Data Engineer Ascent - Gamified Learning App

This is a React-based interactive application designed to guide an aspiring data engineer through an 8-week, gamified learning program for Google Cloud Platform (GCP) Data Engineering roles.

The application features a quest-based system, XP tracking, and Gemini AI-powered assistants to help with code explanations and creating professional LinkedIn posts to document the learning journey.

## Features

-   **Interactive Quest Board:** View daily and weekly learning quests.
-   **XP & Leveling System:** Track your progress and stay motivated.
-   **Persistent Progress:** Your progress is saved in the browser's `localStorage`, so you can pick up where you left off.
-   **Gemini AI Integration:**
    -   **Code Explainer:** Get detailed explanations for code challenges.
    -   **LinkedIn Post Assistant:** Generate professional drafts to document your learning journey.
-   **Modular & Clean UI:** Built with React, Vite, and Tailwind CSS.

## Project Setup

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/gcp-de-quest.git](https://github.com/YOUR_USERNAME/gcp-de-quest.git)
    cd gcp-de-quest
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To run the app in development mode, use the following command. This will open the app on `http://localhost:5173` (or the next available port).

```bash
npm run dev