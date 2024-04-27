import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  TextField,
} from "@radix-ui/themes";
import Media from "../../../assets/login.svg";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

export const Login = memo(() => {
  const nav = useNavigate()

  const handlerClick = () => {
    nav("/")
  }

  return (
    <Container>
      <Flex align={"center"} justify={"between"} minHeight={"100vh"}>
        <Media />
        <Flex direction={"column"} gap={"4"}>
          <Heading>Добро пожаловать в iCan</Heading>
          <Text>Нажмия «продолжить», вы соглашаетесь с правилами сайта </Text>
          <Flex direction={"column"}>
            <Text>Email</Text>
            <TextField.Root></TextField.Root>
          </Flex>
          <Flex direction={"column"}>
            <Flex justify={"between"}>
              <Text>Пароль</Text>
              <Link>Забыли пароль?</Link>
            </Flex>
            <TextField.Root></TextField.Root>
          </Flex>
          <Button onClick={handlerClick}>Далее</Button>
          <Text>
            Если у вас нет аккаунта? <Link>Создать</Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
});
