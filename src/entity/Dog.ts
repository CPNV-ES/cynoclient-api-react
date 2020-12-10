import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Client } from "./Client"
import {Breed} from "./Breed";

@Entity({name: 'dogs'})
export class Dog {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "varchar",
        length: 100
    })  
    noun: string
    @Column({
        name: "female",
        type: "boolean",
        nullable: true
    })  
    isFemale: boolean
    @Column({
        type: "date"
    })  
    birthdate: string
    @Column({
        name: "sterilized",
        type: "boolean"
    })  
    isSterilized: boolean
    @Column({
        name: "chemical",
        type: "boolean"
    })  
    isChemical: boolean
    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })  
    color: string
    @Column({
        name: "dead",
        type: "boolean"
    })  
    isDead: boolean
    @ManyToOne(() => Client)
    @JoinColumn({name: "id_client"})
    client: Client;
    @ManyToOne(() => Breed)
    @JoinColumn({name: "breed"})
    breed: Breed
    @Column({
        type: "int",
        nullable: true
    })  
    crossbreed: number
}
