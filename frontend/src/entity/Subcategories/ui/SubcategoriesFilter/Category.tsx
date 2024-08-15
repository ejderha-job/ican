import { Box, ChevronDownIcon, Flex } from "@radix-ui/themes";
import { memo, useCallback, useState } from "react";
import { Item } from "./Subcategory";
import { SubcategoriesType } from "entity/Subcategories/model/type/subcategories";

interface CategoryProps {
  title: string;
  items: Array<SubcategoriesType>;
}

export const Category = memo((props: CategoryProps) => {
  const { items, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  
  const collapse = useCallback(() => {
    setIsOpen((prev) => !prev);
  },[])

  return (
    <Flex direction={"column"}>
      <Flex gap={"4"} align={"center"}>
        <Box onClick={collapse}>
          <ChevronDownIcon />
        </Box>
        <Item title={title} IDs={items.map(el => el.id)} />
      </Flex>
      <Box>{isOpen && items.map((item, index) => <Item key={index} IDs={[item.id]} title={item.title} />)}</Box>
    </Flex>
  );
});