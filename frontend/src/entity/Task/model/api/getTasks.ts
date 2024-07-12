export const getTasks = async () => {
    const response = await fetch('http://backend:9000/tasks', { next: { revalidate: 10 } })
    const tasks = await response.json();

    return { tasks }
}