/** @jsx h */
import { h } from "../../deps/preact.ts";

import type { FunctionComponent } from "../../deps/preact.ts";
import { createUseStyles } from "../../deps/react_jss.ts";

import Delete from "../components/svg/Delete.tsx";
import PlayCircleFilled from "../components/svg/PlayCircleFilled.tsx";
import * as sx from "../style-util.ts";
import { Slot } from "../typings/metadata.ts";

const useStyles = createUseStyles({
  root: {
    ...sx.vflex,
    padding: "1em",
    fontSize: 16,
  },
  body: {
    ...sx.hflex,
    width: "100%",
  },
  name: {
    flexGrow: 1,
  },
  icon: {
    marginLeft: "0.5em",
    cursor: "pointer",
  },
});

type Props = {
  onPlay?: (slot: Slot) => void | Promise<void>;
  onDelete?: (slot: Slot) => void;
  slot: Slot;
};

const ValidSlot: FunctionComponent<Props> = (props) => {
  const { slot } = props;
  const onPlay = () => props.onPlay?.(slot);
  const onDelete = () => props.onDelete?.(slot);

  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <span className={styles.name}>{slot.name}</span>
        <PlayCircleFilled
          className={styles.icon}
          color="white"
          size={48}
          onClick={onPlay}
        />
        <Delete
          className={styles.icon}
          color="white"
          size={48}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default ValidSlot;
