var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// deps/preact.ts
var preact_exports = {};
__reExport(preact_exports, preact_10_11_star);
import * as preact_10_11_star from "https://esm.sh/preact@10.11.2";

// deps/react_redux.ts
var react_redux_exports = {};
__reExport(react_redux_exports, react_redux_7_2_star);
import * as react_redux_7_2_star from "https://esm.sh/react-redux@7.2.5";

// deps/react_router_dom.ts
var react_router_dom_exports = {};
__reExport(react_router_dom_exports, react_router_dom_5_3_star);
import * as react_router_dom_5_3_star from "https://esm.sh/react-router-dom@5.3.0";

// deps/immer.ts
var immer_exports = {};
__export(immer_exports, {
  default: () => default2
});
__reExport(immer_exports, immer_9_0_star);
import { default as default2 } from "https://esm.sh/immer@9.0.6";
import * as immer_9_0_star from "https://esm.sh/immer@9.0.6";

// deps/redux.ts
var redux_exports = {};
__reExport(redux_exports, redux_4_1_star);
import * as redux_4_1_star from "https://esm.sh/redux@4.1.1";

// deps/redux_thunk.ts
var redux_thunk_exports = {};
__export(redux_thunk_exports, {
  default: () => default3
});
__reExport(redux_thunk_exports, redux_thunk_2_3_star);
import { default as default3 } from "https://esm.sh/redux-thunk@2.3.0";
import * as redux_thunk_2_3_star from "https://esm.sh/redux-thunk@2.3.0";

// src/store/index.ts
import { process } from "https://deno.land/std@0.161.0/node/process.ts";

// deps/reselect.ts
var reselect_exports = {};
__reExport(reselect_exports, reselect_4_0_star);
import * as reselect_4_0_star from "https://esm.sh/reselect@4.0.0";

// deps/typesafe-actions.ts
var typesafe_actions_exports = {};
__reExport(typesafe_actions_exports, typesafe_actions_5_1_star);
import * as typesafe_actions_5_1_star from "https://esm.sh/typesafe-actions@5.1.0";

// src/store/log.ts
var initial = {
  blocks: [],
  textified: -1
};
var selector = (state) => state.log;
var selectBlocks = (0, reselect_exports.createSelector)(selector, (state) => state.blocks);
var selectTextified = (0, reselect_exports.createSelector)(
  selector,
  (state) => state.textified
);
var refreshTextified = (0, typesafe_actions_exports.createAction)("LOG/BLOCK/TEXTIFY/REFRESH")();
var pushBlock = (0, typesafe_actions_exports.createAction)("LOG/BLOCK/PUSH")();
var popBlock = (0, typesafe_actions_exports.createAction)("LOG/BLOCK/POP")();
var clearBlocks = (0, typesafe_actions_exports.createAction)("LOG/BLOCK/CLEAR")();
var reducer = (0, typesafe_actions_exports.createReducer)(initial, {
  "LOG/BLOCK/TEXTIFY/REFRESH": createSubReducer((state) => {
    state.textified = state.blocks.length - 1;
  }),
  "LOG/BLOCK/PUSH": createSubReducer((state, action) => {
    state.blocks.push(action.payload);
  }),
  "LOG/BLOCK/POP": createSubReducer((state, action) => {
    for (let i = 0; i < action.payload; ++i) {
      state.blocks.pop();
    }
  }),
  "LOG/BLOCK/CLEAR": createSubReducer((state) => {
    state.blocks = [];
    state.textified = -1;
  })
});

// deps/localforage.ts
var localforage_exports = {};
__export(localforage_exports, {
  default: () => default4
});
__reExport(localforage_exports, localforage_1_10_star);
import { default as default4 } from "https://esm.sh/localforage@1.10.0";
import * as localforage_1_10_star from "https://esm.sh/localforage@1.10.0";

