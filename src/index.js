import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "routes/index.js";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>,
    document.getElementById("app")
  );
}

main();
