import produce, { Draft } from "../../deps/immer.ts";
import {
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from "../../deps/react_redux.ts";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "../../deps/redux.ts";
import thunk from "../../deps/redux_thunk.ts";
import type * as Thunk from "../../deps/redux_thunk.ts";
import { process } from "https://deno.land/std@0.161.0/node/process.ts";

import * as log from "./log.ts";
import * as slot from "./slot.ts";
import * as vm from "./vm.ts";

export type State = {
  log: log.State;
  slot: slot.State;
  vm: vm.State;
};

export type Action =
  | log.Action
  | slot.Action
  | vm.Action;
export type ThunkAction<R> = Thunk.ThunkAction<R, State, undefined, Action>;
export type ThunkDispatch = Thunk.ThunkDispatch<State, undefined, Action>;

const reducer = combineReducers({
  log: log.reducer,
  slot: slot.reducer,
  vm: vm.reducer,
});

let composeEnhancers: typeof compose;
if (
  process.env.NODE_ENV === "development" &&
  // deno-lint-ignore no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null
) {
  // deno-lint-ignore no-explicit-any
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);
export default store;

export function useDispatch(): Thunk.ThunkDispatch<State, undefined, Action> {
  return rawUseDispatch();
}

export function useSelector<T>(selector: (state: State) => T): T {
  return rawUseSelector(selector);
}

type SubReducer<S, A> = (state: Draft<S>, action: A) => void;
export function createSubReducer<S, A>(
  fn: SubReducer<S, A>,
): (state: S, action: A) => S {
  return (state: S, action: A) => produce(state, (s) => fn(s, action));
}
