import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Dog} from "./Dog"

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

    // Inverse relation is defined in dog
    @ManyToMany(() => Dog, dog => dog.diseases)
    dogs: Dog[];
}
