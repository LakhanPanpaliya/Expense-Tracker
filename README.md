<<<<<<< HEAD
# Expense-Tracker
=======
# Expense Tracker

A React expense tracking dashboard built with Vite, React, and Material UI.

## Overview

This project is a front-end expense tracker that displays expense records, allows adding new expenses, and visualizes spending data with charts.

It includes:

- A sidebar navigation panel
- A summary card showing total expenses and transaction count
- A table of expense entries with title, description, price, and date
- A form to add new expenses dynamically
- Charts for visual expense analysis

## Key Features

- Add expenses with title, description, amount, and date
- Persistent state in memory during the current session
- Expense aggregation for total spending
- Data visualization using chart components 

## Tech Stack

- React 19
- Vite
- Material UI (`@mui/material`, `@mui/icons-material`)
- Emotion (`@emotion/react`, `@emotion/styled`)
- ESLint

## Installation

1. Navigate to the project folder:

```bash
cd Expense_Tracker
```

2. Install dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open the app in your browser at the URL shown in the terminal, usually `http://localhost:5173`.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint on the project files

## Project Structure

- `src/App.jsx` - Main app layout
- `src/Components/SideBar/SideMenu.jsx` - Sidebar navigation
- `src/Components/MainBody/MainBody.jsx` - Main expense dashboard container
- `src/Components/MainBody/Forms/Form.jsx` - Expense input form
- `src/Components/MainBody/Table/TableData.jsx` - Expense table view
- `src/Components/MainBody/Cards/Card.jsx` - Summary cards
- `src/Components/MainBody/Charts/ExpenseCharts.jsx` - Expense chart visualization
- `src/Components/MainBody/SearchMenuBar/SearchMenuBar.jsx` - Search and add expense toolbar

## Notes

- This project stores expenses in React state only; there is no backend or persistent storage.
- The initial expense data is seeded from `src/Components/MainBody/initialExpensesData.js`.

## License

This project is for learning and demonstration purposes.
>>>>>>> bcfbac9 (Expense Tracker)
