/** @jsx h */
import { h } from "../deps/preact.ts";
import type { FunctionComponent } from "../deps/preact.ts";

import { Redirect, Route, Switch } from "../deps/react_router_dom.ts";

import Play from "./pages/Play.tsx";
import Root from "./pages/Root.tsx";

const App: FunctionComponent = () => (
  <Switch>
    <Route path="/">
      <Root />
    </Route>
    <Route path="/slot/:slot">
      <Play />
    </Route>
    <Route path="*">
      <Redirect to="/" />
    </Route>
  </Switch>
);

export default App;
