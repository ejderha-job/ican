import {useRouter} from "next/navigation";

export const Logo = () => {
  const router = useRouter()
  const handlerClick = () => {
    router.push("/")
  }
  return <div onClick={handlerClick}>ICAN</div>;
};