// src/store/slot.ts
var initial2 = {
  slots: {},
  isRehydrating: false,
  isCreating: {},
  isDeleting: {}
};
var selector2 = (state) => state.slot;
var selectActive = (0, reselect_exports.createSelector)(selector2, (state) => state.active);
var selectSlots = (0, reselect_exports.createSelector)(selector2, (state) => state.slots);
var selectIsRehydrating = (0, reselect_exports.createSelector)(
  selector2,
  (state) => state.isRehydrating
);
var setActive = (0, typesafe_actions_exports.createAction)("SLOT/ACTIVE/SET")();
var setSlot = (0, typesafe_actions_exports.createAction)("SLOT/SET")();
var delSlot = (0, typesafe_actions_exports.createAction)("SLOT/DEL")();
var clearSlot = (0, typesafe_actions_exports.createAction)("SLOT/CLEAR")();
var setIsRehydrating = (0, typesafe_actions_exports.createAction)("SLOT/IS_REHYDRATING/SET")();
var setIsDeleting = (0, typesafe_actions_exports.createAction)("SLOT/IS_DELETING/SET")();
var reducer2 = (0, typesafe_actions_exports.createReducer)(initial2, {
  "SLOT/ACTIVE/SET": createSubReducer((state, action) => {
    state.active = action.payload;
  }),
  "SLOT/DEL": createSubReducer((state, action) => {
    delete state.slots[action.payload];
  }),
  "SLOT/SET": createSubReducer((state, action) => {
    const slot = action.payload;
    state.slots[slot.name] = slot;
  }),
  "SLOT/CLEAR": createSubReducer((state) => {
    state.slots = {};
  }),
  "SLOT/IS_REHYDRATING/SET": createSubReducer((state, action) => {
    state.isRehydrating = action.payload;
  }),
  "SLOT/IS_DELETING/SET": createSubReducer((state, action) => {
    const [name, value] = action.payload;
    state.isDeleting[name] = value;
  })
});
function rehydrateSlots() {
  return async (dispatch) => {
    dispatch(setIsRehydrating(true));
    dispatch(clearSlot());
    for (const key of await default4.keys()) {
      if (!key.startsWith("metadata/")) {
        continue;
      }
      const metadata = await default4.getItem(key);
      dispatch(setSlot(metadata.slot));
    }
    dispatch(setIsRehydrating(false));
  };
}
function createSlot(slot, file) {
  return async (dispatch) => {
    await default4.setItem("metadata/" + slot.name, { slot });
    await default4.setItem("files/" + slot.name, file);
    dispatch(setSlot(slot));
  };
}
function removeSlot(name) {
  return async (dispatch) => {
    dispatch(setIsDeleting([name, true]));
    await default4.removeItem("metadata/" + name);
    await default4.removeItem("files/" + name);
    dispatch(delSlot(name));
    dispatch(setIsDeleting([name, false]));
  };
}

// deps/jszip.ts
import { default as default5 } from "https://esm.sh/jszip@3.7.1";

// deps/pako.ts
import { default as default6 } from "https://esm.sh/pako@2.0.4";

// deps/erajs.ts
var erajs_exports = {};
__reExport(erajs_exports, mod_star);
import * as mod_star from "https://raw.githubusercontent.com/coeracanth/eraJS/feature/deno/mod.ts";

// src/era.ts
async function extract(zip) {
  const csvDir = Object.values(zip.files).find(
    (zipObj) => zipObj.dir && (zipObj.name.toUpperCase() === "CSV" || zipObj.name.toUpperCase() === "CSV/" || zipObj.name.toUpperCase().endsWith("/CSV") || zipObj.name.toUpperCase().endsWith("/CSV/"))
  );
  if (csvDir == null) {
    throw new Error("CSV folder is not found");
  }
  const erbDir = Object.values(zip.files).find(
    (zipObj) => zipObj.dir && (zipObj.name.toUpperCase() === "ERB" || zipObj.name.toUpperCase() === "ERB/" || zipObj.name.toUpperCase().endsWith("/ERB") || zipObj.name.toUpperCase().endsWith("/ERB/"))
  );
  if (erbDir == null) {
    throw new Error("ERB folder is not found");
  }
  const files = /* @__PURE__ */ new Map();
  await Promise.all(
    Object.values(zip.files).map(async (zipObj) => {
      if (!zipObj.name.startsWith(csvDir.name) && !zipObj.name.startsWith(erbDir.name)) {
        return;
      }
      files.set(zipObj.name.split("/").pop(), await zipObj.async("text"));
    })
  );
  return files;
}
function compile2(files) {
  return erajs_exports.compile(files);
}

