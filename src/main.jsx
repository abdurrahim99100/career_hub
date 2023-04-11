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
import Apply from './components/Apply';
import Pchart from './components/Pchart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('/data.json')
      },
      {
        path: "home",
        element: <Home/>,
        loader: () => fetch('/data.json')
      },
      {
        path: "statistics",
        element: <Pchart/>
      },
      {
        path: "applied",
        element: <Apply/>,
        loader: () => fetch('/data.json')
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "details/:id",
        element: <Details/>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
