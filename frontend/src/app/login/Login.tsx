"use client"
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
import {redirect, useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import axios from "axios";
import {setToken} from "entity/Profile";

interface login {
  login: string
  password: string
}

export const Login = memo(() => {
  const router = useRouter()
  const {
    register,
    handleSubmit
  } = useForm<login>()

  const handlerClick = () => {
    router.push('/')
  }

  const onSubmit = handleSubmit(async (values)=> {
    const token = (await axios.post("http://localhost:9000/auth/login", {
      username:values.login,
      password:values.password
    })).data
    setToken(token.access_token)
    router.push('/')
  })

  return (
    <Container>
      <Flex align={"center"} justify={"between"} minHeight={"100vh"}>
        <Media />
        <form onSubmit={onSubmit}>
          <Flex direction={"column"} gap={"4"}>
            <Heading>Добро пожаловать в iCan</Heading>
            <Text>Нажмия «продолжить», вы соглашаетесь с правилами сайта </Text>
            <Flex direction={"column"}>
              <Text>Email</Text>
              <TextField.Root {...register("login")}></TextField.Root>
            </Flex>
            <Flex direction={"column"}>
              <Flex justify={"between"}>
                <Text>Пароль</Text>
                <Link>Забыли пароль?</Link>
              </Flex>
              <TextField.Root {...register("password")}></TextField.Root>
            </Flex>
            <Button onClick={handlerClick}>Далее</Button>
            <Text>
              Если у вас нет аккаунта? <Link>Создать</Link>
            </Text>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
});
