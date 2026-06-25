'use server'

import {baseUrl} from "@/services/api.service";

export const postCars = async (fromData:FormData)=>{
    const brand = fromData.get('brand') as string
    const price = fromData.get('price') as string
    const year = fromData.get('brand') as string

     await fetch(`${baseUrl}/cars`,{
        method:'POST',
        headers:{
            'Content-Type':'application.json',
        },
        body:JSON.stringify({brand,year,price}),


})
}

