import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'clients_take_services'})
export class Client_take_service {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "int"
    })  
    id_client: number
    @Column({
        type: "int"
    })  
    id_service: number
    @Column({
        type: "int"
    })  
    dogs_id: number
    @Column({
        type: "boolean"
    })  
    paid: boolean
}