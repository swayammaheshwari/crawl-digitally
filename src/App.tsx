import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Preloader } from "./component/Preloader/Preloader";

const theme = createTheme({
  direction: "rtl",
  // other theme properties
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // ////////////SCROLL-ANIMATION////////////
  
  }, []);
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
