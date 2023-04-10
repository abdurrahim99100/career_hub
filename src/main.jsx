import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>,
        loader: () => fetch('data.json')
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/details",
        element: <Details/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
