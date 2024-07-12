import {Avatar, Box, Button, Card, Flex, Separator, Strong, Text} from "@radix-ui/themes";
import {useRouter} from "next/navigation";

export const TaskPrimary = (props) => {
    const router = useRouter()
    const onClick = () => {
        router.push("/task/10");
    }
    return <Box maxWidth="400px" onClick={onClick}>
        <Card>
            <Flex direction="column" gap={"1"}>
                <Flex gap={"4"} align={"center"} justify={"between"}>
                    <Flex direction={"column"}>
                        <Text size={"2"} color={"gray"} weight={"light"}>Кузнецов Сергей</Text>
                        <Text size={"4"} weight={"bold"}>{props.name}</Text>
                    </Flex>
                    <Avatar size="5"
                            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                            radius="full"
                            fallback={"T"}
                    />
                </Flex>
                <Separator size={"4"} />
                <Box>
                    <Text>
                        {props.description}
                    </Text>
                </Box>
                <Separator size={"4"} />
                <Flex justify={"between"} align={"center"} gap={"4"}>
                    <Strong>{props.price}</Strong>
                    <Button>Подробнее</Button>
                </Flex>
            </Flex>
        </Card>
    </Box>
}