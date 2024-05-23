import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "C:/Users/yinel/OneDrive/Desktop/Sexto Semestre/Desarrollo de Experiencias Multimedia Web/react-redux-toolkit-main/src/app/store.js"; // Ensure this points to the right path
import App from "C:/Users/yinel/OneDrive/Desktop/Sexto Semestre/Desarrollo de Experiencias Multimedia Web/react-redux-toolkit-main/src/App.jsx"; // Make sure this path is correct

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);