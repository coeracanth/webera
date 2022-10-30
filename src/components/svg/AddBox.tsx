/** @jsx h */
import { h } from "../../../deps/preact.ts";

import type { FunctionComponent } from "../../../deps/preact.ts";

type Props = {
  className?: string;
  onClick?: () => void;
  size?: 18 | 24 | 36 | 48;
  color: string;
};

/* eslint-disable max-len */
const AddBox: FunctionComponent<Props> = (props) => {
  const { className, color, onClick } = props;
  const size = props.size ?? 24;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      class={className}
      width={size}
      height={size}
      onClick={onClick}
    >
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z" />
    </svg>
  );
};
/* eslint-enable max-len */

export default AddBox;
