import { Container, Flex, Link, Text } from "@radix-ui/themes";
import { Logo } from "../logo/Logo";
import { Location, Lang, Auth } from "entity";

interface HeaderProps {
  theme: "light" | "dark";
}

export const Header = (props: HeaderProps) => {
  const { theme } = props;
  return (
    <header style={{ position: "fixed", width: "100%", zIndex: 100, background:"#fff" }}>
      <Container height={"66px"}>
        <Flex justify={"between"} height={"100%"} align={"center"}>
          <Logo />
          <Location locationID={1}/>
          <Lang />
          <Link href="/createTask/step1">Создать задание</Link>
          <Link href="/tasks">Найти задание</Link>
          <Auth />
          <Text>Theme</Text>
        </Flex>
      </Container>
    </header>
  );
};
