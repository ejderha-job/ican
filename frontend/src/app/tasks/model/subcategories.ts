"use client"

import { createEvent, restore } from "effector";

export const putSubcategories = createEvent<number[]>()

export const $subcategories = restore(putSubcategories,[])