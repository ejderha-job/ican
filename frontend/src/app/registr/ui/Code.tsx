import {
  Button,
  Card,
  Checkbox,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import { memo } from "react";

export const Code = memo(() => {
  return (
    <Card>
      <Flex direction={"column"} gap={"4"}>
        <Flex direction={"column"}>
          <Text>Номер телефона</Text>
          <TextField.Root></TextField.Root>
        </Flex>
        <Flex direction={"column"}>
          <Flex justify={"between"}>
            <Text>СМС код</Text>
            <Text>Получить код</Text>
          </Flex>
          <TextField.Root></TextField.Root>
        </Flex>
        <Text as={"label"}>
          <Flex gap={"4"} align={"center"}>
            <Checkbox />Я согласен с условиями
          </Flex>
        </Text>
        <Text as={"label"}>
          <Flex gap={"4"} align={"center"}>
            <Checkbox />Я согласен с Политикой конфиденциальности
          </Flex>
        </Text>
        <Button>Подтвердить</Button>
      </Flex>
    </Card>
  );
});
