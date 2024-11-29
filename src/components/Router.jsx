import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";


const Router = () => {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)

    return (
        <div className="max-w-7xl mx-auto">
            <h2>Hot and cold coffee: {coffees.length}</h2>
            <div className="grid grid-cols-2 justify-center items-center gap-8">
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Router;