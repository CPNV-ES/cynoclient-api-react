import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Client} from "./Client" 
import {Service} from "./Service" 
import {Dog} from "./Dog" 
@Entity({name: 'clients_take_services'})
export class Client_take_service {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @ManyToOne(() => Client)
    @JoinColumn({name: "id_client"})
    client: Client;
    @ManyToOne(() => Service)
    @JoinColumn({name: "id_service"})
    service: Service;
    @Column({
        type: "int"
    })  
    dogs_id: number
    @Column({
        name: 'paid',
        type: "boolean"
    })  
    isPaid: boolean
}