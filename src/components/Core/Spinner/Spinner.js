import React from "react";
import spinner from "assets/img/spinner.svg";

export const Spinner = ({ visible }) => {
  if (visible) {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={spinner} style={{ width: "50px" }} alt="spinner" />
      </div>
    );
  }
  return null;
};