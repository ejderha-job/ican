"use client"
import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { $subcategories } from "app/tasks/model/subcategories";
import { useUnit } from "effector-react";
import { SubcategoriesType } from "entity/Subcategories/model/type/subcategories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

interface ItemProps extends SubcategoriesType {
}

const useIsChecked = (IDs: number[]) => {
  const [subcategories] = useUnit([$subcategories])

  const isChecked = IDs.every(el => subcategories.includes(el))

  return { isChecked }
}

export const Item = memo((props: ItemProps) => {
  const { title, IDs } = props
  const { isChecked } = useIsChecked(IDs)
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const data = params.get("IDs") ? `${params.get("IDs")},` : ""

  const handlerClick = () => {
    router.push(`${pathname}?IDs=${data}${IDs}`)
  }

  return (
    <Text as="label">
      <Flex gap={"4"} align={"center"}>
        <Checkbox size="3" checked={isChecked} onClick={handlerClick} />
        <Text>{title}</Text>
      </Flex>
    </Text>
  );
});