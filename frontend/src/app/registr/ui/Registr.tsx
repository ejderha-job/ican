import {
  Button,
  Container,
  Flex,
  Heading,
  Radio,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { memo } from "react";
import { Code } from "./Code";

export const Registr = memo(() => {
  return (
    <Container>
      <Flex height={"100vh"} align={"center"} justify={"between"}>
        <Flex direction={"column"} gap={"8"} flexGrow={"1"} maxWidth={"500px"}>
          <Heading>Создать аккаунт</Heading>
          <Flex direction={"column"} gap={"4"}>
            <Flex direction={"column"}>
              <Text>Email</Text>
              <TextField.Root></TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>Введите ваше ФИО</Text>
              <TextField.Root></TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>Пароль</Text>
              <TextField.Root></TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>Подтверждение пароля</Text>
              <TextField.Root></TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>Укажите ваш пол</Text>
              <Flex gap={"4"}>
                <Button>
                  <Text as="label">
                    <Flex align={"center"} justify={"center"} gap={"1"}>
                      <Radio value="1" />
                      Мужской
                    </Flex>
                  </Text>
                </Button>
                <Button>
                  <Text as="label">
                    <Flex align={"center"} justify={"center"} gap={"1"}>
                      <Radio value="0" />
                      Женский
                    </Flex>
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Flex direction={"column"}>
              <Text>Ваш город</Text>
              <Select.Root defaultValue="apple">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="orange">Orange</Select.Item>
                  <Select.Item value="apple">Apple</Select.Item>
                  <Select.Item value="grape">Grape</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
            <Flex direction={"column"}>
              <Text>Адрес</Text>
              <TextField.Root></TextField.Root>
            </Flex>
          </Flex>
        </Flex>
        <Code />
      </Flex>
    </Container>
  );
});
