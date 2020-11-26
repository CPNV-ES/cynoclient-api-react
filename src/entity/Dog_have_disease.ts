import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'diseases'})
export class Disease {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "int"
    })  
    id_dog: number
    @Column({
        type: "int"
    })  
    id_disease: number
}