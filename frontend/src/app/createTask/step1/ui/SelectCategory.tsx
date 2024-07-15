"use client"
import { memo } from "react";
import { BreadCrumbs } from "widget/BreadCrumbs/BreadCrumbs";
import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Separator,
    Text,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useSubcategories } from "../model/hooks/useSubcategories";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Category } from "entity/Category/ui/Category";

export const SelectCategory = memo(() => {
    const { push } = useRouter();
    const { subcategories, categoriesList, handlerSelectCategory, isLoading } = useSubcategories()

    const handlerSelectSubcategory = (subCategoryId: number) => () => {
        push(`/createTask/step2/${subCategoryId}`);
    };

    return (
        <Container flexGrow={"1"} pt={"70px"}>
            <Flex direction={"column"} gap={"8"}>
                <BreadCrumbs />
                <Flex direction={"column"}>
                    <Heading>Выберите категорию задания</Heading>
                    <Text>Ищите работу? Просмотр заданий</Text>
                </Flex>
                <Grid columns="3" gap="3" rows="3">
                    {isLoading ? new Array(10).fill("").map(el => <Skeleton width={300} height={75} />) : categoriesList?.map((category, index) => (
                        <Box key={index} onClick={handlerSelectCategory(category.id)}>
                            <Category name={category.name} />
                        </Box>
                    ))}
                </Grid>
            </Flex>
            <Box>
                <Heading mb={"6"}>Курьерские услуги</Heading>
                <Separator size={"4"} />
            </Box>
            <Grid columns="3" gap="3" rows="repeat(2, 64px)" pt={"4"}>
                {subcategories?.map((el) => (
                    <Text onClick={handlerSelectSubcategory(el.id)} key={el.id}>{el.title}</Text>
                ))}
            </Grid>
        </Container>
    );
});
