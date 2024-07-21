import { subcategoriesAPI } from "./model/subcategories";
import { Tasks } from "./ui/Tasks";

export interface ServerSideComponentProp {
    params: any;
    searchParams: any;
}

interface getTasksProps {
    IDs?: number[]
}

export const getSubcategories = async () => {
    const response = await fetch("http://backend:9000/categories", { next: { revalidate: 10 } })
    const subcategories = await response.json()
    return { subcategories }
  }

export const getTasks = async ({ IDs }: getTasksProps) => {
    const response = await fetch(`http://backend:9000/tasks?IDs=${IDs ? IDs : ""}`)
    const tasks = await response.json();
    return tasks
}

export default async function Page({ searchParams }: ServerSideComponentProp) {
    subcategoriesAPI.set(searchParams?.IDs?.split(","))
    const tasks = await getTasks({ IDs: searchParams?.IDs })
    const { subcategories } = await getSubcategories()
    return <Tasks tasks={tasks} subcategories={subcategories} />
}
