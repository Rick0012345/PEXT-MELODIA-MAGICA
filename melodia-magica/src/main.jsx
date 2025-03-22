import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Login_page from './routes/Login_page';
import Quiz from './routes/game_page';
import App from './App';

import{ createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/game_page",
    element: <Quiz />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
