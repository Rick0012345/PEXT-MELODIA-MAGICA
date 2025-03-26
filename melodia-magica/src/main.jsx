import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Login_page from './routes/Login_page';
import Quiz from './routes/game_page';
import App from './App';

import{ createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './components/Login';

const pathBase = "/PEXT-MELODIA-MAGICA"
const router = createBrowserRouter([
  {
    path: `${pathBase}/`,
    element: <Home />,
    
  },
  {
    path: `${pathBase}/login`,
    element: <Login_page />,
  },
  {
    path: `${pathBase}/game_page`,
    element: <Quiz />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
