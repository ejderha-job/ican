import { Container, Flex, Heading } from "@radix-ui/themes";
import { memo } from "react";
import { BreadCrumbs } from "../../../../widget/BreadCrumbs/BreadCrumbs";
import { Form } from "./Form";
import { Profile } from "./Profile";

export const CreateTask = memo(() => {
  return (
    <Container pt={"70px"}>
      <Flex direction={"column"} gap={"8"}>
        <BreadCrumbs />
        <Heading>Создать задание</Heading>
        <Flex justify={"between"}>
          <Form />
          <Profile />
        </Flex>
      </Flex>
    </Container>
  );
});
