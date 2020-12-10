import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Category} from "./Category"
import {Dog} from "./Dog"

@Entity({name: 'breeds'})
export class Breed {
    @PrimaryGeneratedColumn({
        type: "int"
    })  
    id: number
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })  
    link: string
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })  
    picture: string
    @Column({
        type: "varchar",
        length: 50,
    })  
    noun: string
    @ManyToOne(() => Category,{nullable: true})
    @JoinColumn({name: "id_category"})
    category: Category;
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })  
    morphotype: string
    @Column({
        type: "varchar",
        length: 255,
        nullable: true
    })  
    classification: string
    @Column({
        type: "int",
        nullable: true
    })  
    min_size_female: number
    @Column({
        type: "int",
        nullable: true
    })  
    max_size_female: number
    @Column({
        type: "int",
        nullable: true
    })  
    min_size_male: number
    @Column({
        type: "int",
        nullable: true
    })  
    max_size_male: number
    @Column({
        type: "int",
        nullable: true
    })  
    min_weight_female: number
    @Column({
        type: "int",
        nullable: true
    })  
    max_weight_female: number
    @Column({
        type: "int",
        nullable: true
    })  
    min_weight_male: number
    @Column({
        type: "int",
        nullable: true
    })  
    max_weight_male: number
    @Column({
        type: "int",
        nullable: true
    })  
    life_expectancy: number
   
    @OneToMany(() => Dog, dog => dog.breed)
    @OneToMany(() => Dog, dog => dog.crossbreed)
    dogs: Dog[];
}