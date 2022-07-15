import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Loader from "./Components/Loader";
import MainLayout from "./Layouts/MainLayout";

//MainPages
const MainIndexPage = React.lazy(() => import("./Pages/MainIndexPage"));
const MainLoginPage = React.lazy(() => import("./Pages/MainLoginPage"));
const MainChatPage = React.lazy(() => import("./Pages/MainChatPage"));
const MainRegisterPage = React.lazy(() => import("./Pages/MainRegisterPage"));
const MainDraggablePage = React.lazy(() => import("./Pages/MainDraggablePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<Loader />}>
              <MainIndexPage />
            </React.Suspense>
          }
        />
        <Route
          path="chat"
          element={
            <React.Suspense fallback={<Loader />}>
              <MainChatPage />
            </React.Suspense>
          }
        />
        <Route
          path="login"
          element={
            <React.Suspense fallback={<Loader />}>
              <MainLoginPage />
            </React.Suspense>
          }
        />
        <Route
          path="register"
          element={
            <React.Suspense fallback={<Loader />}>
              <MainRegisterPage />
            </React.Suspense>
          }
        />
        <Route
          path="draggable"
          element={
            <React.Suspense fallback={<Loader />}>
              <MainDraggablePage />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
