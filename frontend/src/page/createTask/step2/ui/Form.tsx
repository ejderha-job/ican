import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import { memo } from "react";

export const Form = memo(() => {
  return (
    <Box>
      <Flex direction={"column"} gap={"2"}>
        <Box>
          <Text>Мне нужно</Text>
          <TextField.Root></TextField.Root>
        </Box>
        <Box>
          <Text>Ваш бюджет</Text>
          <TextField.Root></TextField.Root>
        </Box>
        <Box>
          <Text>Комментарий</Text>
          <TextField.Root></TextField.Root>
        </Box>
      </Flex>
    </Box>
  );
});
