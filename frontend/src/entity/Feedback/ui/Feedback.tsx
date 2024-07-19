import { Avatar, Text, Button, Card, Flex, Separator, Box } from "@radix-ui/themes"

export const Feedback = () => {
    return <Card>
        <Flex justify={"between"} pb={"4"}>
            <Avatar radius="full" fallback={""} src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
            <Button>210</Button>
        </Flex>
        <Separator size={"4"} />
        <Box>
            <Text weight={"bold"}>Задание «Курсы по физической культуре» выполнено</Text>
        </Box>
        <Box>
            <Text>Хороший заказчик. Задания сформулированы четко. Сроки определены, все документы дополнительные для работы предоставлены. Рекомендую</Text>
        </Box>
    </Card>
}