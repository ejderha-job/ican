"use server"
import { Flex } from "@radix-ui/themes";
import { TaskSecondary } from "entity/Task/ui/TaskSecondary";

export async function TasksList({ searchParams }) {
  const response = await fetch(`http://backend:9000/tasks${searchParams ? searchParams : ""}`, { next: { revalidate: 1 } })
  const tasks = await response.json();
  return (<Flex direction={"column"} gap={"4"}>
    {tasks.length && tasks.map((task, index) => (
      <TaskSecondary key={index} {...task?.props} />
    ))}
  </Flex>
  );
}
