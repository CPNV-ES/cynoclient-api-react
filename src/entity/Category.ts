import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn({
        type: "int",
    }) 
    id: number;
    @Column({
        type: "varchar",
        length: 150
    }) 
    noun: string;
}