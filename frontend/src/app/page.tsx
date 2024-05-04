"use client"
import {Container, Heading} from "@radix-ui/themes";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {TaskCard} from "entity/Task";

const tasks = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function Page() {
    return <Container flexGrow={"1"} pt={"70px"}>
        <Heading>Рядом с вами:</Heading>
        <Heading>Свежие:</Heading>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {tasks.map(task => <SwiperSlide>
                <TaskCard />
            </SwiperSlide>)}
        </Swiper>
    </Container>
}
