# sentiment-widget

A simple sentiment feedback widget, built with React, TypeScript, and Vite.

## Requirements

- Node.js version 20.19+ or 22.12+

## Getting Started

1. Clone from repository

    ```bash
    git clone {project_repository}
    cd {project_folder}
    ```

2. Install dependencies

    ```bash
    pnpm i
    ```

## Running the App

1. To run the project in development mode

    ```bash
    pnpm run dev
    ```

2. To run tests

    ```bash
    pnpm run test
    ```

3. To compile the app for production

    ```bash
    pnpm run build
    ```

## Folder Structure

```
frontend/
├── dist/                   # Compiled production build will be generated here.
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components are defined here.
│   ├── pages/              # Individual page is defined here.
│   ├── providers/          # Context providers
│   ├── tests/              # Test setup files and e2e tests are defined here.
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── types.ts            # Shared TypeScript types
├── index.html              # Main HTML file
├── package.json            # Project metadata and scripts
├── tsconfig*.json          # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Assumptions

- Error messages and success messages are fixed, and thus hardcoded.
- The average rating value will be displayed with up to 2 decimal places.
- Rating submissions are stored in an array, where most recent submissions are added to the top of the array. Thus, when displaying the three most recent submissions, we take the top 3 items in the array.
- The app's design should work with a minimum viewport width of 320px.
