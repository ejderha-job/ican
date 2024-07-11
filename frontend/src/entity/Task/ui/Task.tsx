'use client'
import {TaskSecondary} from "./TaskSecondary";
import {TaskPrimary} from "./TaskPrimary";
import {TaskProps} from "../model/type/Task";

interface ITaskProps {
    type:"primary"|"secondary",
    task:TaskProps['props']
}

export const Task = (props:ITaskProps) => {
    const {type, task} = props
    if (type === "secondary") {
        return <TaskSecondary {...task} />
    }
    return <TaskPrimary {...task} />
}