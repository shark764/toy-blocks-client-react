import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { Block, Node } from "../types/Node";
import { RootState } from "../store/configureStore";
import fetch from "cross-fetch";

export interface NodesState {
  list: Node[];
}

export const checkNodeStatus = createAsyncThunk(
  "nodes/checkNodeStatus",
  async (node: Node) => {
    const response = await fetch(`${node.url}/api/v1/status`);
    const data: { node_name: string } = await response.json();
    return data;
  }
);

export const checkNodesStatus = createAsyncThunk(
  "nodes/checkNodesStatus",
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const nodes = (getState() as RootState).nodes.list;
    nodes.forEach((node) => {
      dispatch(checkNodeStatus(node));
    });
  }
);

export const retrieveNodeBlocks = createAsyncThunk(
  "nodes/retrieveNodeBlocks",
  async (node: Node) => {
    const data: { data: Block[] } = await (
      await fetch(`${node.url}/api/v1/blocks`)
    ).json();
    return data;
  }
);

export const retrieveNodesBlocks = createAsyncThunk(
  "nodes/retrieveNodesBlocks",
  async (nodes: Node[], thunkAPI) => {
    const { dispatch } = thunkAPI;
    nodes.forEach((node) => {
      dispatch(retrieveNodeBlocks(node));
    });
  }
);

export const nodesSlice = createSlice({
  name: "nodes",
  initialState: initialState().nodes as NodesState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkNodeStatus.pending, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) node.loading = true;
    });
    builder.addCase(checkNodeStatus.fulfilled, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node.online = true;
        node.loading = false;
        node.name = action.payload.node_name;
      }
    });
    builder.addCase(checkNodeStatus.rejected, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node) {
        node.online = false;
        node.loading = false;
      }
    });
    builder.addCase(retrieveNodeBlocks.pending, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node !== undefined) {
        node.loading = true;
      }
    });
    builder.addCase(retrieveNodeBlocks.fulfilled, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node !== undefined) {
        node.loading = false;
        node.blocks = action.payload.data;
      }
    });
    builder.addCase(retrieveNodeBlocks.rejected, (state, action) => {
      const node = state.list.find((n) => n.url === action.meta.arg.url);
      if (node !== undefined) {
        node.loading = false;
        node.blocks = [];
      }
    });
  },
});

export const selectNodes = (state: RootState) => state.nodes.list;
export default nodesSlice.reducer;
