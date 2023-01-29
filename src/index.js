import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { New } from './components/New/New';
import { User } from './pages/User/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: < App />,
    // children: [
    //   {
    //     path: 'new',
    //     element: <New />
    //   }
    // ]
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);