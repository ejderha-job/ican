import {Button, Card, Heading, Separator, Text} from "@radix-ui/themes";
import {memo} from "react";
import Icon from "../../../../assets/task-icon1.svg";

interface TaskCardProps {
    title: string;
    description: string;
    price: number;
    author: string;
}

export const TaskCard = memo((props: TaskCardProps) => {
    const {author, price, description, title} = props
    return <Card>
        <Icon/>
        <Text>{author}</Text>
        <Heading>{title}</Heading>
        <Separator size={"4"}/>
        <Text>{description}</Text>
        <Separator size={"4"}/>
        <Text>{price}</Text>
        <Button>Смотреть</Button>
    </Card>
})