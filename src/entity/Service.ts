import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'services'})
export class Service {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "date",
    })  
    moment: Date
    @Column({
        type: "decimal"
    })  
    duration: string
    @Column({
        type: "varchar",
        length: 50
    })  
    type: string
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })  
    description: string
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })  
    street: string
    @Column({
        type: "int",
        length: 255
    })  
    id_locality: number
}