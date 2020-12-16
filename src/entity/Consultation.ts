import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Service} from "./Service"

@Entity({name: 'consultations'})
export class Consultation {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "varchar",
        length: 2000
    })  
    situation: string
    @Column({
        type: "varchar",
        length: 500,
        nullable: true
    })  
    goal: string
    @Column({
        type: "varchar",
        length: 250,
        nullable: true
    })  
    deadline: string
    @Column({
        type: "varchar",
        length: 2000,
        nullable: true
    })  
    solution: string
    @Column({
        type: "varchar",
        length: 100,
        nullable: true
    })  
    medicines: string
    @Column({
        type: "varchar",
        length: 2000,
        nullable: true
    })  
    argumentation: string
    @ManyToOne(() => Service)
    @JoinColumn({name: "id_service"})
    service: Service;
}