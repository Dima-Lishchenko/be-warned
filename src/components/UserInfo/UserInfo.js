import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import "./UserInfo.sass";
import { Logout } from "redux/actions";

export const UserInfo = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.users);

  const logOut = () => dispatch(Logout());

  return (
    <>
      <button className="d-block ml-auto mr-5 mt-5 btn btn-primary" onClick={logOut}>Log out</button>
      <h1 className="mt-5 text-center">Selected User Info:</h1>
      {currentUser ? (
        <table className="ml-5">
          <tbody>
            <tr>
              <td>gender</td>
              <td>{currentUser.gender}</td>
            </tr>
            <tr>
              <td>name</td>
              <td>
                {currentUser.name.title}
                {currentUser.name.last}
                {currentUser.name.first}
              </td>
            </tr>
            <tr>
              <td>location</td>
              <td>
                {currentUser.location.street.number}{" "}
                {currentUser.location.street.name}, {currentUser.location.city},{" "}
                {currentUser.location.state}, {currentUser.location.country},{" "}
                {currentUser.location.postcode}
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>{currentUser.email}</td>
            </tr>
            <tr>
              <td>dob</td>
              <td>{moment(currentUser.dob.date).format("MMM DD, YYYY")}</td>
            </tr>
            <tr>
              <td>registered</td>
              <td>
                {moment(currentUser.registered.date).format("MMM DD, YYYY")}{" "}
                Age: {currentUser.registered.age || 0}
              </td>
            </tr>
            <tr>
              <td>phone</td>
              <td>{currentUser.phone}</td>
            </tr>
            <tr>
              <td>cell</td>
              <td>{currentUser.cell}</td>
            </tr>
            <tr>
              <td>picture</td>
              <td>
                <img src={currentUser.picture.thumbnail} alt="icon" />
              </td>
            </tr>
            <tr>
              <td>nat</td>
              <td>{currentUser.nat}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h4 className="ml-5">No user selected</h4>
      )}
    </>
  );
};