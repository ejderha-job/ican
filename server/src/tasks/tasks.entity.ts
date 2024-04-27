import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Categories} from "../categories/categories.entity";

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
    @ManyToMany(()=>Categories,(categories)=>categories.tasks)
    category: Categories
}