import { Container, Flex, Link, Text } from "@radix-ui/themes";
import { Logo } from "../logo/Logo";
import { Location, Lang, Auth } from "entity";
import "./Header.css";

interface HeaderProps {
  theme: "light" | "dark";
}

export const Header = (props: HeaderProps) => {
  const { theme } = props;
  const hasLogged = false;
  return (
    <header style={{ position: "fixed", width: "100%", zIndex: 100 }}>
      <Container height={"66px"}>
        <Flex justify={"between"} height={"100%"} align={"center"}>
          <Logo />
          <Location />
          <Lang />
          <Link href="/createTask/step1">Создать задание</Link>
          <Link href="/tasks">Найти задание</Link>
          <Auth logged={hasLogged} />
          <Text>Theme</Text>
        </Flex>
      </Container>
    </header>
  );
};