// src/store/vm.ts
var inputCallback;
var initial3 = {
  nonce: 0,
  inputs: []
};
var vm;
var selector3 = (state) => state.vm;
var selectError = (0, reselect_exports.createSelector)(selector3, (state) => state.error);
var selectNonce = (0, reselect_exports.createSelector)(selector3, (state) => state.nonce);
var selectInput = (0, reselect_exports.createSelector)(
  selector3,
  (state) => state.inputs[0]
);
var setError = (0, typesafe_actions_exports.createAction)("VM/ERROR/SET")();
var delError = (0, typesafe_actions_exports.createAction)("VM/ERROR/DEL")();
var incNonce = (0, typesafe_actions_exports.createAction)("VM/NONCE/INC")();
var pushInput = (0, typesafe_actions_exports.createAction)("VM/INPUT/PUSH")();
var shiftInput = (0, typesafe_actions_exports.createAction)("VM/INPUT/SHIFT")();
var clearInput = (0, typesafe_actions_exports.createAction)("VM/INPUT/CLEAR")();
var reducer3 = (0, typesafe_actions_exports.createReducer)(initial3, {
  "VM/ERROR/SET": createSubReducer((state, action) => {
    state.error = action.payload;
  }),
  "VM/ERROR/DEL": createSubReducer((state) => {
    state.error = void 0;
  }),
  "VM/NONCE/INC": createSubReducer((state) => {
    state.nonce += 1;
  }),
  "VM/INPUT/PUSH": createSubReducer((state, action) => {
    state.inputs.push(action.payload);
    if (inputCallback != null) {
      inputCallback();
      inputCallback = void 0;
    }
  }),
  "VM/INPUT/SHIFT": createSubReducer((state) => {
    state.inputs.shift();
  }),
  "VM/INPUT/CLEAR": createSubReducer((state) => {
    state.inputs = [];
  })
});
function startVM(slot) {
  return async (dispatch, getState) => {
    dispatch(delError());
    dispatch(clearBlocks());
    const metadata = await default4.getItem("metadata/" + slot);
    if (metadata == null) {
      dispatch(setError(new Error(`Metadata for slot ${slot} does not exist`)));
      return;
    }
    const raw = await default4.getItem("files/" + slot);
    if (raw == null) {
      dispatch(setError(new Error(`File for slot ${slot} does not exist`)));
      return;
    }
    const zip = await default5.loadAsync(await raw.arrayBuffer());
    const files = await extract(zip);
    vm = compile2(files);
    dispatch(incNonce());
    dispatch(clearInput());
    if (inputCallback != null) {
      inputCallback();
    }
    const storagePrefix = `save/${slot}/`;
    const iterator = vm.start({
      getSavedata: async (key) => {
        const bytes = await default4.getItem(
          storagePrefix + key + ".gz"
        );
        if (bytes == null) {
          return void 0;
        }
        return default6.ungzip(bytes, { to: "string" });
      },
      setSavedata: async (key, value) => {
        await default4.setItem(
          storagePrefix + key + ".gz",
          default6.gzip(value)
        );
      },
      getFont: () => false,
      getTime: () => new Date().valueOf()
    });
    try {
      const nonce = selectNonce(getState());
      let output = await iterator.next(null);
      while (true) {
        if (output.done === true || nonce !== selectNonce(getState())) {
          break;
        }
        switch (output.value.type) {
          case "content": {
            dispatch(pushBlock(output.value));
            output = await iterator.next(null);
            break;
          }
          case "line": {
            dispatch(pushBlock(output.value));
            output = await iterator.next(null);
            continue;
          }
          case "clear": {
            dispatch(popBlock(output.value.count));
            output = await iterator.next(null);
            continue;
          }
          case "input": {
            const input = selectInput(getState());
            if (input == null) {
              await new Promise((res) => {
                inputCallback = res;
              });
              continue;
            }
            switch (input.type) {
              case "skip":
                dispatch(shiftInput());
                break;
              case "pass":
                dispatch(shiftInput());
                break;
              case "normal": {
                if (output.value.numeric) {
                  if (!isNaN(Number(input.value))) {
                    output = await iterator.next(input.value);
                  }
                } else {
                  output = await iterator.next(input.value);
                }
                dispatch(shiftInput());
              }
            }
            break;
          }
          case "tinput": {
            const input = selectInput(getState());
            if (input == null) {
              await new Promise((res) => {
                inputCallback = res;
              });
              continue;
            }
            switch (input.type) {
              case "skip":
                dispatch(shiftInput());
                break;
              case "pass":
                dispatch(shiftInput());
                break;
              case "normal": {
                dispatch(shiftInput());
                if (output.value.numeric) {
                  if (!isNaN(Number(input.value))) {
                    output = await iterator.next(input.value);
                  }
                } else {
                  output = await iterator.next(input.value);
                }
              }
            }
            break;
          }
          case "wait": {
            const input = selectInput(getState());
            if (input == null) {
              await new Promise((res) => {
                inputCallback = res;
              });
              continue;
            }
            switch (input.type) {
              case "skip": {
                if (output.value.force) {
                  dispatch(shiftInput());
                }
                output = await iterator.next(null);
                break;
              }
              case "pass": {
                dispatch(shiftInput());
                output = await iterator.next(null);
                break;
              }
              case "normal": {
                dispatch(shiftInput());
                output = await iterator.next(null);
                break;
              }
            }
            break;
          }
        }
      }
    } catch (e) {
      dispatch(setError(e));
    }
  };
}

