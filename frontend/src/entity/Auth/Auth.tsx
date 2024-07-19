"use client"
import { DropdownMenu, Link } from "@radix-ui/themes";
import { memo } from "react";
import { useUnit } from "effector-react";
import { token } from "../Profile";
import { PersonIcon } from '@radix-ui/react-icons'
import { useRouter } from "next/navigation";

export const Auth = memo(() => {
  const logged = useUnit(token)
  const router = useRouter()
  // onClick={() => { router.push("/profile") }}
  const onLogout = () => {
    
  }
  if (logged) {
    return <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <PersonIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Настройки</DropdownMenu.Item>
        <DropdownMenu.Item>Профиль</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red" onClick={onLogout}>Выйти</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  }
  return (
    <div>
      <Link href="/login">Вход</Link> или <Link href="/registr">регистрация</Link>
    </div>
  );
});
