import { subcategoriesAPI } from "./model/subcategories";
import { Tasks } from "./ui/Tasks";

export interface ServerSideComponentProp {
    params: any;
    searchParams: any;
}

export const getTasks = async ({ IDs }) => {
    const response = await fetch(`http://backend:9000/tasks?IDs=${IDs ? IDs : ""}`, { cache: "no-cache" })
    const tasks = await response.json();
    return tasks
}

export default async function Page({ searchParams }: ServerSideComponentProp) {
    subcategoriesAPI.set(searchParams.IDs?.split(","))
    const tasks = await getTasks({ IDs: searchParams.IDs })
    return <Tasks tasks={tasks} />
}
