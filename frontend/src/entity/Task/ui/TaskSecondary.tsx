import {Avatar, Box, Button, Card, Flex, Separator, Strong, Text} from "@radix-ui/themes";

export const TaskSecondary = (props) => {
    const onClick = () => {
    }
    return <Card onClick={onClick}>
            <Flex gap={"4"}>
                <Avatar size="5"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="full"
                        fallback={"T"}
                />
                <Flex direction={"column"}>
                    <Flex align={"center"} justify={"between"}>
                        <Flex direction={"column"}>
                            <Text size={"2"} color={"gray"} weight={"light"}>Кузнецов Сергей</Text>
                            <Text size={"4"} weight={"bold"}>{props.name}</Text>
                        </Flex>
                        <Button>{props.price}</Button>
                    </Flex>
                    <Separator size={"4"}/>
                    <Text>
                        {props.description}
                    </Text>
                </Flex>
            </Flex>
        </Card>
}