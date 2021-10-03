import {createSelector} from "reselect";
import {createAction, createReducer} from "typesafe-actions";

import {Block, LineChunk, StringChunk} from "../typings/chunk";
import {createSubReducer, State as RootState} from "./index";

export type State = {
	blocks: Block[];
};

const initial: State = {
	blocks: [
		{
			chunks: [],
			align: "LEFT",
		},
	],
};

export const selector = (state: RootState): State => state.log;
export const selectBlocks = createSelector(selector, (state) => state.blocks);

export const pushNewline = createAction("LOG/BLOCK/PUSH/NEWLINE")();
export const pushLine = createAction("LOG/BLOCK/PUSH/LINE")<Omit<LineChunk, "type">>();
export const pushString = createAction("LOG/BLOCK/PUSH/STRING")<Omit<StringChunk, "type">>();

export type Action =
	| ReturnType<typeof pushNewline>
	| ReturnType<typeof pushLine>
	| ReturnType<typeof pushString>;
export const reducer = createReducer<State, Action>(initial, {
	"LOG/BLOCK/PUSH/NEWLINE": createSubReducer((state) => {
		const align = state.blocks[state.blocks.length - 1].align;
		state.blocks.push({
			chunks: [],
			align,
		});
	}),
	"LOG/BLOCK/PUSH/LINE": createSubReducer((state, action) => {
		const {value} = action.payload;

		const lastBlock = state.blocks[state.blocks.length - 1];
		if (lastBlock.chunks.length === 0) {
			state.blocks.pop();
		}

		state.blocks.push({
			chunks: [{type: "line", value}],
			align: lastBlock.align,
		});
	}),
	"LOG/BLOCK/PUSH/STRING": createSubReducer((state, action) => {
		const {text, cell} = action.payload;

		const lastBlock = state.blocks[state.blocks.length - 1];
		const lastChunk = lastBlock.chunks[lastBlock.chunks.length - 1];
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		switch (lastChunk?.type) {
			case undefined:
			case "line": {
				state.blocks.push({
					chunks: [{type: "string", text, cell}],
					align: lastBlock.align,
				});
				break;
			}
			case "button": {
				lastBlock.chunks.push({type: "string", text, cell});
				break;
			}
			case "string": {
				if (cell == null && lastChunk.cell == null) {
					lastChunk.text += text;
				} else {
					lastBlock.chunks.push({type: "string", text, cell});
				}
				break;
			}
		}
	}),
});
