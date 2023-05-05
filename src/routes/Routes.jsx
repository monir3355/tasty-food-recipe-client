import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import ViewDetail from "../pages/ViewDetail";
import PrivateRoute from "../privateRoute/PrivateRoute";
import LoadingSpinner from "../components/LoadingSpinner";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(" https://the-cooking-food-server-monir3355.vercel.app/chefs"),
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <ViewDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://the-cooking-food-server-monir3355.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "loader",
        element: <LoadingSpinner />,
      },
    ],
  },
]);

export default router;
