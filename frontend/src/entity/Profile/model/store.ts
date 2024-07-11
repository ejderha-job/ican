import {createEvent, createStore} from "effector";

export const token = createStore<string>(JSON.parse(localStorage.getItem("token")))
export const setToken = createEvent()
token.on(setToken, (state, payload) => {
    localStorage.setItem("token", JSON.stringify(payload))
    return payload
})