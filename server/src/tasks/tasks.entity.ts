import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Categories} from "../categories/categories.entity";
import {Users} from "../users/users.entity";

@Entity()
export class Tasks {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    price: number;
    @Column()
    description: string;
    @Column()
    name: string;
    @ManyToOne(()=>Users, (Users)=>Users.tasks, {cascade:true})
    user: Users;
    @ManyToMany(()=>Categories,(categories)=>categories.tasks)
    category: Categories
}