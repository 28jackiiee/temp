import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Project from './Project.tsx';
import { createHashRouter, RouterProvider } from "react-router-dom";



const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/projects",
        element: <Project/>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
