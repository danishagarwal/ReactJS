import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import { Suspense } from "react";
import Faq from "./components/Faq";
import UserContext from "./utils/UserContext";

//To create a new bundle for about.js
//We do this so that bundler does no create only one JS file for our whole code
const About = lazy(() => import("./components/About"));


const AppLayout = () => {

  const [user, setUser] = useState({ name: "Danish", email: "danishagarwal9@gmail.com" });

  return (
    <>
      <UserContext.Provider value={{ user: user, }}>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileClass />, //Render this in About since render children from OUTLET
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      },

      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<RouterProvider router={appRouter} />);
