import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Application from './Components/Application/Application.jsx'
import Instalation from './Components/Instalation/Instalation.jsx'
import Home from './Components/Home/Home.jsx'

const route=createBrowserRouter([
  {
    path:'/',
    Component:App,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'app',
        Component:Application
      },
      {
        path:'instalation',
        Component:Instalation
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
