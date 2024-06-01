import {Container, Heading} from "@radix-ui/themes";
import {TasksSlider} from "./intro/ui/TasksSlider";
import axios from "axios";

export default async function Intro() {
    const tasks = (await axios.get('http://backend:9000/tasks')).data
    return <Container flexGrow={"1"} pt={"70px"}>
        <Heading>Рядом с вами:</Heading>
        <Heading>Свежие:</Heading>
        <TasksSlider tasks={tasks}/>
    </Container>
}
