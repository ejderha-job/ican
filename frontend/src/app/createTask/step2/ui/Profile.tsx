import { Button, Flex, Text } from "@radix-ui/themes";
import { memo } from "react";
import Avatar from "../assets/avatar.svg";
import {
  Root,
  Item,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

export const Profile = memo(() => {
  return (
    <Flex direction={"column"} gap={"4"}>
      <Flex gap={"4"} align={"center"}>
        <Avatar />
        <Flex direction={"column"}>
          <Text>Иван Смирнов</Text>
          <Text>Пока нет отзывов</Text>
        </Flex>
      </Flex>
      <Button>Опубликовать</Button>
      <Text>
        Чтобы сделать хорошее описание и получить отклики лучших специалистов:
      </Text>
      <Root type="single">
        <Item value="1">
          <AccordionTrigger>Уточните объем работ</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Во вложении логотипы, которые нам нравятся</li>
              <li>Шаблоны для баннеров приложены к заказу</li>
              <li>Проектная документация приложена к заказ</li>
            </ul>
          </AccordionContent>
        </Item>
        <Item value="2">
          <AccordionTrigger>
            Прикладывайте материалы для работы
          </AccordionTrigger>
          <AccordionContent>content2</AccordionContent>
        </Item>
        <Item value="3">
          <AccordionTrigger>
            Как можно точнее опишите ожидаемый результат
          </AccordionTrigger>
          <AccordionContent>content4</AccordionContent>
        </Item>
      </Root>
    </Flex>
  );
});
