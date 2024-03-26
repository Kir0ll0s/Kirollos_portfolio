import React from 'react'
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
const router = createBrowserRouter([
    {
      path: "*",
      element: <Home></Home>,
    },
    {
      path: "/vite-deploy/about",
      element: <About></About>,
    },
    {
      path: "/vite-deploy/work",
      element: <Work></Work>,
    }
  ]);
function Rout() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Rout
