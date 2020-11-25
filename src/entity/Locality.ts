import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
    zip: string
    @Column({
        type: "int"
    })  
    zip_complement: string
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
}