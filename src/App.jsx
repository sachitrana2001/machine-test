import React, { useState, useEffect } from "react";
// import Cookies from 'js-cookie';

// import AppRoute from "routes/route";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/Layout/adminLayout";
import CommonLayout from "./components/Layout/commonLayout";
import { protectedRoutes } from "./routes";
import Login from "./pages/Authentication/Login";

const App = () => {
  // const currentUser = Cookies.get("upsrtc-user") ? JSON.parse(Cookies.get("upsrtc-user")) : null;
  const [isUserLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("userToken")
  );
  useEffect(() => {
    setUserLoggedIn(localStorage.getItem("userToken"));
  }, [isUserLoggedIn]);

  return (
    <>
      <Routes>
        {isUserLoggedIn ? (
          protectedRoutes.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              element={
                <AdminLayout currentUser={isUserLoggedIn}>
                  <route.component />
                </AdminLayout>
              }
            />
          ))
        ) : (
          <Route
            path="/*"
            element={
              <CommonLayout>
                <Login checkLoggedIn={setUserLoggedIn} />
              </CommonLayout>
            }
          />
        )}
      </Routes>
    </>
  );
};
export default App;

{
  /* <AppRoute key={index} path={route.path} currentUser={currentUser} isAuthProtected={true} Component={route.component}  Layout={AdminLayout}/> */
}
