import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { New } from './components/New/New';

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
    path: "/users",
    element: <New />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
1.27