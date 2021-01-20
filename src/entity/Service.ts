import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany} from "typeorm";
import {Locality} from "./Locality"
import {Consultation} from "./Consultation"
import {Client_take_service} from "./Client_take_service"
import {Dog} from "./Dog";

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

    @OneToMany(() => Consultation, consultation => consultation.service)
    consultations: Consultation[];
    @OneToMany(() => Client_take_service, client_take_service => client_take_service.service)
    client_take_services: Client_take_service[];

    // Inverse relation is defined in dog
    @ManyToMany(() => Dog, dog => dog.services)
    dogs: Dog[];
}
