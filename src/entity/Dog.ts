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
        type: "tinyint",
        length: 1,
        nullable: true
    })  
    female: boolean
    @Column({
        type: "date",
    })  
    birthdate: string
    @Column({
        type: "tinyint",
        length: 1
    })  
    sterilized: number
    @Column({
        type: "tinyint",
        length: 1
    })  
    chemical: boolean
    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })  
    color: string
    @Column({
        type: "tinyint",
        length: 1
    })  
    dead: boolean
    @Column({
        type: "int",
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