import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Project from './Project.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About.tsx';



const router = createBrowserRouter([
    {
        path: "/temp/",
        element: <App />,
        children: [
          {
          path: "/temp/projects",
          element: <Project/>
          },
          {
            path: "/temp/",
            element: <About/>
            }
        ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
