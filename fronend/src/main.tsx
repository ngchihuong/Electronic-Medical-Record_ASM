import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthWrapper } from './components/contexts/auth.context.tsx';
import Login_SignUp from './components/Login_SignUp.tsx';
import Register from './pages/register.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // element: <HomePage />
        path: 'overview',
        element: <span>Comming soon....</span>
      },
      {
        path: 'notification',
        element: <span>Comming soon....</span>
      }
    ]
  },
  {
    path: "/login-register",
    element: <Login_SignUp />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login_SignUp />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthWrapper >
      <RouterProvider router={router}></RouterProvider>
    </AuthWrapper>

  </React.StrictMode>,
)
