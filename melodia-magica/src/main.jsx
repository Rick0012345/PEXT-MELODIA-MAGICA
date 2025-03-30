import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from './routes/Home';
import Login_page from './routes/Login_page';
import Quiz from './routes/game_page';
import App from './App';
import Niveis from './routes/Niveis';
import{ createBrowserRouter, RouterProvider,} from "react-router-dom";
import Login from './components/Login';
import CadastroPage from './routes/cadastro_page';
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
  },
  {
    path: `${pathBase}/niveis`,
    element: <Niveis />,
  },
  {
    path: `${pathBase}/cadastro`,
    element: <CadastroPage />,
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
