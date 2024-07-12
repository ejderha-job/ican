"use client"
import { Box, Flex, Heading } from "@radix-ui/themes";
import "./index.css"
import { TasksSlider } from "../TasksSlider";
import { useRouter } from "next/navigation";

export const Content = ({ tasks, filter }) => {
    const { push } = useRouter();

    const handlerClick = (filter) => {
        push(`?filter=${filter}`);
    }

    const onNearClick = () => handlerClick("near")

    const onFreshClick = () => handlerClick("fresh")

    return <Box>
        <Flex gap={"6"} mb={"6"}>
            <Heading onClick={onNearClick} className={filter !== "fresh" ? "active" : "default"}>Рядом с вами</Heading>
            <Heading onClick={onFreshClick} className={filter === "fresh" ? "active" : "default"}>Свежие</Heading>
        </Flex>
        <TasksSlider tasks={tasks} />
    </Box>
}