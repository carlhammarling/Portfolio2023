import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout/RootLayout'
import Home from './pages/Home/Home'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App