import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Categories} from "../categories/categories.entity";
import {Users} from "../users/users.entity";
import {taskDTO} from "./dto/tasks.dto";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=>Users, (Users)=>Users.tasks, {cascade:true})
    user: Users;
    @ManyToMany(()=>Categories,(categories)=>categories.tasks)
    category: Categories
    @Column("simple-json")
    props: taskDTO
}