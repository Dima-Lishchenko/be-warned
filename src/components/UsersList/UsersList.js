import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Spinner } from "components/Core/Spinner/Spinner";
import { GetCurrentUser, GetUsersList, Logout } from "redux/actions";
import { USER_INFO_ROUTE } from "../../constants";
import { push } from "connected-react-router";

export const UsersList = () => {
  const dispatch = useDispatch();

  const [filteredUsers, filterUser] = useState([]);
  const [sort, setSort] = useState({
    column: null,
    direction: "desc"
  });

  const { users, loading } = useSelector(state => state.users);

  const logOut = () => dispatch(Logout());

  const filterBySurname = e => {
    const value = e.target.value;
    if (filteredUsers.length > 0) {
      // user toLowerCase in order to ignore case of value
      const result = users.filter(user =>
        user.name.last.toLowerCase().includes(value.toLowerCase())
      );
      if (result && result.length > 0) {
        filterUser([...result]);
      }
    }
  };

  // method for sorting based on column or column plus subColumn
  const sortBy = (column, subColumn) => () => {
    // By default we sort by asc, but it is already sorted by asc then sort it by desc
    const direction = sort.column
      ? sort.column !== column
        ? "desc"
        : sort.direction === "asc"
        ? "desc"
        : "asc"
      : "desc";

    if (filteredUsers.length > 0) {
      filteredUsers.sort((a, b) => {
        if (
          direction === "asc" && !subColumn
            ? a[column] > b[column]
            : a[column][subColumn] > b[column][subColumn]
        ) {
          return -1;
        } else if (
          !subColumn
            ? a[column] < b[column]
            : a[column][subColumn] < b[column][subColumn]
        ) {
          return 1;
        }
        return 0;
      });

      if (direction === "desc") {
        filteredUsers.sort((a, b) => {
          if (
            !subColumn
              ? a[column] < b[column]
              : a[column][subColumn] < b[column][subColumn]
          ) {
            return -1;
          } else if (
            !subColumn
              ? a[column] > b[column]
              : a[column][subColumn] > b[column][subColumn]
          ) {
            return 1;
          }
          return 0;
        });
      }
    }

    // update active column and direction
    setSort({
      column,
      direction
    });
  };

  useEffect(() => {
    dispatch(GetUsersList());
  }, [dispatch]);
  useEffect(() => {
    if (users.length > 0) {
      filterUser(users);
    }
  }, [users]);

  return (
    <>
      <button
        className="d-block ml-auto mr-5 mt-5 btn btn-primary"
        onClick={logOut}
      >
        Log out
      </button>

      <h1 className="text-center mt-5">Users List</h1>
      <Spinner visible={loading} />
      <div className="d-flex justify-content-center align-items-center  my-4">
        <span className="mr-3">Filter by:</span>
        <input
          type="text"
          placeholder="Surname"
          onChange={filterBySurname}
          style={{ textIndent: 10 }}
        />
      </div>
      <table className="w-75 mx-auto">
        <thead>
          <tr>
            <th onClick={sortBy("name", "last")}>
              Full Name
              {sort.column === "name" && sort.direction === "asc" && (
                <span> &uarr;</span>
              )}
              {sort.column === "name" && sort.direction === "desc" && (
                <span> &darr;</span>
              )}
            </th>
            <th>Image</th>
            <th>Email</th>
            <th onClick={sortBy("dob", "age")}>
              Date of Birth
              {sort.column === "dob" && sort.direction === "asc" && (
                <span> &uarr;</span>
              )}
              {sort.column === "dob" && sort.direction === "desc" && (
                <span> &darr;</span>
              )}
            </th>
            <th>Additional</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 &&
            filteredUsers.map((user, i) => {
              const toUserDetails = () => {
                dispatch(GetCurrentUser(user));
                dispatch(push(USER_INFO_ROUTE));
              };

              return (
                <tr key={user.id.value || i}>
                  <td>
                    {user.name.last} {user.name.first}
                  </td>
                  <td>
                    <img src={user.picture.thumbnail} alt="icon" />
                  </td>
                  <td>{user.email}</td>
                  <td>{moment(user.dob.date).format("MMM DD, YYYY")}</td>
                  <td>
                    <button
                      onClick={toUserDetails}
                      className={"btn btn-primary"}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};