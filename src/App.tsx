import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import ErrorBoundary from './Components/Error/ErrorBound';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from 'react-router-dom';

import LandingPage from './Pages/Home/Home';
import AppTheme from './Components/Theme/App/AppTheme';


function App() {
  const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');
  
    return token ? (
      <Navigate to="/" state={{ from: location }} replace />
    ) : (
      <ErrorBoundary>{children}</ErrorBoundary>
    );
  };


  // const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  //   const location = useLocation();
  //   const token = localStorage.getItem('token');
  //   return token ? (
  //     <ErrorBoundary>{children}</ErrorBoundary>
  //   ) : (
  //     <Navigate
  //       to="/login"
  //       state={{
  //         from: location,
  //         shouldShowLoginError: true,
  //       }}
  //       replace
  //     />
  //   );
  // };
  

  const router = createBrowserRouter([
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
    {
      path: '/',
      element: (
        <PublicRoute>
         <LandingPage />
        </PublicRoute>
      ),
    },
    {
      path: '/login',
      element: (
        <PublicRoute>
          <Navigate to="/configure" replace />
        </PublicRoute>
      ),
    },
  ]);

  return (
    <AppTheme >
      <ErrorBoundary>
      <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
     </ErrorBoundary>

    </AppTheme>
  );
}


export default App;