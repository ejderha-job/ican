import { Box, Card, Container, Flex, Heading } from "@radix-ui/themes"

export const Task = () => {
    return <Container pt={"70px"}>
        <Flex gap={"6"}>
            <Card>
                <Heading>Написать статью по курсовой</Heading>
                <Card>
                    <Box pb={"14px"}>Что нужно сделать:</Box>
                    <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas tincidunt sem. Etiam congue libero ante, eget egestas nisi facilisis at. Nulla venenatis suscipit libero, ut finibus massa accumsan id. Nam dapibus felis at lectus gravida, sed hendrerit turpis luctus. Quisque mollis congue dui, non hendrerit odio. Phasellus iaculis tempor ultrices. Phasellus enim nibh, ultricies ac libero in, imperdiet pharetra enim. Fusce placerat est tincidunt lobortis vulputate. Fusce at ante luctus, efficitur libero a, suscipit tellus.
                        Integer finibus magna id urna ullamcorper placerat. Phasellus dapibus sapien in lectus ultrices euismod. Curabitur accumsan enim eget leo lobortis, id maximus velit molestie. Maecenas est leo, commodo non leo quis, eleifend hendrerit dui. Donec in gravida purus, sed sollicitudin neque. Curabitur at tellus auctor, lacinia dui id, eleifend mauris. Nam nec justo quis dolor sagittis bibendum. Maecenas finibus nisi non urna sodales ultricies. Proin iaculis ac massa dictum hendrerit. Morbi sapien augue, euismod id cursus nec, elementum in urna. Fusce leo ante, tincidunt vel finibus a, lobortis non mauris. Fusce sit amet lectus ut enim facilisis iaculis. Mauris egestas augue eget massa luctus pulvinar. Vivamus in ipsum sodales, finibus magna pharetra, vulputate elit. Cras semper metus sed purus dictum, sollicitudin lacinia lacus imperdiet. </div>
                </Card>
                slider1
                slider2
            </Card>
            <Box>
                Profile
            </Box>
        </Flex>
    </Container>
}

export default Task