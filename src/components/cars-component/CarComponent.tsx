import {ICar} from "@/models/ICar";

interface ICarComponent {
    item:ICar,
}

export const CarComponent = ({item}:ICarComponent) => {
    return (
        <div>
            <h3>{item.id}. {item.brand}</h3>
            <p>{item.year} year</p>
            <p>{item.price} $</p>
        </div>
    );
};
