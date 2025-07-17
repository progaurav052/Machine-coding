import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainBody from "./components/MainBody";
import Tabform from "./components/Tabform";
import ShowAccordian from "./components/ShowAccordian";
const root = ReactDOM.createRoot(document.getElementById("root"));


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/tabform",
        element: <Tabform />,
      },
      {
        path: "/showaccord",
        element: <ShowAccordian />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter}/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