// src/store/index.ts
var reducer4 = (0, redux_exports.combineReducers)({
  log: reducer,
  slot: reducer2,
  vm: reducer3
});
var composeEnhancers;
if (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = redux_exports.compose;
}
var store = (0, redux_exports.createStore)(
  reducer4,
  composeEnhancers((0, redux_exports.applyMiddleware)(default3))
);
var store_default = store;
function useDispatch() {
  return (0, react_redux_exports.useDispatch)();
}
function useSelector(selector4) {
  return (0, react_redux_exports.useSelector)(selector4);
}
function createSubReducer(fn) {
  return (state, action) => default2(state, (s) => fn(s, action));
}

// deps/react_jss.ts
var react_jss_exports = {};
__reExport(react_jss_exports, react_jss_10_8_star);
import * as react_jss_10_8_star from "https://esm.sh/react-jss@10.8.0";

// deps/classnames.ts
import { default as default7 } from "https://esm.sh/classnames@2.3.1";

// deps/preact_hooks.ts
var preact_hooks_exports = {};
__reExport(preact_hooks_exports, hooks_star);
import * as hooks_star from "https://esm.sh/preact@10.11.2/hooks";

// src/style-util.ts
var vflex = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};
var hflex = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

// src/components/StringChunk.tsx
var useStyles = (0, react_jss_exports.createUseStyles)({
  root: {
    ...hflex,
    minHeight: "1em",
    fontSize: 16,
    lineHeight: 1.6
  },
  leftAlign: {
    minWidth: "14em",
    justifyContent: "flex-start",
    textAlign: "left"
  },
  rightAlign: {
    minWidth: "14em",
    justifyContent: "flex-end",
    textAlign: "right"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  underline: {
    textDecoration: "underline"
  },
  color: (chunk) => ({
    color: "#" + chunk.style.color
  })
});
var StringChunkComponent = (props) => {
  const { chunk } = props;
  const styles = useStyles(chunk);
  const textStyles = [];
  switch (chunk.cell) {
    case "LEFT":
      textStyles.push(styles.leftAlign);
      break;
    case "RIGHT":
      textStyles.push(styles.rightAlign);
      break;
    default:
      break;
  }
  if (chunk.style.bold) {
    textStyles.push(styles.bold);
  }
  if (chunk.style.italic) {
    textStyles.push(styles.italic);
  }
  if (chunk.style.underline) {
    textStyles.push(styles.underline);
  }
  textStyles.push(styles.color);
  return /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: default7(styles.root, ...textStyles)
  }, chunk.text);
};
var StringChunk_default = StringChunkComponent;

// src/components/ButtonChunk.tsx
var useStyles2 = (0, react_jss_exports.createUseStyles)({
  root: {
    minHeight: "1em",
    fontSize: 16,
    lineHeight: 1.6,
    color: "white",
    cursor: "pointer"
  },
  leftAlign: {
    minWidth: "14em",
    justifyContent: "flex-start",
    textAlign: "left"
  },
  rightAlign: {
    minWidth: "14em",
    justifyContent: "flex-end",
    textAlign: "right"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  underline: {
    textDecoration: "underline"
  },
  color: (chunk) => ({
    color: "#" + chunk.style.color,
    "&:hover": {
      color: "#" + chunk.style.focus
    }
  })
});
var ButtonChunkComponent = (props) => {
  const { chunk, textified } = props;
  const dispatch = useDispatch();
  const styles = useStyles2(chunk);
  const onClick = (event) => {
    dispatch(pushInput({ type: "normal", value: chunk.value }));
    dispatch(refreshTextified());
    event.stopPropagation();
  };
  const textStyles = [];
  switch (chunk.cell) {
    case "LEFT":
      textStyles.push(styles.leftAlign);
      break;
    case "RIGHT":
      textStyles.push(styles.rightAlign);
      break;
    default:
      break;
  }
  if (chunk.style.bold) {
    textStyles.push(styles.bold);
  }
  if (chunk.style.italic) {
    textStyles.push(styles.italic);
  }
  if (chunk.style.underline) {
    textStyles.push(styles.underline);
  }
  textStyles.push(styles.color);
  if (textified === true) {
    return /* @__PURE__ */ (0, preact_exports.h)(StringChunk_default, {
      chunk: { ...chunk, type: "string" }
    });
  } else {
    return /* @__PURE__ */ (0, preact_exports.h)("button", {
      className: default7(styles.root, ...textStyles),
      onClick
    }, chunk.text);
  }
};
var ButtonChunk_default = ButtonChunkComponent;

// src/components/ContentBlock.tsx
var useStyles3 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...hflex,
    flexShrink: 0,
    alignItems: "stretch",
    flexWrap: "wrap",
    fontSize: 16
  },
  leftAlign: {
    justifyContent: "flex-start"
  },
  centerAlign: {
    justifyContent: "center"
  },
  rightAlign: {
    justifyContent: "flex-end"
  }
});
var ContentBlock = (props) => {
  const { block, textified } = props;
  const styles = useStyles3();
  let alignStyle;
  switch (block.align) {
    case "LEFT":
      alignStyle = styles.leftAlign;
      break;
    case "CENTER":
      alignStyle = styles.centerAlign;
      break;
    case "RIGHT":
      alignStyle = styles.rightAlign;
      break;
  }
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: default7(styles.root, alignStyle)
  }, block.children.map((chunk) => {
    switch (chunk.type) {
      case "button":
        return /* @__PURE__ */ (0, preact_exports.h)(ButtonChunk_default, {
          chunk,
          textified
        });
      case "string":
        return /* @__PURE__ */ (0, preact_exports.h)(StringChunk_default, {
          chunk
        });
    }
  }));
};
var ContentBlock_default = ContentBlock;

