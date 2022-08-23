import React, { /*Suspense,*/ lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Footer from "../layout/Footer";
import ToDoDetail from "../todo/ToDoDetail";
import ProtectedRoute from "./ProtectedRoute";

const ToDo = lazy(() => import("../todo/ToDo"));

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/todo"
          element={
            <ProtectedRoute
              when={localStorage.getItem("token") === null}
              to="/"
            >
              <ToDo />
            </ProtectedRoute>
          }
        />
        <Route path="/:id" element={<ToDoDetail />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Root;
