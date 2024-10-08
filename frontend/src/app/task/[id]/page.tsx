"use client"
import { Box, Card, Container, Flex, Heading, Inset, Separator, Strong, Text } from "@radix-ui/themes"
import { Profile } from "entity/Profile/ui/Profile"
import 'swiper/css';
import { Same } from "./Same";
import { Last } from "./Last";
import { BreadCrumbs } from "widget";

export const Task = () => {
    return <Container pt={"70px"}>
        <Box mb={"4"}>
            <BreadCrumbs />
        </Box>
        <Flex gap={"6"} mb={"9"}>
            <Card>
                <Inset side={"top"}>
                    <Box p={"3"}>
                        <Heading>Написать статью по курсовой</Heading>
                    </Box>
                    <Separator size={"4"} />
                    <Box p={"3"}>
                        Активность: 44 просмотров
                    </Box>
                    <Separator size={"4"} />
                </Inset>
                <Box>
                    <Strong>Что нужно сделать:</Strong>
                </Box>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas tincidunt sem.
                    Etiam congue libero ante, eget egestas nisi facilisis at. Nulla venenatis suscipit libero, ut finibus massa accumsan id.
                    Nam dapibus felis at lectus gravida, sed hendrerit turpis luctus. Quisque mollis congue dui, non hendrerit odio. Phasellus iaculis tempor ultrices.
                    Phasellus enim nibh, ultricies ac libero in, imperdiet pharetra enim. Fusce placerat est tincidunt lobortis vulputate.
                    Fusce at ante luctus, efficitur libero a, suscipit tellus.
                    Integer finibus magna id urna ullamcorper placerat. Phasellus dapibus sapien in lectus ultrices euismod.
                    Curabitur accumsan enim eget leo lobortis, id maximus velit molestie. Maecenas est leo, commodo non leo quis, eleifend hendrerit dui.
                    Donec in gravida purus, sed sollicitudin neque. Curabitur at tellus auctor, lacinia dui id, eleifend mauris. Nam nec justo quis dolor sagittis bibendum.
                    Maecenas finibus nisi non urna sodales ultricies. Proin iaculis ac massa dictum hendrerit. Morbi sapien augue, euismod id cursus nec, elementum in urna.
                    Fusce leo ante, tincidunt vel finibus a, lobortis non mauris. Fusce sit amet lectus ut enim facilisis iaculis. Mauris egestas augue eget massa luctus pulvinar.
                    Vivamus in ipsum sodales, finibus magna pharetra, vulputate elit. Cras semper metus sed purus dictum, sollicitudin lacinia lacus imperdiet.
                </Text>
            </Card>
            <Profile />
        </Flex>
        <Flex direction={"column"}>
            <Last />
            <Same />
        </Flex>
    </Container>
}

export default Task