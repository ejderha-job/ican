import { Header } from "./Header";
import { Container, Flex, Text, Select } from "@radix-ui/themes";
import { TasksList } from "./TasksList";
import { SubcategoriesFilter } from "entity/Subcategories/ui/SubcategoriesFilter/SubcategoriesFilter";

export const getSubcategories = async () => {
  const response = await fetch("http://backend:9000/categories", { next: { revalidate: 10 } })
  const subcategories = await response.json()
  return { subcategories }
}

const SortBy = () => {
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

export const Tasks = async ({tasks}) => {
  const { subcategories } = await getSubcategories()
  return (
    <Flex direction={"column"} gap={"4"} flexGrow={"1"}>
      <Header />
      <Container flexGrow={"1"}>
        <Flex gap={"4"}>
          <Flex direction={"column"} gap={"4"}>
            <SortBy />
            <TasksList tasks={tasks} />
          </Flex>
          <SubcategoriesFilter subcategories={subcategories} />
        </Flex>
      </Container>
    </Flex>
  );
}
