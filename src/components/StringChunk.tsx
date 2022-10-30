/** @jsx h */
import { h } from "../../deps/preact.ts";

import classnames from "../../deps/classnames.ts";
import { StringChunk } from "../../deps/erajs.ts";
import type { FunctionComponent } from "../../deps/preact.ts";
import { createUseStyles } from "../../deps/react_jss.ts";

import * as sx from "../style-util.ts";

const useStyles = createUseStyles({
  root: {
    ...sx.hflex,
    minHeight: "1em",
    fontSize: 16,
    lineHeight: 1.6,
  },
  leftAlign: {
    minWidth: "14em",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  rightAlign: {
    minWidth: "14em",
    justifyContent: "flex-end",
    textAlign: "right",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  underline: {
    textDecoration: "underline",
  },
  color: (chunk: StringChunk) => ({
    color: "#" + chunk.style.color,
  }),
});

type Props = {
  chunk: StringChunk;
};

const StringChunkComponent: FunctionComponent<Props> = (props) => {
  const { chunk } = props;
  const styles = useStyles(chunk);

  const textStyles: string[] = [];
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

  return (
    <span className={classnames(styles.root, ...textStyles)}>
      {chunk.text}
    </span>
  );
};

export default StringChunkComponent;
