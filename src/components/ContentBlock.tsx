/** @jsx h */
import { h } from "../../deps/preact.ts";

import classnames from "../../deps/classnames.ts";
import { ContentOutput } from "../../deps/erajs.ts";
import type { FunctionComponent } from "../../deps/preact.ts";
import { createUseStyles } from "../../deps/react_jss.ts";

import ButtonChunk from "../components/ButtonChunk.tsx";
import StringChunk from "../components/StringChunk.tsx";
import * as sx from "../style-util.ts";

const useStyles = createUseStyles({
  root: {
    ...sx.hflex,
    flexShrink: 0,
    alignItems: "stretch",
    flexWrap: "wrap",
    fontSize: 16,
  },
  leftAlign: {
    justifyContent: "flex-start",
  },
  centerAlign: {
    justifyContent: "center",
  },
  rightAlign: {
    justifyContent: "flex-end",
  },
});

type Props = {
  textified: boolean;
  block: ContentOutput;
};

const ContentBlock: FunctionComponent<Props> = (props) => {
  const { block, textified } = props;
  const styles = useStyles();

  let alignStyle: string;
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

  return (
    <div className={classnames(styles.root, alignStyle)}>
      {block.children.map((chunk) => {
        switch (chunk.type) {
          case "button":
            return <ButtonChunk chunk={chunk} textified={textified} />;
          case "string":
            return <StringChunk chunk={chunk} />;
        }
      })}
    </div>
  );
};

export default ContentBlock;
