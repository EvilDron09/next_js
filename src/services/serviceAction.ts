'use server'



export const postCars = async (fromData:FormData)=>{
    const brand = fromData.get('brand') as string
    const price = fromData.get('price') as string
    const year = fromData.get('year') as string

    }

