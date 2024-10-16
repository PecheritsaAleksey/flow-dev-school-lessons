import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import AllArticles from "./Pages/AllArticles";
import MyArticles from "./Pages/MyArticles";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth";
import ProtectedRoute from "./Components/ProtectedRoute";

const protectedRoutes = [
  {
    path: "/my-articles",
    element: <MyArticles />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<AllArticles />} />
      <Route path="/login" element={<Auth />} />
      {protectedRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}
          />
        );
      })}
    </Route>
  )
);

export default router;