// src/components/LineBlock.tsx
var useStyles4 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...vflex,
    flexShrink: 0,
    width: "100%",
    height: "1em"
  },
  line: {
    width: "100%",
    height: "0px"
  },
  single: {
    borderTop: "2px solid"
  },
  double: {
    borderTop: "4px double"
  },
  dot: {
    borderTop: "2px dotted"
  },
  text: {
    maxWidth: "100%",
    minHeight: "1em",
    fontSize: 16,
    lineHeight: 1.6,
    whitespace: "nowrap",
    overflow: "hidden"
  }
});
var LineChunkComponent = (props) => {
  const { block } = props;
  const styles = useStyles4();
  let child;
  if (block.value == null || block.value === "-" || block.value === "\u2501") {
    child = /* @__PURE__ */ (0, preact_exports.h)("div", {
      className: default7(styles.line, styles.single)
    });
  } else if (block.value === "=") {
    child = /* @__PURE__ */ (0, preact_exports.h)("div", {
      className: default7(styles.line, styles.double)
    });
  } else if (block.value === ".") {
    child = /* @__PURE__ */ (0, preact_exports.h)("div", {
      className: default7(styles.line, styles.dot)
    });
  } else {
    child = /* @__PURE__ */ (0, preact_exports.h)("span", {
      className: styles.text
    }, block.value.repeat(1e3));
  }
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.root
  }, child);
};
var LineBlock_default = LineChunkComponent;

// src/components/BlockList.tsx
var useStyles5 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...vflex,
    alignItems: "stretch",
    justifyContent: "flex-start",
    fontSize: 16,
    overflowY: "scroll"
  }
});
var BlockList = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const styles = useStyles5();
  const blocks = useSelector(selectBlocks);
  const textified = useSelector(selectTextified);
  const bodyRef = (0, preact_hooks_exports.useRef)(null);
  (0, preact_hooks_exports.useEffect)(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current?.scrollHeight);
  }, [blocks]);
  const onClick = () => dispatch(pushInput({ type: "pass" }));
  const onContextMenu = (event) => {
    dispatch(pushInput({ type: "skip" }));
    event.preventDefault();
  };
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: default7([styles.root, className]),
    ref: bodyRef,
    onClick,
    onContextMenu
  }, blocks.map((block, i) => {
    switch (block.type) {
      case "content":
        return /* @__PURE__ */ (0, preact_exports.h)(ContentBlock_default, {
          key: i,
          textified: textified >= i,
          block
        });
      case "line":
        return /* @__PURE__ */ (0, preact_exports.h)(LineBlock_default, {
          key: i,
          block
        });
      default:
        return null;
    }
  }));
};
var BlockList_default = BlockList;

// src/components/Console.tsx
var useStyles6 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...hflex,
    fontSize: 16
  },
  button: {
    height: "100%",
    padding: "0.5em",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer"
  },
  input: {
    flex: "1 1 auto",
    height: "100%",
    padding: "0.5em 1em",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    "&:focus": {
      outline: "none"
    }
  }
});
var Console = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const styles = useStyles6();
  const [value, setValue] = (0, preact_hooks_exports.useState)("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(refreshTextified());
    dispatch(pushInput({ type: "normal", value }));
    setValue("");
  };
  const inputRef = (0, preact_hooks_exports.useRef)(null);
  (0, preact_hooks_exports.useEffect)(() => inputRef.current?.focus(), [inputRef]);
  return /* @__PURE__ */ (0, preact_exports.h)("form", {
    className: default7(styles.root, className),
    onSubmit
  }, /* @__PURE__ */ (0, preact_exports.h)("button", {
    className: styles.button
  }, "Enter"), /* @__PURE__ */ (0, preact_exports.h)("input", {
    ref: inputRef,
    className: styles.input,
    type: "text",
    value,
    onChange: (event) => setValue(event.target.value)
  }));
};
var Console_default = Console;

