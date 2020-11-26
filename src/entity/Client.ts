import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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
        type: "boolean"
    }) 
    female: boolean;
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
    @Column({
        type: "int",
        nullable: true
    }) 
    id_locality: number;
}
