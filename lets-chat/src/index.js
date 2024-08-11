// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./index.css";

const rootElement = document.getElementById('root');

if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(<App />);
} else {
   console.error('Root element not found');
}
