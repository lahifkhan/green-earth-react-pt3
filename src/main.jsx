import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import Root from "./Template/Root.jsx";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import PlantDetails from "./Pages/PlantDetails.jsx";
import LoadingSpinner from "./Components/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index:true,
        Component:Home,
        loader:()=> fetch(`https://openapi.programming-hero.com/api/plants`)
      },
      {
        path:"/contact",
        Component:Contact
      },
      {
        path:"/about",
        Component:About
      },
      {
        path:"/home/:id",
        Component:PlantDetails,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/plant/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
