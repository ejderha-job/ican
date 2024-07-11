import {useUnit} from "effector-react";
import {categories, getCategories} from "../store/categories";
import {useEffect, useState} from "react";

export const useSubcategories = () => {
    const [categoriesList, isLoading] = useUnit([categories, getCategories.pending])
    const [subcategories, setSubcategories] = useState([])

    const handlerSelectCategory = (categoryId: number) => () => {
        setSubcategories(categoriesList.find(el => el.id === categoryId).subcategories)
    };

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setSubcategories(categoriesList[0]?.subcategories)
    }, [categoriesList])

    return {
        categoriesList, subcategories, handlerSelectCategory, isLoading
    }
}