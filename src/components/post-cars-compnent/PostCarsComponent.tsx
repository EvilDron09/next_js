import Form from "next/form";
import {postCars} from "@/services/serviceAction";

export const PostCarsComponent = () => {
    return (
        <div>
            <Form action={postCars}>
                <input type="text" name={'brand'} placeholder={'brand'}/>
                <input type="number" name={'price'} placeholder={'price'}/>
                <input type="number" name={'year'} placeholder={'year'}/>
                <button>save</button>
            </Form>
        </div>
    );
};
