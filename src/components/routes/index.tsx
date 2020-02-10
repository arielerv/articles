import React, { FC } from "react";
import { ConnectedRouter } from "connected-react-router";

import Header from "../app/header";
import { history } from "../../store";
import WithSessionRoutes from "./WithSessionRoutes";
import { Main } from "./styles";

const AppRoutes: FC = () => {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Main>
        <WithSessionRoutes />
      </Main>
    </ConnectedRouter>
  );
};

export default AppRoutes;
