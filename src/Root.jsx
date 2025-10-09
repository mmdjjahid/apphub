import React from "react";
import Home from "./pages/home";
import Apps from "./pages/Apps";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Loding from "./components/loading/Loding";

const Root = () => {
  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)
  return (
    <div>
      <Header></Header>
      {isNavigating && <Loding></Loding>}
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
