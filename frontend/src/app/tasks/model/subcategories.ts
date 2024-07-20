import { createApi, createStore } from "effector";

export const $subcategories = createStore<Number[]>([])

export const subcategoriesAPI = createApi($subcategories, {
    addID: (state, ID: number) => ([...state, ID]),
    removeID: (state, ID: number) => (state.filter(el => el !== ID)),
    set: (state, IDs: number[]) => ([...state, ...IDs])
});