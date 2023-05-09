import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CafePage } from './components/CafePage/CafePage.tsx'
import { ChipaPage } from './components/ChipaPage/ChipaPage.tsx'
import { NosotrosPage } from './components/NosotrosPage/NosotrosPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/cafe",
    element: <CafePage/>
  },
  {
    path: "/chipa",
    element: <ChipaPage/>
  },
  {
    path: "/nosotros",
    element: <NosotrosPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
