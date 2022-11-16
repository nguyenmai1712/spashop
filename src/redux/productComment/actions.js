import { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from "./constants";

export const addComment = (comment) => ({ type: ADD_COMMENT, payload: comment});
export const updateComment = (comment) => ({ type: UPDATE_COMMENT, payload: comment});
export const deleteComment = (id) => ({ type: DELETE_COMMENT, payload: id});