// src/components/ErrorPopup.tsx
var useStyles7 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...vflex,
    padding: "2em",
    backgroundColor: "black",
    border: "1px solid white",
    transform: "translate(-50%, -50%)"
  },
  title: {
    marginBottom: "1.5em",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 1.2,
    textAlign: "center"
  },
  message: {
    marginBottom: "1.5em",
    fontSize: 16,
    textAlign: "center"
  },
  info: {
    marginBottom: "0.5em",
    fontSize: 14,
    textAlign: "center"
  },
  buttonList: {
    ...hflex,
    marginTop: "2em"
  },
  button: {
    padding: "0.5em",
    color: "white",
    border: "1px solid white",
    fontWeight: "bold",
    cursor: "pointer",
    "&+&": {
      marginLeft: "2em"
    }
  }
});
var ErrorPopup = (props) => {
  const { className, error, onBack, onRetry } = props;
  const styles = useStyles7();
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: default7(styles.root, className)
  }, /* @__PURE__ */ (0, preact_exports.h)("h2", {
    className: styles.title
  }, "Error detected!"), /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: styles.message
  }, error.message), error instanceof erajs_exports.EraJSError ? /* @__PURE__ */ (0, preact_exports.h)(preact_exports.Fragment, null, /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: styles.info
  }, "At: ", error.line.file, " line ", error.line.line), /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: styles.info
  }, error.line.content), /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: styles.info
  }, "Trace: ", error.trace.join(" > "))) : null, /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.buttonList
  }, /* @__PURE__ */ (0, preact_exports.h)("button", {
    className: styles.button,
    onClick: onBack
  }, "Go Back"), /* @__PURE__ */ (0, preact_exports.h)("button", {
    className: styles.button,
    onClick: onRetry
  }, "Retry")));
};
var ErrorPopup_default = ErrorPopup;

// src/hooks.ts
function useAsyncEffect(effect, deps) {
  (0, preact_hooks_exports.useEffect)(() => {
    effect();
  }, deps);
}

// src/pages/Play.tsx
var useStyles8 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...vflex,
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "2rem",
    backgroundColor: "black",
    color: "white"
  },
  popup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    maxWidth: "50%",
    transform: "translate(-50%, -50%)"
  },
  spacer: {
    flex: "1 1 auto"
  },
  body: {
    width: "100%",
    flex: "1 1 auto"
  },
  console: {
    width: "100%"
  }
});
var Play = () => {
  const history = (0, react_router_dom_exports.useHistory)();
  const dispatch = useDispatch();
  const styles = useStyles8();
  const params = (0, react_router_dom_exports.useParams)();
  const error = useSelector(selectError);
  useAsyncEffect(() => dispatch(startVM(params.slot)), [params.slot]);
  const onBack = () => history.push("/");
  const onRetry = () => dispatch(startVM(params.slot));
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.root
  }, error != null ? /* @__PURE__ */ (0, preact_exports.h)(ErrorPopup_default, {
    className: styles.popup,
    error,
    onBack,
    onRetry
  }) : null, /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.spacer
  }), /* @__PURE__ */ (0, preact_exports.h)(BlockList_default, {
    className: styles.body
  }), /* @__PURE__ */ (0, preact_exports.h)(Console_default, {
    className: styles.console
  }));
};
var Play_default = Play;

// src/components/svg/AddBox.tsx
var AddBox = (props) => {
  const { className, color, onClick } = props;
  const size = props.size ?? 24;
  return /* @__PURE__ */ (0, preact_exports.h)("svg", {
    viewBox: "0 0 24 24",
    fill: color,
    class: className,
    width: size,
    height: size,
    onClick
  }, /* @__PURE__ */ (0, preact_exports.h)("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z"
  }));
};
var AddBox_default = AddBox;

// src/components/svg/CheckCircle.tsx
var CheckCircle = (props) => {
  const { className, color, onClick } = props;
  const size = props.size ?? 24;
  return /* @__PURE__ */ (0, preact_exports.h)("svg", {
    viewBox: "0 0 24 24",
    fill: color,
    class: className,
    width: size,
    height: size,
    onClick
  }, /* @__PURE__ */ (0, preact_exports.h)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
  }));
};
var CheckCircle_default = CheckCircle;

