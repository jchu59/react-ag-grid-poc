This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

1. Install Node Package Manager.
2. Install node modules:

- npm install --save ag-grid-enterprise ag-grid-community ag-grid-react node-sass bootstrap react-router-dom

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## POC Features

- 'Make' column supports Select List editing and a Set Filter
- 'Model' column supports text editing and No Filter
- 'Price' column supports numeric editing and a Numeric Filter
- Data is loaded into grid from Internet using React Promise
- Save button prints editing JSON to console
- Grid supports master-detail. Opening a row displays the row's detail grid with columns OID, Name, and Download
- The Detail Grid's Download column renders hyperlinks for downloading dummy 1Mb documents
