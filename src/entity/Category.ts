import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Breed} from "./Breed"

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
    @OneToMany(() => Breed, breed => breed.category)
    breeds: Breed[];
}