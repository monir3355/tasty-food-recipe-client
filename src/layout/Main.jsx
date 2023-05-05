import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-445px)]">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Main;
