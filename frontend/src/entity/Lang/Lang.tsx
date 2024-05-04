import {Select} from "@radix-ui/themes";

export const Lang = () => {
  return <Select.Root defaultValue="apple">
    <Select.Trigger />
    <Select.Content>
      <Select.Item value="apple">RU</Select.Item>
      <Select.Item value="orange">EN</Select.Item>
    </Select.Content>
  </Select.Root>;
};
