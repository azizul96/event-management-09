import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import AuthProvider from './context/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/events.json')
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/registration",
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
