import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Global  } from "@emotion/react";
import { GlobalCSS } from "./main.styled";
import App from "./App";


const rootEntry = document.getElementById("root");

// root HTML element guard
if (rootEntry) {
  createRoot(rootEntry).render(
    <StrictMode>
      <Provider store={store}>
        <Global styles={GlobalCSS} />
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}