// src/components/svg/Sync.tsx
var Sync = (props) => {
  const { className, color, onClick } = props;
  const size = props.size ?? 24;
  return /* @__PURE__ */ (0, preact_exports.h)("svg", {
    viewBox: "0 0 24 24",
    fill: color,
    class: className,
    width: size,
    height: size,
    onClick
  }, /* @__PURE__ */ (0, preact_exports.h)("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }));
};
var Sync_default = Sync;

// src/components/NewSlot.tsx
var useStyles9 = (0, react_jss_exports.createUseStyles)({
  "@keyframes spin": {
    "100%": {
      transform: "rotate(-360deg)"
    }
  },
  root: {
    ...hflex,
    justifyContent: "flex-start",
    padding: "1em",
    fontSize: 16
  },
  spin: {
    animation: "$spin 2s linear infinite"
  },
  body: {
    ...vflex,
    alignItems: "flex-start",
    width: "100%",
    marginRight: "0.5em"
  },
  label: {
    ...hflex,
    width: "100%",
    marginBottom: "0.5em"
  },
  nameInput: {
    width: "100%",
    marginLeft: "0.5em",
    padding: "0.2em",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    "&:focus": {
      outline: "none"
    }
  },
  fileInput: {
    width: "100%",
    marginLeft: "2em",
    "&:focus": {
      outline: "none"
    }
  },
  error: {
    fontSize: 14,
    color: "red"
  },
  icon: {
    cursor: "pointer"
  }
});
var NewSlot = (props) => {
  const { className, onCreate } = props;
  const styles = useStyles9();
  const [name, setName] = (0, preact_hooks_exports.useState)("");
  const [error, setError2] = (0, preact_hooks_exports.useState)(null);
  const [isSubmitting, setIsSubmitting] = (0, preact_hooks_exports.useState)(false);
  const slots = useSelector(selectSlots);
  const fileRef = (0, preact_hooks_exports.useRef)(null);
  const onSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const file = fileRef.current.files?.item(0);
    if (name === "") {
      setError2("Please set the name of the slot");
      return;
    } else if (slots[name] != null) {
      setError2(`Slot ${name} already exists`);
      return;
    } else if (file == null) {
      setError2("Please specify the file for this slot");
      return;
    } else if (file.type !== "application/zip" && file.type !== "application/x-zip" && file.type !== "application/x-zip-compressed") {
      setError2("Only zip files are supported");
      return;
    }
    setError2(null);
    await onCreate?.({ name }, file);
    setIsSubmitting(false);
  };
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: default7([styles.root, className])
  }, /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.body
  }, /* @__PURE__ */ (0, preact_exports.h)("label", {
    className: styles.label
  }, "Name:", /* @__PURE__ */ (0, preact_exports.h)("input", {
    className: styles.nameInput,
    type: "text",
    value: name,
    onChange: (e) => setName(e.target.value)
  })), /* @__PURE__ */ (0, preact_exports.h)("label", {
    className: styles.label
  }, "File:", /* @__PURE__ */ (0, preact_exports.h)("input", {
    className: styles.fileInput,
    type: "file",
    ref: fileRef
  })), error != null ? /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: styles.error
  }, error) : null), isSubmitting ? /* @__PURE__ */ (0, preact_exports.h)(Sync_default, {
    className: default7(styles.icon, styles.spin),
    color: "white",
    size: 48
  }) : /* @__PURE__ */ (0, preact_exports.h)(CheckCircle_default, {
    className: styles.icon,
    color: "white",
    size: 48,
    onClick: onSubmit
  }));
};
var NewSlot_default = NewSlot;

// src/components/svg/Delete.tsx
var Delete = (props) => {
  const { className, color, onClick } = props;
  const size = props.size ?? 24;
  return /* @__PURE__ */ (0, preact_exports.h)("svg", {
    viewBox: "0 0 24 24",
    fill: color,
    class: className,
    width: size,
    height: size,
    onClick
  }, /* @__PURE__ */ (0, preact_exports.h)("path", {
    d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
  }));
};
var Delete_default = Delete;

// src/components/svg/PlayCircleFilled.tsx
var PlayCircleFilled = (props) => {
  const { className, color, onClick } = props;
  const size = props.size ?? 24;
  return /* @__PURE__ */ (0, preact_exports.h)("svg", {
    viewBox: "0 0 24 24",
    fill: color,
    class: className,
    width: size,
    height: size,
    onClick
  }, /* @__PURE__ */ (0, preact_exports.h)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
  }));
};
var PlayCircleFilled_default = PlayCircleFilled;

