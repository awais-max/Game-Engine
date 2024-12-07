import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/custom/Header.jsx";
import GameScreen from "./components/custom/GameScreen.jsx";
import Discover from "./components/custom/Discover.jsx";
import SignIn from "./components/custom/Signin.jsx";
import Register from "./components/custom/Register.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/games/:id",
    element: <GameScreen />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Header />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
