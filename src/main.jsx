import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Application from './Components/Application/Application.jsx'
import Instalation from './Components/Instalation/Instalation.jsx'
import Home from './Components/Home/Home.jsx'
import SingleApp from './Components/SingleApp/SingleApp.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [



      {
        index: true,
        loader: async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
          return data.slice(0, 8);
        },
        Component: Home
      },
      {
        path: 'app',
        Component: Application
      },
      {
        path: 'instalation',
        Component: Instalation
      },
      {
        path: 'appdetails/:id',
        loader: ({ params }) => fetch('/data.json')
          .then(res => res.json())
          .then(data => data.find(singleData => singleData.id.toString() === params.id)),
        Component: SingleApp
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
