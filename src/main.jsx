import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Admin from './Components/Admin/Admin.jsx'
import AdminPage from './Components/Admin/AdminPage.jsx'
import Customer from './Components/Customers/Customer.jsx'


const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "meetings",
        element: <AdminPage />,
        
      },
      {
        path: "services",
        element: <AdminPage />,
        
      },
    ],
    errorElement:<><div><h1>Error Page</h1></div><h3>404 Not Found</h3></>
    
  },
  {
    path: "/",
    element: <Customer></Customer>,
    
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

