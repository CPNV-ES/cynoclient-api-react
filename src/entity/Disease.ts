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
        name: "vaccinable",
        type: "boolean"
    })  
    isVaccinable: boolean
    @Column({
        name: "zoonosis",
        type: "boolean"
    })  
    isZoonosis: boolean
}