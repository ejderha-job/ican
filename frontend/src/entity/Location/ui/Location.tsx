import {memo} from "react";
import {Select} from "@radix-ui/themes";

export const Location = memo(() => {
    return <Select.Root defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
            <Select.Item value="apple">Москва</Select.Item>
            <Select.Item value="orange">СПБ</Select.Item>
        </Select.Content>
    </Select.Root>
})