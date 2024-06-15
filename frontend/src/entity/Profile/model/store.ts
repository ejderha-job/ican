import {createEvent, createStore} from "effector";

export const token = createStore<string|null>(null)
export const setToken = createEvent()
token.on(setToken, (state, payload) => payload)