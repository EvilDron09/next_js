import {IAddress} from "@/models/IAddress";
import {ICompany} from "@/models/ICompany";

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone:string,
    website: string,
    company: ICompany,
}
