import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import { memo } from "react";
import { BreadCrumbs } from "widget/BreadCrumbs/BreadCrumbs";
import { Search } from "widget/Search/ui/Search";
import Media from "../assets/Media.svg";

export const Header = memo(() => {
  return (
    <Container mt={"70px"} style={{background:"#E9714B"}} flexGrow={"0"}>
      <Flex justify={"between"} align={"center"}>
        <Flex direction={"column"} gap={"4"}>
          <Heading>Все задания</Heading>
          <BreadCrumbs />
          <Search />
          <Text>Найдено 10000 заданий</Text>
        </Flex>
        <Media />
      </Flex>
    </Container>
  );
});
