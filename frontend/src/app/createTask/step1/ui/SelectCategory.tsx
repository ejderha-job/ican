"use client"
import {memo, useEffect, useState} from "react";
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
import { TaskCard } from "./TaskCard";
import {redirect} from "next/navigation";
import axios from "axios";

const subItems = [
  { text: "Услуги пешего курьера", id: 2 },
  { text: "Услуги курьера на легковом авто", id: 3 },
  { text: "Купить и доставить", id: 4 },
  { text: "Срочная доставка", id: 5 },
  { text: "Доставка продуктов", id: 6 },
  { text: "Доставка еды из ресторанов", id: 1 },
];

export const SelectCategory = memo(() => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:9000/categories").then(data => setCategories(data.data))
  },[])
  const handlerSelectCategory = (subCategoryId: number) => () => {
    redirect(`/create-task/${subCategoryId}`);
  };
  console.log(categories)

  return (
      <Container flexGrow={"1"} pt={"70px"}>
        <Flex direction={"column"} gap={"8"}>
          <BreadCrumbs />
          <Flex direction={"column"}>
            <Heading>Выберите категорию задания</Heading>
            <Text>Ищите работу? Просмотр заданий</Text>
          </Flex>
          <Grid columns="3" gap="3" rows="3">
            {categories.map((item, index) => (
              <TaskCard key={index}/>
            ))}
          </Grid>
        </Flex>
        <Box>
          <Heading mb={"6"}>Курьерские услуги</Heading>
          <Separator size={"4"} />
        </Box>
        <Grid columns="3" gap="3" rows="repeat(2, 64px)" pt={"4"}>
          {subItems.map((el) => (
            <Text onClick={handlerSelectCategory(el.id)} key={el.id}>{el.text}</Text>
          ))}
        </Grid>
      </Container>
  );
});
