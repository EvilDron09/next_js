

"use client"

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carPostValidator} from "@/components/validator/validators";
import {postCars} from "@/services/api.service";
import {ICar} from "@/models/ICar";


export const PostCarsComponent = () => {

    const {register,handleSubmit, formState:{errors, isValid},reset} = useForm<ICar>({mode:"all",resolver:joiResolver(carPostValidator)});

    const createHandler = async (data:ICar) =>{
            await postCars(data)
            reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <label>
                    <input type="text" {...register('brand')} placeholder={'brand'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('price')} placeholder={'price'}/>
                    {errors.price && <div>{errors.price.message}</div>}</label>
                <label>
                    <input type="number" {...register('year')} placeholder={'year'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid}>save</button>
            </form>
        </div>
    );
};
