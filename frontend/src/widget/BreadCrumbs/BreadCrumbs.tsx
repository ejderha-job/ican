import { Button, Flex, Text } from "@radix-ui/themes";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

export const BreadCrumbs = memo(() => {
  const nav = useNavigate()
  const handlerClick = () => {
    nav(-1)
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