// src/components/ValidSlot.tsx
var useStyles10 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...vflex,
    padding: "1em",
    fontSize: 16
  },
  body: {
    ...hflex,
    width: "100%"
  },
  name: {
    flexGrow: 1
  },
  icon: {
    marginLeft: "0.5em",
    cursor: "pointer"
  }
});
var ValidSlot = (props) => {
  const { slot } = props;
  const onPlay = () => props.onPlay?.(slot);
  const onDelete = () => props.onDelete?.(slot);
  const styles = useStyles10();
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.root
  }, /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.body
  }, /* @__PURE__ */ (0, preact_exports.h)("span", {
    className: styles.name
  }, slot.name), /* @__PURE__ */ (0, preact_exports.h)(PlayCircleFilled_default, {
    className: styles.icon,
    color: "white",
    size: 48,
    onClick: onPlay
  }), /* @__PURE__ */ (0, preact_exports.h)(Delete_default, {
    className: styles.icon,
    color: "white",
    size: 48,
    onClick: onDelete
  })));
};
var ValidSlot_default = ValidSlot;

// src/pages/Root.tsx
var useStyles11 = (0, react_jss_exports.createUseStyles)({
  root: {
    ...vflex,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    color: "white"
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    lineHeight: "1.5em"
  },
  subtitle: {
    marginBottom: "1em",
    fontSize: 20,
    fontWeight: "normal",
    lineHeight: "1.5em"
  },
  link: {
    color: "skyblue !important",
    textDecoration: "underline !important"
  },
  slotList: {
    ...vflex,
    width: "100%",
    paddingLeft: "10rem",
    paddingRight: "10rem"
  },
  slot: {
    width: "100%",
    maxWidth: "30rem",
    marginBottom: "0.5rem",
    border: "1px solid white",
    "&:hover": {
      backgroundColor: "#0B0B0B"
    }
  },
  new: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "1em",
    cursor: "pointer"
  }
});
var Root = () => {
  const history = (0, react_router_dom_exports.useHistory)();
  const dispatch = useDispatch();
  const styles = useStyles11();
  const [isCreating, setIsCreating] = (0, preact_hooks_exports.useState)(false);
  const slotMap = useSelector(selectSlots);
  useAsyncEffect(() => dispatch(rehydrateSlots()), []);
  const onPlay = (slot) => history.push("/slot/" + slot.name);
  const onDelete = (slot) => dispatch(removeSlot(slot.name));
  const onCreate = async (slot, file) => {
    await dispatch(createSlot(slot, file));
    setIsCreating(false);
  };
  const slotKeys = Object.keys(slotMap);
  slotKeys.sort();
  return /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.root
  }, /* @__PURE__ */ (0, preact_exports.h)("h1", {
    className: styles.title
  }, "WebEra v2021.10.31"), /* @__PURE__ */ (0, preact_exports.h)("h2", {
    className: styles.subtitle
  }, "- Created by", " ", /* @__PURE__ */ (0, preact_exports.h)("a", {
    className: styles.link,
    href: "https://github.com/undercrow"
  }, "Undercrow"), " ", "-"), /* @__PURE__ */ (0, preact_exports.h)("ul", {
    className: styles.slotList
  }, slotKeys.map((key) => /* @__PURE__ */ (0, preact_exports.h)("li", {
    className: styles.slot
  }, /* @__PURE__ */ (0, preact_exports.h)(ValidSlot_default, {
    slot: slotMap[key],
    onPlay,
    onDelete
  }))), /* @__PURE__ */ (0, preact_exports.h)("li", {
    className: styles.slot
  }, isCreating ? /* @__PURE__ */ (0, preact_exports.h)(NewSlot_default, {
    onCreate
  }) : /* @__PURE__ */ (0, preact_exports.h)("div", {
    className: styles.new,
    onClick: () => setIsCreating(true)
  }, /* @__PURE__ */ (0, preact_exports.h)(AddBox_default, {
    color: "white",
    size: 48
  })))));
};
var Root_default = Root;

// src/App.tsx
var App = () => /* @__PURE__ */ (0, preact_exports.h)(react_router_dom_exports.Switch, null, /* @__PURE__ */ (0, preact_exports.h)(react_router_dom_exports.Route, {
  path: "/"
}, /* @__PURE__ */ (0, preact_exports.h)(Root_default, null)), /* @__PURE__ */ (0, preact_exports.h)(react_router_dom_exports.Route, {
  path: "/slot/:slot"
}, /* @__PURE__ */ (0, preact_exports.h)(Play_default, null)), /* @__PURE__ */ (0, preact_exports.h)(react_router_dom_exports.Route, {
  path: "*"
}, /* @__PURE__ */ (0, preact_exports.h)(react_router_dom_exports.Redirect, {
  to: "/"
})));
var App_default = App;

// src/index.tsx
(0, preact_exports.render)(
  /* @__PURE__ */ (0, preact_exports.h)(react_redux_exports.Provider, {
    store: store_default
  }, /* @__PURE__ */ (0, preact_exports.h)(react_router_dom_exports.HashRouter, {
    hashType: "noslash"
  }, /* @__PURE__ */ (0, preact_exports.h)(App_default, null))),
  document.getElementById("root")
);
