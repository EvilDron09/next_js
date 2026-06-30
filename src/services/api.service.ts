import {ICar} from "@/models/ICar";



export const baseUrl = 'http://bigbird.space/carsAPI/v1'



export const getCars = async():Promise<ICar[]> =>{
    return await fetch(`${baseUrl}/cars`)
        .then(value => value.json())
}
export const postCars = async(car:ICar) =>{
await fetch(`${baseUrl}/cars`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),

})
}

