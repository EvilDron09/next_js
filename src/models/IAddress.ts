import {IGeo} from "@/models/IGeo";

export interface IAddress {
    street:string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}
