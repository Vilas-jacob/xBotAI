import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home.jsx'
import ConvoHistory from './Pages/ConvoHistory.jsx'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/",
     element:<App />,
     children: [
      {path:"/", element:<Home /> },
      {path:"ConvoHistory", element:<ConvoHistory />}
     ]
    },
  
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
