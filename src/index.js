import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MobileProvider } from "Context/MobileProvider";
import App from "App";
import { Home } from "pages/Home";
import { Game } from "pages/Game";
import { End } from "pages/End";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "millionaire",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "game", element: <Game /> },
      { path: "end", element: <End /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <MobileProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MobileProvider>
  </React.StrictMode>
);
