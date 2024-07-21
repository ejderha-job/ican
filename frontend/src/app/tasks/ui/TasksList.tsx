'use client'
import { Flex } from "@radix-ui/themes";
import { TaskSecondary } from "entity/Task/ui/TaskSecondary";

interface TasksListProps {
  tasks: Array<any>
}

export const TasksList = ({ tasks }: TasksListProps) => {
  return (<Flex direction={"column"} gap={"4"}>
    {tasks.length && tasks.map((task, index) => (
      <TaskSecondary key={index} {...task?.props} />
    ))}
  </Flex>
  );
}
