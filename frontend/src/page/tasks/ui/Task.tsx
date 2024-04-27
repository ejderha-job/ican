import { Badge, Box, Card, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { memo } from "react";
import Camera from "../assets/camera.svg";

export const Task = memo(() => {
  return (
    <Card>
      <Flex gap={"4"}>
        <Flex flexShrink={"0"}>
            <Camera />
        </Flex>
        <Flex direction={"column"} flexGrow={"1"}>
          <Flex align={"center"} justify={"between"}>
            <Box>
              <Heading>Название услуги</Heading>
              <Flex gap={"4"} align={"center"}>
                Иванов Иван <Separator orientation="vertical" /> 20.12.2022,
                13:00 <Separator orientation="vertical" /> 4,97
              </Flex>
            </Box>
            <Badge>100Р</Badge>
          </Flex>
          <Separator size={"4"}/>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            obcaecati distinctio, ad magni at quod cumque tempora similique
            excepturi delectus ea fugiat ex perspiciatis, sunt facilis
            dignissimos repudiandae illum maiores.
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
});
