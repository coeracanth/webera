/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, render } from "../deps/preact.ts";
import { Provider as ReduxProvider } from "../deps/react_redux.ts";
import { HashRouter } from "../deps/react_router_dom.ts";

// import "./reset.css";

import store from "./store/index.ts";
import App from "./App.tsx";

render(
	<ReduxProvider store={store}>
		<HashRouter hashType="noslash">
			<App />
		</HashRouter>
	</ReduxProvider>,
	document.getElementById("root")!,
);
