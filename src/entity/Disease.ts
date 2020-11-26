import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'diseases'})
export class Disease {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "varchar",
        length: 45
    })  
    noun: string
    @Column({
        type: "varchar",
        length: 2500
    })  
    description: string
    @Column({
        type: "varchar",
        length: 1000
    })  
    symptoms: string
    @Column({
        type: "varchar",
        length: 2000
    })  
    preventive: string
    @Column({
        type: "varchar",
        length: 2000
    })  
    curative: string
    @Column({
        type: "tinyint",
        length: 1
    })  
    vaccinable: boolean
    @Column({
        type: "tinyint",
        length: 1
    })  
    zoonosis: boolean
}