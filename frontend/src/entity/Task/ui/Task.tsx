'use client'
import {TaskSecondary} from "./TaskSecondary";
import {TaskPrimary} from "./TaskPrimary";

interface TaskProps {
    type:"primary"|"secondary"
}

export const Task = ({type}:TaskProps) => {
    if (type === "secondary") {
        return <TaskSecondary />
    }
    return <TaskPrimary />
}