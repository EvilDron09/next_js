

"use client"

import Form from "next/form";
import {postCars} from "@/services/serviceAction";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carPostValidator} from "@/components/validator/validators";


interface IPostCarProps {
    brand:string,
    price:number,
    year:number,
}

export const PostCarsComponent = () => {

    const {register, formState:{errors, isValid}} = useForm<IPostCarProps>({mode:"all",resolver:joiResolver(carPostValidator)});

    return (
        <div>
            <Form action={postCars}>
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
            </Form>
        </div>
    );
};
