import React from "react";
import ReactDOM from "react-dom/client";

import GlobalProvider from "./provider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);
