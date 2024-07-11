"use client"
import {Container, Flex, Heading} from "@radix-ui/themes";
import {memo} from "react";
import {BreadCrumbs} from "../../../../widget/BreadCrumbs/BreadCrumbs";
import {Profile} from "./Profile";
import {Form} from "./Form";
import {useForm} from "react-hook-form";
import axios from "axios";

interface Form {
    taskName:string
    taskPrice:number
    taskDescription:string
}

export const CreateTask = memo(() => {
    const {register, handleSubmit} = useForm<Form>()
    const onSubmit = async (values:Form) => {
        await axios.post("http://localhost:9000/tasks", {
            categoryID:5,
            task: {
                name: values.taskName,
                price: values.taskPrice,
                description: values.taskDescription
            }
        }, {headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
    }

    return (
        <Container pt={"70px"}>
            <Flex direction={"column"} gap={"8"}>
                <BreadCrumbs/>
                <Heading>Создать задание</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex gap={"8"} justify={"between"}>
                        <Form register={register}/>
                        <Profile />
                    </Flex>
                </form>
            </Flex>
        </Container>
    );
});
