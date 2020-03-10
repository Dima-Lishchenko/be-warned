import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  HOME_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  USER_INFO_ROUTE,
  USERS_LIST_ROUTE
} from "constants/routes";

import { UsersList } from "components/UsersList";
import { UserInfo } from "components/UserInfo";
import { Landing } from "components/Landing";
import { LoginPage } from "components/Login";
import { Welcome } from "components/Welcome";

import { PrivateRoute } from "containers/PrivateRoute";

export const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path={HOME_ROUTE} component={Welcome} />
      <Route exact={true} path={LANDING_ROUTE} component={Landing} />
      <Route exact={true} path={LOGIN_ROUTE} component={LoginPage} />
      <PrivateRoute exact={true} path={USERS_LIST_ROUTE} component={UsersList}/>
      <PrivateRoute exact={true} path={USER_INFO_ROUTE} component={UserInfo} />

      {/* Default route */}
      <Route>
        <Redirect to={HOME_ROUTE} />
      </Route>
    </Switch>
  );
};
