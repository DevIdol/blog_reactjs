import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Resume/Home";
import NavBar from "../NavBar/NavBar";
import Portfolio from "../PortFolio/Portfolio";
import Admin from "../Admin/Admin";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Rigister/Register";
import Blog from "../Blog/Blog";
import BlogView from "../Blog/BlogView";
import EmailVerify from "../EmailVerify/EmailVerify";
import { RegisterContext } from "../../Context/RegisterContext";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import PasswordReset from "../PasswordReset/PasswordReset";
const Routers = () => {
  const { user } = useContext(RegisterContext);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogView />} />
        {user &&  <Route path="admin-dashboard" element={<Admin />} />}
       
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        <Route
          path="*"
          element={
            <section style={{ textAlign: "center", paddingTop: "120px" }}>
              <h1>404 Not Found!!!</h1>
            </section>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
