import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./utils/Layout";
import HomePage from "./Pages/HomePage";
import Careers from "./Pages/Careers";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "/contactus",
      element: <ContactUs />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
