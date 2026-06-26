import {ICar} from "@/models/ICar";
import {postCars} from "@/services/serviceAction";


export const baseUrl = 'http://bigbird.space/carsAPI/v1'



export const getCars = async():Promise<ICar[]> =>{
    return await fetch(`${baseUrl}/cars`)
        .then(value => value.json())
}

await fetch(`${baseUrl}/cars`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application.json',
    },
    body: JSON.stringify(postCars),

})

