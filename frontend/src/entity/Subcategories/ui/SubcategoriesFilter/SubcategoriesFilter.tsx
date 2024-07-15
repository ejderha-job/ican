'use client'
import { Box } from "@radix-ui/themes";
import { memo } from "react";
import { Category } from "./Category";

interface SubcategoriesFilterProps {
  subcategories: Array<any>
}

export const SubcategoriesFilter = memo(({ subcategories }: SubcategoriesFilterProps) => {
  return (
    <Box width={"400px"}>
      {subcategories.map((category, index) => (
        <Category items={category.subcategories} title={category.name} key={index} />
      ))}
    </Box>
  );
});
