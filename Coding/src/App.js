import React, { lazy, useState, Suspense } from "react";
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
import Faq from "./components/Faq";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//To create a new bundle for about.js
//We do this so that bundler does no create only one JS file for our whole code
const About = lazy(() => import("./components/About"));


const AppLayout = () => {

  const [user, setUser] = useState({ name: "Danish", email: "danishagarwal9@gmail.com" });

  return (
    //Providing our redux store to whole app, store prop name is imp.
    <Provider store={store}>

      {/* Providing userContext i.e username to whole app */}
      <UserContext.Provider value={{ user: user, }}>

        <HeaderComponent />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
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
