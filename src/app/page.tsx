
import {CarsComponent} from "@/components/cars-component/CarsComponent";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <button><Link href={'/post'}>Post</Link></button>
        <CarsComponent/>
    </>
  );
}
