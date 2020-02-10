import React, { FC } from "react";
import { Route, Switch } from "react-router";

import ArticlesList from "../../articles";

const WithSessionRoutes: FC = () => {
  return (
    <Switch>
      <Route component={ArticlesList} />
    </Switch>
  );
};

export default WithSessionRoutes;
