import { getSubcategories } from "./api/getSubcategories";
import { getTasks } from "./api/getTasks";
import { Tasks } from "./ui/Tasks";

export interface ServerSideComponentProp {
    params: any;
    searchParams: any;
}

export default async function Page({ searchParams }: ServerSideComponentProp) {
    const { tasks } = await getTasks({ IDs: searchParams?.IDs })
    const { subcategories } = await getSubcategories()
    const IDs:number[] = searchParams?.IDs?.split(",").map((id:string) => Number(id))
    return <Tasks tasks={tasks} subcategories={subcategories} IDs={IDs} />
}
