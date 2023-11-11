// App.js
import { Routes, Route } from "react-router-dom";
// import SigninForm from "./_auth/forms/SigninForm";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Saved from "./pages/Saved";
import AllUsers from "./pages/AllUsers";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import React from "react";
import { Navigate } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";

const App = () => {
  return (

    <Routes>
      {/* public routes */}

      {/* private routes */}
      <Route path="/authlayout" element={<AuthLayout />} />

      <Route path="/" element={
        <AuthRoute>
          <Home />
        </AuthRoute>} />
      <Route path="/explore" element={
        <AuthRoute>
          <Explore />
        </AuthRoute>} />
      <Route path="/saved" element={
        <AuthRoute><Saved />
        </AuthRoute>
      } />
      <Route path="/all-users" element={
        <AuthRoute>
          <AllUsers />
        </AuthRoute>
      } />
      <Route path="/create-post" element={
        <AuthRoute>
          <CreatePost />
        </AuthRoute>
      } />
      <Route path="/update-post/:id" element={
        <AuthRoute>


          <EditPost />
        </AuthRoute>
      }

      />
      <Route path="/posts/:id" element={
        <AuthRoute>
          <PostDetails />
        </AuthRoute>
      } />
      <Route path="/profile/:id/*" element={
        <AuthRoute>
          <Profile />
        </AuthRoute>
      } />
      <Route path="/update-profile/:ids" element={
        <AuthRoute>
          <UpdateProfile />
        </AuthRoute>
      } />

    </Routes>
  );
};

export default App;

export const AuthRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/authlayout" />;
  }

  return children;
};
