import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SingleItem from './components/SingleItem.tsx'

const router = createBrowserRouter([
  {
    path:`/`,
    element: <App/>,
    children: [
      {
        index: true, element:<HomePage/>
      },
      {
        path:`/shop`, element: <Shop/>
      },{
        path:`/product/:slug`, element:<SingleItem/>
      },
      {
        path:`/about`, element: <About/>
      },
      {
        path:`/contact`, element: <Contact/>
      },
      {
        path:`/services`, element: <Services/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
