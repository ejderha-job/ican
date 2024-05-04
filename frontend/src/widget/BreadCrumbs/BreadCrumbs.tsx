"use client"
import { Button, Flex, Text } from "@radix-ui/themes";
import { memo } from "react";
import {useRouter} from "next/navigation";

export const BreadCrumbs = memo(() => {
  const {back} = useRouter()
  const handlerClick = () => {
      back()
  }
  return (
    <Flex align={"center"} gap={"4"}>
      <Button onClick={handlerClick}>Вернуться назад</Button>
      <Flex>
        <Text>Главная > Выбрать категорию</Text>
      </Flex>
    </Flex>
  );
});
