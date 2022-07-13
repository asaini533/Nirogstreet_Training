import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

library.add(fas);

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex pl-2 w-60">
        <Sidebar currentRoute={router.pathname} />
      </div>
      <div className="flex flex-col dashboard-container bg-black justify-between">
        <Header />
        <div className="bg-athens-gray min-h-screen p-10 relative ml-80 mr-32 mt-14">
          {children}
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;

