import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { memo } from "react";
import TaskIcon from "../assets/task-icon.svg";

interface TaskCardProps {
  name:string
}

export const TaskCard = memo(({name}: TaskCardProps) => {
  return (
      <Card style={{height:"100%"}}>
        <Flex gap={"2"}>
          <Box flexGrow={"0"}>
            <TaskIcon />
          </Box>
          <Box>
            <Heading>{name}</Heading>
            <Text>Подробнее</Text>
          </Box>
        </Flex>
      </Card>
  );
});
