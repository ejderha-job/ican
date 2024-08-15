"use client"
import { Flex, Text, Select } from "@radix-ui/themes";

export const SortBy = () => {
    return <Flex align={"center"} gap={"4"}>
      <Text>Сортировать по:</Text>
      <Select.Root defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  }