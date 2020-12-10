import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Locality} from "./Locality"
import {Dog} from "./Dog"
import {Client_take_service} from "./Client_take_service"

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

    @OneToMany(() => Dog, dog => dog.client)
    dogs: Dog[];
    @OneToMany(() => Client_take_service, client_take_service => client_take_service.client)
    client_take_services: Client_take_service[];
}
