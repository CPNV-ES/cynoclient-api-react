import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Locality} from "./Locality"

@Entity({name: 'clients'})
export class Client {
    @PrimaryGeneratedColumn({
        type: "int",
    }) 
    id: number;
    @Column({
        type: "varchar",
        length: 100
    }) 
    firstname: string;
    @Column({
        type: "varchar",
        length: 100
    }) 
    lastname: string;
    @Column({
        name: "female",
        type: "boolean"
    }) 
    isFemale: boolean;
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    }) 
    email: string;
    @Column({
        type: "varchar",
        length: 15
    }) 
    phone: string;
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    }) 
    street: string;

    @ManyToOne(() => Locality,{nullable: true})
    @JoinColumn({name: "id_locality"})
    locality: Locality;
}
