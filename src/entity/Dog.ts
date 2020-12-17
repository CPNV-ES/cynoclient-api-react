import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinColumn, JoinTable, OneToMany} from "typeorm";
import {Client} from "./Client"
import {Disease} from "./Disease"
import {Breed} from "./Breed"
import {Client_take_service} from "./Client_take_service"

@Entity({name: 'dogs'})
export class Dog {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number
    @Column({
        type: "varchar",
        length: 100
    })
    noun: string
    @Column({
        name: "female",
        type: "boolean",
        nullable: true
    })
    isFemale: boolean
    @Column({
        type: "date"
    })
    birthdate: string
    @Column({
        name: "sterilized",
        type: "boolean"
    })
    isSterilized: boolean
    @Column({
        name: "chemical",
        type: "boolean"
    })
    isChemical: boolean
    @Column({
        type: "varchar",
        length: 50,
        nullable: true
    })
    color: string
    @Column({
        name: "dead",
        type: "boolean"
    })
    isDead: boolean
    @ManyToOne(() => Client)
    @JoinColumn({name: "id_client"})
    client: Client;
    @ManyToOne(() => Breed)
    @JoinColumn({name: "breed"})
    breed: Breed;
    @ManyToOne(() => Breed, {nullable: true})
    @JoinColumn({name: "crossbreed"})
    crossbreed: Breed

    @ManyToMany(() => Disease, disease => disease.dogs)
    @JoinTable({
        name: "dogs_have_diseases",
        joinColumn: {
            name: "id_dog",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "id_disease",
            referencedColumnName: "id",
        }
    })
    diseases: Disease[];

    @OneToMany(() => Client_take_service, client_take_service => client_take_service.service)
    client_take_services: Client_take_service[];
}
