import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IWork } from "../domain/model/IWork";
import { Philosopher } from "./Philosopher";




export class Work implements IWork{
    

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    name: string;

    @Column({type:'date'})
    date: Date;

    @Column({type:'text'})
    buyUrl: string;

    @ManyToOne(() => Philosopher, philosopher => philosopher.works)
    @JoinColumn({name: 'philosopher_id'})    
    philosopher: Philosopher;

}