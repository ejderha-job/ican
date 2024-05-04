"use client"
import { memo } from "react";
import { Header } from "./Header";
import { Container, Flex, Text, Select } from "@radix-ui/themes";
import { TasksList } from "./TasksList";
import { Filter } from "./Filter";

export const Tasks = memo(() => {
  return (
    <Flex direction={"column"} gap={"4"} flexGrow={"1"}>
      <Header />
      <Container flexGrow={"1"}>
        <Flex gap={"4"}>
          <Flex direction={"column"} gap={"4"}>
            <Flex align={"center"} gap={"4"}>
              <Text>Сортировать по:</Text>
              <Select.Root defaultValue="apple">
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="orange">Orange</Select.Item>
                  <Select.Item value="apple">Apple</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
            <TasksList />
          </Flex>
          <Filter />
        </Flex>
      </Container>
    </Flex>
  );
});
