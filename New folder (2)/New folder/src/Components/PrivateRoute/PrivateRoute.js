import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth
    ? children
    : (alert(
        "This is a Private Route, you have to login! You will be redirected to the Home page!!"
      ),
      (<Navigate to="/" />));
};

export default PrivateRoute;
