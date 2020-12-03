import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import {Client} from "./Client"

@Entity({name: 'localities'})
export class Locality {
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
        type: "int"
    })  
    zip: number
    @Column({
        type: "int"
    })  
    zip_complement: number
    @Column({
        type: "varchar",
        length: 45
    })  
    toponym: string
    @Column({
        type: "varchar",
        length: 2
    })  
    department: string
    @Column({
        type: "varchar",
        length: 45
    })  
    language: string
    @OneToMany(() => Client, client => client.locality)
    clients: Client[];
}