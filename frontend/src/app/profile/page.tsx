import { Avatar, Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import { Feedback } from "entity/Feedback"

export default async () => {
    return <Container pt={"70px"} flexGrow={"1"}>
        <Flex gap={"7"} direction={"column"}>
            <Flex gap={"5"}>
                <Avatar
                    radius="full"
                    size="8"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                />
                <Flex align={"center"} direction={"column"} justify={"center"}>
                    <Text>Иван Смирнов</Text>
                    <Text>39 лет, Тбилиси</Text>
                </Flex>
            </Flex>
            <Grid columns="repeat(3, 220px)" rows="30px" width="auto">
                <Box height="23px">
                    Оценка 4,97
                </Box>
                <Box height="23px">
                    20 отзывов
                </Box>
                <Box height="23px">
                    2 задания
                </Box>
                <Box height="23px">
                    выполнил
                </Box>
                <Box height="23px">
                    выполнил
                </Box>
                <Box height="23px">
                    создал
                </Box>
            </Grid>
            <Flex direction={"column"}>
                <Heading>О себе</Heading>
                <Box>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed elit felis, feugiat quis leo vitae, lobortis ultricies elit.
                    Aliquam ac nisl laoreet, faucibus mauris ut, interdum ex.
                    Vestibulum ut lobortis purus, in tristique ipsum.
                    Fusce pellentesque suscipit felis et rutrum.
                    Quisque ligula massa, sagittis vitae dolor eu, tincidunt dapibus justo.
                    Cras venenatis purus ex, non varius erat semper vulputate.
                    Proin sapien nibh, fringilla id congue dictum, pharetra fermentum erat.
                    Proin in porttitor purus. Aliquam aliquet mollis nisl, vel placerat mi consequat sed.
                    Duis vel ipsum a ante ornare iaculis tempus id libero.
                    Nunc tellus massa, egestas quis nisl eget, imperdiet ullamcorper ex.
                    Integer scelerisque, justo ut varius pharetra, lectus risus iaculis lacus, vel blandit tellus mauris non turpis.
                    Etiam id mauris ut massa faucibus condimentum sit amet et quam. Proin luctus posuere nisl vel sollicitudin.
                    Nam eget orci sapien.
                </Box>
            </Flex>
            <Flex align={"center"} justify={"between"}>
                <Heading>
                    Средняя оценка 4.8
                </Heading>
                <Box>2 отзыва</Box>
            </Flex>
            <Feedback />
        </Flex>
    </Container>
}