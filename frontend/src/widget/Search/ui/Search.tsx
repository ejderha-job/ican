import { Box, Button, TextField } from "@radix-ui/themes";
import { memo } from "react";
import SearchIcon from "../assets/search.svg";

export const Search = memo(() => {
  return <Box>
    <TextField.Root>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextField.Slot>
        <Button>Поиск</Button>
      </TextField.Slot>
    </TextField.Root>
  </Box>;
});
