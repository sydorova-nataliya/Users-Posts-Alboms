import { SET_USERS, SET_POSTS } from "./types";

export const setUsers = (payload) =>({
    type:SET_USERS,
    payload
});
export const setPosts = (payload) =>({
    type:SET_POSTS,
    payload
});