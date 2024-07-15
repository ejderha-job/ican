"use client"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { memo } from 'react';
import { TaskPrimary } from 'entity/Task/ui/TaskPrimary';

interface Tasks {
    tasks: Array<any>
}

export const TasksSlider = memo((props: Tasks) => {
    const { tasks } = props
    return <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {tasks.map((task, index) => <SwiperSlide key={index}>
            <TaskPrimary {...task.props} />
        </SwiperSlide>)}
    </Swiper>
})