import { Box, Flex, Text, TextField } from "@radix-ui/themes";
import {forwardRef, memo} from "react";
import {UseFormRegister} from "react-hook-form";

interface Form {
  taskName:string
  taskPrice:number
  taskDescription:string
}

interface FormProps {
  register:UseFormRegister<Form>
}

export const Form = (props:FormProps) => {
  return (
    <Box width={"100%"}>
      <Flex direction={"column"} gap={"2"}>
        <Box>
          <Text>Мне нужно</Text>
          <TextField.Root {...props.register("taskName")}></TextField.Root>
        </Box>
        <Box>
          <Text>Ваш бюджет</Text>
          <TextField.Root {...props.register("taskPrice")}></TextField.Root>
        </Box>
        <Box>
          <Text>Комментарий</Text>
          <TextField.Root {...props.register("taskDescription")}></TextField.Root>
        </Box>
      </Flex>
    </Box>
  );
}
