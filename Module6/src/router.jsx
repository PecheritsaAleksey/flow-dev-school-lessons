import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import AllArticles from "./Pages/AllArticles";
import MyArticles from "./Pages/MyArticles";
import Profile from "./Pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<AllArticles />} />
      <Route path="/my-articles" element={<MyArticles />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

export default router;
