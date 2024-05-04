import { Flex } from "@radix-ui/themes";
import { memo } from "react";
import { TaskLine } from "../../../entity/Task/ui/TaskLine";

const tasks = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

export const TasksList = memo(() => {
  return (
    <Flex direction={"column"} gap={"4"}>
      {tasks.map((task) => (
        <TaskLine />
      ))}
    </Flex>
  );
});
