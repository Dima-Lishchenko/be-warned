import React from "react";
import { ConnectedRouter } from "connected-react-router";

import { Routes } from "components/App/Routes";
import { history } from "services/history";

export const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  );
};
