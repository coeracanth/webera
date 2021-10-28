import {h} from "preact";

import classNames from "classnames";
import type {FunctionComponent} from "preact";
import {useEffect, useRef} from "preact/hooks";
import {createUseStyles} from "react-jss";

import Block from "../components/Block";
import {useDispatch, useSelector} from "../store";
import {selectBlocks, selectTextified} from "../store/log";
import {pushInput} from "../store/vm";
import * as sx from "../style-util";

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

const LogList: FunctionComponent<Props> = (props) => {
	const {className} = props;
	const dispatch = useDispatch();
	const styles = useStyles();
	const blocks = useSelector(selectBlocks);
	const textified = useSelector(selectTextified);
	const bodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		bodyRef.current?.scrollTo(0, bodyRef.current?.scrollHeight);
	}, [blocks]);

	const onClick = () => dispatch(pushInput({type: "pass"}));
	const onContextMenu = (event: Event) => {
		dispatch(pushInput({type: "skip"}));
		event.preventDefault();
	};

	return (
		<div
			className={classNames([styles.root, className])}
			ref={bodyRef}
			onClick={onClick}
			onContextMenu={onContextMenu}
		>
			{blocks.map((block, i) => <Block key={i} textified={textified >= i} block={block} />)}
		</div>
	);
};

export default LogList;
