import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import LoginSignup from "./pages/LoginSignup/LoginSignup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LoginSignup/> },
      { path: "/continue", element: <HomePage /> },
      { path: "/login", element: <HomePage /> },
      { path: "/signup", element: <HomePage /> },
    ],
  },
]);

export default router;
