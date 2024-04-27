import { Flex } from "@radix-ui/themes";
import { memo } from "react";
import { Task } from "./Task";

const tasks = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

export const TasksList = memo(() => {
  return (
    <Flex direction={"column"} gap={"4"}>
      {tasks.map((task) => (
        <Task />
      ))}
    </Flex>
  );
});
