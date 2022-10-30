/** @jsx h */
import { h } from "../../deps/preact.ts";

import classNames from "../../deps/classnames.ts";
import type { FunctionComponent } from "../../deps/preact.ts";
import { useEffect, useRef, useState } from "../../deps/preact_hooks.ts";
import { createUseStyles } from "../../deps/react_jss.ts";

import { useDispatch } from "../store/index.ts";
import { refreshTextified } from "../store/log.ts";
import { pushInput } from "../store/vm.ts";
import * as sx from "../style-util.ts";

const useStyles = createUseStyles({
  root: {
    ...sx.hflex,
    fontSize: 16,
  },
  button: {
    height: "100%",
    padding: "0.5em",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
  },
  input: {
    flex: "1 1 auto",
    height: "100%",
    padding: "0.5em 1em",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",

    "&:focus": {
      outline: "none",
    },
  },
});

type Props = {
  className?: string;
};

const Console: FunctionComponent<Props> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const styles = useStyles();

  const [value, setValue] = useState("");
  const onSubmit = (event: Event) => {
    event.preventDefault();
    dispatch(refreshTextified());
    dispatch(pushInput({ type: "normal", value }));
    setValue("");
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), [inputRef]);

  return (
    <form className={classNames(styles.root, className)} onSubmit={onSubmit}>
      <button className={styles.button}>Enter</button>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        value={value}
        onChange={(event: Event) =>
          setValue((event.target as HTMLInputElement).value)}
      />
    </form>
  );
};

export default Console;
