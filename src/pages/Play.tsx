/** @jsx h */
import { h } from "../../deps/preact.ts";

import type { FunctionComponent } from "../../deps/preact.ts";
import { createUseStyles } from "../../deps/react_jss.ts";
import { useHistory, useParams } from "../../deps/react_router_dom.ts";

import BlockList from "../components/BlockList.tsx";
import Console from "../components/Console.tsx";
import ErrorPopup from "../components/ErrorPopup.tsx";
import { useAsyncEffect } from "../hooks.ts";
import { useDispatch, useSelector } from "../store/index.ts";
import { selectError, startVM } from "../store/vm.ts";
import * as sx from "../style-util.ts";

const useStyles = createUseStyles({
	root: {
		...sx.vflex,
		position: "relative",
		width: "100%",
		height: "100%",
		padding: "2rem",
		backgroundColor: "black",
		color: "white",
	},
	popup: {
		position: "absolute",
		top: "50%",
		left: "50%",
		maxWidth: "50%",
		transform: "translate(-50%, -50%)",
	},
	spacer: {
		flex: "1 1 auto",
	},
	body: {
		width: "100%",
		flex: "1 1 auto",
	},
	console: {
		width: "100%",
	},
});

type Params = {
	slot: string;
};

const Play: FunctionComponent = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const styles = useStyles();
	const params = useParams<Params>();
	const error = useSelector(selectError);

	// @ts-ignore maybe undef
	useAsyncEffect(() => dispatch(startVM(params.slot)), [params.slot]);
	const onBack = () => history.push("/");
	// @ts-ignore maybe undef
	const onRetry = () => dispatch(startVM(params.slot));

	return (
		<div className={styles.root}>
			{error != null
				? (
					<ErrorPopup
						className={styles.popup}
						error={error}
						onBack={onBack}
						onRetry={onRetry}
					/>
				)
				: null}
			<div className={styles.spacer} />
			<BlockList className={styles.body} />
			<Console className={styles.console} />
		</div>
	);
};

export default Play;
