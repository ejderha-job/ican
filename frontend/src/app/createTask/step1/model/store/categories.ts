import {createEffect, createStore} from "effector";
import axios from "axios";

export const getCategories = createEffect(async ()=>{
    return (await axios.get("http://localhost:9000/categories")).data
})
export const categories = createStore([])
categories.on(getCategories.doneData, (state, payload)=>{
    return payload
})