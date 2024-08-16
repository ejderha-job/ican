import { DropdownMenu, Link } from "@radix-ui/themes";
import { memo } from "react";
import { PersonIcon } from '@radix-ui/react-icons'

export const Auth = memo(() => {
  return <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <PersonIcon />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item>Настройки</DropdownMenu.Item>
      <DropdownMenu.Item>Профиль</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item color="red">Выйти</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  return (
    <div>
      <Link href="/login">Вход</Link> или <Link href="/registr">регистрация</Link>
    </div>
  );
});
