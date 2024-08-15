interface getTasksProps {
    IDs?: number[]
}

export const getTasks = async ({ IDs }: getTasksProps) => {
    const response = await fetch(`http://backend:9000/tasks?IDs=${IDs ? IDs : ""}`)
    const tasks = await response.json();
    return { tasks }
}
