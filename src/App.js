import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/videos/:keyword", element: <Home /> },
      { path: "/videos/watch/:id", element: <Watch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
