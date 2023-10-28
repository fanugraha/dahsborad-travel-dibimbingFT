import React from 'react'; 

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/home/Homepage";
import { useRoutes } from "react-router";
import AuthPage from "./pages/auth/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import UserPage from './component/user-list/UserPage';
import UserRole from './component/user-list/UserRole';
import PromoPages from './pages/promo/PromoPages';
import ActivityPages from './pages/activity/ActivityPages';

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/user",
    element: <UserPage/>,
  },
  {
    path: "/user-role/:uuid",
    element: <UserRole />,
  },
  {
    path: "/promo",
    element: <PromoPages/>,
  },
  {
    path: "/activity",
    element: <ActivityPages/>,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <MantineProvider>
      {element}
    </MantineProvider>
  );
}

export default App; 
