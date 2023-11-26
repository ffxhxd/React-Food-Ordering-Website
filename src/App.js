import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import "./App.scss";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        //dynamic path by giving : colon (means the part after colon is dynamic)
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
