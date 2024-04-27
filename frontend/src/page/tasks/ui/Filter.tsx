import { Box, Checkbox, Flex, Text } from "@radix-ui/themes";
import { memo, useState } from "react";
import Collapse from "../assets/collapse.svg";

const categories = [
  {
    title: "Курьерские услуги",
    items: [
      {
        title: "Услуги пешего курьера",
        checked: false,
      },
      {
        title: "Услуги курьера на легковом авто",
        checked: false,
      },
      {
        title: "Купить и доставить",
        checked: false,
      },
      {
        title: "Срочная доставка",
        checked: false,
      },
    ],
  },
  {
    title: "Курьерские услуги",
    items: [
      {
        title: "Услуги пешего курьера",
        checked: false,
      },
      {
        title: "Услуги курьера на легковом авто",
        checked: false,
      },
      {
        title: "Купить и доставить",
        checked: false,
      },
      {
        title: "Срочная доставка",
        checked: false,
      },
    ],
  },
  {
    title: "Курьерские услуги",
    items: [
      {
        title: "Услуги пешего курьера",
        checked: false,
      },
      {
        title: "Услуги курьера на легковом авто",
        checked: false,
      },
      {
        title: "Купить и доставить",
        checked: false,
      },
      {
        title: "Срочная доставка",
        checked: false,
      },
    ],
  },
];

interface TItem {
  title: string;
  checked: boolean;
}

interface ItemProps extends TItem {}

const Item = memo(({ title, checked }: ItemProps) => {
  return (
    <Text as="label">
      <Flex gap={"4"} align={"center"}>
        <Checkbox size="3" checked={checked} />
        <Text>{title}</Text>
      </Flex>
    </Text>
  );
});

interface CategoryProps {
  title: string;
  items: Array<TItem>;
}

const Category = memo((props: CategoryProps) => {
  const { items, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const collapse = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Flex direction={"column"}>
      <Flex gap={"4"}>
        <Box onClick={collapse}>
          <Collapse />
        </Box>
        <Item title={title} checked={items.every((item) => item.checked)} />
      </Flex>
      <Box>{isOpen && items.map((item) => <Item {...item} />)}</Box>
    </Flex>
  );
});

export const Filter = memo(() => {
  return (
    <Box width={"400px"}>
      {categories.map((category) => (
        <Category items={category.items} title={category.title} />
      ))}
    </Box>
  );
});
