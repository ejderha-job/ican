"use client"
import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useIsChecked } from "../../hooks/useIsChecked";
import { filter } from "../../lib/filter";
import { SubcategoriesType } from "../../model/type/subcategories";
import { useRouter, useSearchParams } from "next/navigation";
import { memo } from "react";

interface ItemProps extends SubcategoriesType {
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
    } else {
      router.push(`http://localhost:3000/tasks?IDs=${IDs}`)
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