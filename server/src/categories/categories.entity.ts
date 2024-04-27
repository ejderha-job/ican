import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Tasks} from "../tasks/tasks.entity";

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => Tasks, (task)=>task.category)
    tasks: Array<Tasks>;
}