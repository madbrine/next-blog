import { IPublication } from "./IPublication";

export interface IPublicationsList{ 
    publications: Omit<IPublication, 'content' | 'commentaries'>[], 
    totalCount: number 
}