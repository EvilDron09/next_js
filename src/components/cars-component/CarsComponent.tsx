import {getCars} from "@/services/api.service";
import {CarComponent} from "@/components/cars-component/CarComponent";

export const CarsComponent = async () => {

    const cars = await getCars()
    return (
        <>
            {
                cars.map(car => <CarComponent item={car} key={car.id}/>)
            }
        </>
    );
};
