import { Avatar, Flex, Separator, Text, Button, Box } from "@radix-ui/themes"

export const Profile = () => {
    return <Flex direction={"column"} flexShrink={"0"} justify={"between"} py={"9"}>
        <Text>Задание № 11130064</Text>
        <Flex align={"center"} gap={"4"}>
            <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
            />
            <Text>Кузнецов Сергей Максимович</Text>
        </Flex>
        <Separator size={"4"} />
        <Text>Создано 1 минуту назад</Text>
        <Text>Категория:Репетиторы и обучение</Text>
        <Flex direction={"column"}>
            <Text>Бюджет</Text>
            <Text>Небольшой — до 100₾</Text>
        </Flex>
        <Button>Откликнуться</Button>
    </Flex>
}