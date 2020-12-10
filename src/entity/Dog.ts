import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Client} from "./Client"
import {Disease} from "./Disease"
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
    @ManyToOne(() => Client,{nullable: true})
    @JoinColumn({name: "id_client"})
    client: Client;
    @Column({
        type: "int",
    })  
    breed: number
    @Column({
        type: "int",
        nullable: true
    })  
    crossbreed: number
    @ManyToMany(() => Disease)
    @JoinTable({
        name: "clients_take_services",
        joinColumn: {
            name: "id_dog",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "id_disease",
            referencedColumnName: "id"
        }
    })
    diseases: Disease[];
}