"use client"
import { Box, Heading } from "@radix-ui/themes"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TaskPrimary } from "entity/Task/ui/TaskPrimary";

export const Last = () => {
    return <Box mb={"9"}>
        <Heading mb={"3"}>Последние задания</Heading>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <TaskPrimary name={''} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero eget sagittis pulvinar. Donec sed mauris at sapien sagittis euismod et sed magna. Sed hendrerit, tortor ac iaculis fermentum, ante nisi fringilla ipsum, ac commodo nulla erat cursus justo. Curabitur a elit quis mi dictum maximus ut fringilla diam. Nullam eget sodales turpis. Nulla quis feugiat risus. Integer at nunc mollis, elementum lorem non, tristique enim. Nam ex libero, semper non quam a, cursus suscipit leo. Aliquam dignissim cursus libero ut tempus. Nullam fermentum sapien eu tempus feugiat. Morbi orci erat, malesuada in elit interdum, mattis venenatis purus. Ut consequat magna sed orci rutrum, et fermentum lacus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat euismod turpis id elementum. Nam est ante, efficitur aliquet quam vel, tempus interdum nunc. '} price={122} />
            </SwiperSlide>
            <SwiperSlide>
                <TaskPrimary name={''} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero eget sagittis pulvinar. Donec sed mauris at sapien sagittis euismod et sed magna. Sed hendrerit, tortor ac iaculis fermentum, ante nisi fringilla ipsum, ac commodo nulla erat cursus justo. Curabitur a elit quis mi dictum maximus ut fringilla diam. Nullam eget sodales turpis. Nulla quis feugiat risus. Integer at nunc mollis, elementum lorem non, tristique enim. Nam ex libero, semper non quam a, cursus suscipit leo. Aliquam dignissim cursus libero ut tempus. Nullam fermentum sapien eu tempus feugiat. Morbi orci erat, malesuada in elit interdum, mattis venenatis purus. Ut consequat magna sed orci rutrum, et fermentum lacus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat euismod turpis id elementum. Nam est ante, efficitur aliquet quam vel, tempus interdum nunc. '} price={122} />
            </SwiperSlide>
            <SwiperSlide>
                <TaskPrimary name={''} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero eget sagittis pulvinar. Donec sed mauris at sapien sagittis euismod et sed magna. Sed hendrerit, tortor ac iaculis fermentum, ante nisi fringilla ipsum, ac commodo nulla erat cursus justo. Curabitur a elit quis mi dictum maximus ut fringilla diam. Nullam eget sodales turpis. Nulla quis feugiat risus. Integer at nunc mollis, elementum lorem non, tristique enim. Nam ex libero, semper non quam a, cursus suscipit leo. Aliquam dignissim cursus libero ut tempus. Nullam fermentum sapien eu tempus feugiat. Morbi orci erat, malesuada in elit interdum, mattis venenatis purus. Ut consequat magna sed orci rutrum, et fermentum lacus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat euismod turpis id elementum. Nam est ante, efficitur aliquet quam vel, tempus interdum nunc. '} price={122} />
            </SwiperSlide>
            <SwiperSlide>
                <TaskPrimary name={''} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero eget sagittis pulvinar. Donec sed mauris at sapien sagittis euismod et sed magna. Sed hendrerit, tortor ac iaculis fermentum, ante nisi fringilla ipsum, ac commodo nulla erat cursus justo. Curabitur a elit quis mi dictum maximus ut fringilla diam. Nullam eget sodales turpis. Nulla quis feugiat risus. Integer at nunc mollis, elementum lorem non, tristique enim. Nam ex libero, semper non quam a, cursus suscipit leo. Aliquam dignissim cursus libero ut tempus. Nullam fermentum sapien eu tempus feugiat. Morbi orci erat, malesuada in elit interdum, mattis venenatis purus. Ut consequat magna sed orci rutrum, et fermentum lacus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat euismod turpis id elementum. Nam est ante, efficitur aliquet quam vel, tempus interdum nunc. '} price={122} />
            </SwiperSlide>
            <SwiperSlide>
                <TaskPrimary name={''} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis libero eget sagittis pulvinar. Donec sed mauris at sapien sagittis euismod et sed magna. Sed hendrerit, tortor ac iaculis fermentum, ante nisi fringilla ipsum, ac commodo nulla erat cursus justo. Curabitur a elit quis mi dictum maximus ut fringilla diam. Nullam eget sodales turpis. Nulla quis feugiat risus. Integer at nunc mollis, elementum lorem non, tristique enim. Nam ex libero, semper non quam a, cursus suscipit leo. Aliquam dignissim cursus libero ut tempus. Nullam fermentum sapien eu tempus feugiat. Morbi orci erat, malesuada in elit interdum, mattis venenatis purus. Ut consequat magna sed orci rutrum, et fermentum lacus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat euismod turpis id elementum. Nam est ante, efficitur aliquet quam vel, tempus interdum nunc. '} price={122} />
            </SwiperSlide>
        </Swiper>
    </Box>
}