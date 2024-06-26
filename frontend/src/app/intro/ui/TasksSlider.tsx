"use client"
import 'swiper/css';
import {Task} from "../../../entity/Task";
import { Swiper, SwiperSlide } from 'swiper/react';

interface Tasks {
    tasks: Array<any>
}

export const TasksSlider = (props:Tasks) => {
    const {tasks} = props
    return <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {tasks.map((task, index) => <SwiperSlide key={index}>
            <Task type={"primary"}/>
        </SwiperSlide>)}
    </Swiper>
}