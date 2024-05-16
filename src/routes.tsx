import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "/continue", element: <HomePage /> },
      { path: "/login", element: <HomePage /> },
      { path: "/signup", element: <HomePage /> },
    ],
  },
]);

export default router;
