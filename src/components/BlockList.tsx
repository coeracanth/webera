/** @jsx h */
import { h } from "../../deps/preact.ts";

import classNames from "../../deps/classnames.ts";
import type { FunctionComponent } from "../../deps/preact.ts";
import { useEffect, useRef } from "../../deps/preact_hooks.ts";
import { createUseStyles } from "../../deps/react_jss.ts";

import ContentBlock from "../components/ContentBlock.tsx";
import LineBlock from "../components/LineBlock.tsx";
import { useDispatch, useSelector } from "../store/index.ts";
import { selectBlocks, selectTextified } from "../store/log.ts";
import { pushInput } from "../store/vm.ts";
import * as sx from "../style-util.ts";

const useStyles = createUseStyles({
  root: {
    ...sx.vflex,
    alignItems: "stretch",
    justifyContent: "flex-start",
    fontSize: 16,
    overflowY: "scroll",
  },
});

type Props = {
  className?: string;
};

const BlockList: FunctionComponent<Props> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const styles = useStyles();
  const blocks = useSelector(selectBlocks);
  const textified = useSelector(selectTextified);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    bodyRef.current?.scrollTo(0, bodyRef.current?.scrollHeight);
  }, [blocks]);

  const onClick = () => dispatch(pushInput({ type: "pass" }));
  const onContextMenu = (event: Event) => {
    dispatch(pushInput({ type: "skip" }));
    event.preventDefault();
  };

  return (
    <div
      className={classNames([styles.root, className])}
      ref={bodyRef}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {blocks.map((block, i) => {
        switch (block.type) {
          case "content":
            return (
              <ContentBlock key={i} textified={textified >= i} block={block} />
            );
          case "line":
            return <LineBlock key={i} block={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlockList;
