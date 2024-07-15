import { subcategoriesAPI } from "./model/subcategories";
import { Tasks } from "./ui/Tasks";

export interface ServerSideComponentProp {
    params: any;
    searchParams: any;
}

export default function Page({ searchParams }: ServerSideComponentProp) {
    subcategoriesAPI.set(searchParams.IDs?.split(","))
    return <Tasks />
}
