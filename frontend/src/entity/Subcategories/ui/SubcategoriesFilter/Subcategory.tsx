"use client"
import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useIsChecked } from "entity/Subcategories/hooks/useIsChecked";
import { SubcategoriesType } from "entity/Subcategories/model/type/subcategories";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

interface ItemProps extends SubcategoriesType {
}

// вернет значения из arr1 которых нет в arr2
// удалит из arr2 те значения которые есть в arr1
export const filter = (arr1: number[], arr2: number[]) => {
  if (!arr1.length) {
    return arr2
  }
  const add:number[] = []
  const del:number[] = []
  arr1.forEach(id => {
    if (arr2.includes(id)) {
      del.push(id)
    } else {
      add.push(id)
    }
  })
  const copy = arr2.filter(id => !del.includes(id))
  return [...copy, ...add]
}

export const Item = memo((props: ItemProps) => {
  const { title, IDs } = props
  const { isChecked } = useIsChecked(IDs)
  const router = useRouter()
  const searchParams = useSearchParams()

  const queryParams = searchParams.get('IDs')

  const handlerClick = () => {
    if (queryParams) {
      // id которые есть в query параметрах []number
      const list = queryParams.split(",").map(el => Number(el))
      const res = filter(IDs, list)
      router.push(`http://localhost:3000/tasks?IDs=${res}`)
    }
    router.refresh()
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