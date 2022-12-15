import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IPhilosopher } from "../domain/model/IPhilosopher";
import { Work } from "./Work";



@Entity('philosophers')
export class Philosopher implements IPhilosopher {
    


    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    name: string;

    @Column({type:'date'})
    birthDate: Date;


    @Column({type:'text',nullable:true})
    image: string;

    @Column({type:'text'})
    country: string;

    @Column({type:'text'})
    typePhilosophy: string;

    @OneToMany(() => Work, work => work.philosopher)
    works: Work[];

}