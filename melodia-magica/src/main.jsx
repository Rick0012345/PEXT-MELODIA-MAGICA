import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Contact from './routes/Contact';

import App from './App';

import{ createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
