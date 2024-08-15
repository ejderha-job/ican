"use client"
import { Header } from "./Header";
import { Container, Flex } from "@radix-ui/themes";
import { TasksList } from "./TasksList";
import { SubcategoriesFilter } from "entity/Subcategories";
import { SortBy } from "./SortBy";
import { putSubcategories } from "../model/subcategories";

interface TasksProps {
  tasks: Array<any>
  subcategories: Array<any>
  IDs: number[]
}

export const Tasks = ({ tasks, subcategories, IDs }:TasksProps) => {
  putSubcategories(IDs)
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
