import {createBrowserRouter,RouterProvider,Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import About from "./pages/About";
import Work  from './pages/Work'

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
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
