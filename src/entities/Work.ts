import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IWork } from "../domain/model/IWork";




export class Work implements IWork{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'text'})
    name: string;

    @Column({type:'date'})
    date: Date;

    @Column({type:'text'})
    buyUrl: string;

}