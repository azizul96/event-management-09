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
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Error from './pages/Error/Error';
import Blog from './pages/Blog/Blog';
import Gallery from './pages/Gallery/Gallery';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/events.json')
      },
      {
        path:"/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:"/gallery",
        element: <Gallery></Gallery>
      },
      {
        path:"/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
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
