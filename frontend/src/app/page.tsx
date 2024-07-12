import { Container } from "@radix-ui/themes";
import { AccordionDemo } from "./intro/ui/Accordion/Accordion";
import { getTasks } from "entity/Task/model/api/getTasks";
import { Content } from "./intro/ui/Header/Header";

interface ServerProps {
    params: any
    searchParams: {
        filter: "near" | "fresh"
    }
};

export default async function Intro({ searchParams }: ServerProps) {
    const { tasks } = await getTasks()

    return <Container flexGrow={"1"} pt={"70px"}>
        <Content tasks={tasks} filter={searchParams.filter} />
        <AccordionDemo />
    </Container>
}
