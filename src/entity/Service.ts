import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Locality} from "./Locality"

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
    duration: number
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
    @ManyToOne(() => Locality)
    @JoinColumn({name: "id_locality"})
    locality: Locality;
}