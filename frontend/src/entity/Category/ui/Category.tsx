import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { memo } from "react";
import s from "./Category.module.css";

interface CategoryProps {
  name: string
}

export const Category = memo(({ name }: CategoryProps) => {
  return (
    <Card className={s.Category}>
      <Flex gap={"2"}>
        <Box flexGrow={"0"}>
          <img src="/task-icon.svg" alt="" />
        </Box>
        <Box>
          <Heading>{name}</Heading>
          <Text>Подробнее</Text>
        </Box>
      </Flex>
    </Card>
  );
});
