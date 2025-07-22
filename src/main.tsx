import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css'
import './App.css'

import App from './App.tsx';
import Home from './pages/Home.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import AboutPage from './pages/About.tsx';

// main entry point for the React application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}