import {ICar} from "@/models/ICar";


export const baseUrl = 'http://bigbird.space/carsAPI/v1'



export const getCars = async():Promise<ICar[]> =>{
    return await fetch(`${baseUrl}/cars`)
        .then(value => value.json())
}


