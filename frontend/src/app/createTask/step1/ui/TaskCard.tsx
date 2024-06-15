import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { memo } from "react";
import TaskIcon from "../assets/task-icon.svg";

interface TaskCardProps {
}

export const TaskCard = memo((props: TaskCardProps) => {
  return (
    <Box>
      <Card>
        <Flex gap={"2"}>
          <TaskIcon />
          <Box>
            <Heading>Курьерские услуги</Heading>
            <Text>Подробнее</Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
});
