import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Meals from "./components/Meals/Meals";
import Blog from "./components/Blog/Blog.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import MealDetails from "./components/MealDetails/MealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=s"),
      },
      {
        path: `/meals/:idMeal`,
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
