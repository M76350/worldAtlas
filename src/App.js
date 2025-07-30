
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/layout/Applayout";
import Home from "./pages/home";
import About from "./pages/about";
import Country from "./pages/country";
import Contact from "./pages/contact";
import Errorpage from "./pages/Errorpage";
import './App.css'
import { CountryDetails } from "./components/layout/CountryDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout />,
    errorElement:<Errorpage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  }
 
])

const App = () => {
  return (<RouterProvider router={router}></RouterProvider>);

}

export default App;
