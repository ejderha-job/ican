import { Link } from "@radix-ui/themes";
import { memo } from "react";

interface AuthProps {
  logged: boolean;
}

export const Auth = memo((props: AuthProps) => {
  const { logged } = props;
  if (logged) {
    return <div>Auth</div>;
  }
  return (
    <div>
      <Link href="/login">Вход</Link> или <Link href="/register">регистрация</Link>
    </div>
  );
});
