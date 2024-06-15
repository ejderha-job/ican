"use server"
import { Flex } from "@radix-ui/themes";
import {Task} from "../../../entity/Task";
import axios from "axios";

export async function TasksList() {
  const tasks = (await axios.get("http://backend:9000/tasks")).data
  return (<Flex direction={"column"} gap={"4"}>
      {tasks.map((task, index) => (
        <Task type={"secondary"} key={index}/>
      ))}
    </Flex>
  );
}
