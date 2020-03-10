import React from "react";
import { Link } from "react-router-dom";

import { LANDING_ROUTE, USERS_LIST_ROUTE } from "../../constants";

export const Welcome = () => {
  return (
    <>
      <h1 className="mt-5 text-center">Please select necessary route:</h1>
      <div className="mt-5 text-center">
        <Link to={LANDING_ROUTE} className="font-weight-bold" >Landing (first part)</Link>&nbsp;&nbsp;
        <Link to={USERS_LIST_ROUTE} className="font-weight-bold" >Login (second part)</Link>
      </div>
    </>
  );
};