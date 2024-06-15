"use client"
import { Link } from "@radix-ui/themes";
import { memo } from "react";
import {useUnit} from "effector-react";
import {token} from "../Profile";

export const Auth = memo(() => {
  const logged = useUnit(token)
  if (logged) {
    return <div>Profile</div>;
  }
  return (
    <div>
      <Link href="/login">Вход</Link> или <Link href="/registr">регистрация</Link>
    </div>
  );
});
