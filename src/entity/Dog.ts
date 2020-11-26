import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
    @Column({
        type: "int"
    })  
    id_client: number
    @Column({
        type: "int",
    })  
    breed: number
    @Column({
        type: "int",
        nullable: true
    })  
    crossbreed: number
}