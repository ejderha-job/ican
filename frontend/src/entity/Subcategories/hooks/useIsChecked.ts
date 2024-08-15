import { $subcategories } from "app/tasks/model/subcategories";
import { useUnit } from "effector-react";

export const useIsChecked = (IDs: number[]) => {
    const [subcategories] = useUnit([$subcategories])

    const isChecked = IDs.every(el => subcategories.includes(el))

    return { isChecked }
}