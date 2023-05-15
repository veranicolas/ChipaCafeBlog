import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ChipaPage } from './components/ChipaPage/ChipaPage.tsx'
import { NosotrosPage } from './components/NosotrosPage/NosotrosPage.tsx'
import { ErrorPage } from './components/ErrorPage/ErrorPage.tsx'
import Index from './components/Index/Index.tsx'
import { PostPage } from './components/PostPage/PostPage.tsx'
import { CafePage } from './components/CafePage/CafePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index: true,
        element: <Index />
      },
      {
        path: "/cafe",
        element: <CafePage />
      },
      {
        path: "/chipa",
        element: <ChipaPage/>
      },
      {
        path: "/nosotros",
        element: <NosotrosPage/>
      },
      {
        path: "/cafe/:id",
        element: <PostPage/>
      },
      {
        path: "/chipa/:id",
        element: <PostPage />
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
