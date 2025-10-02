import { useLoaderData } from "react-router"
import PlantCard from "../Components/PlantCard";

export default function Home(){
    const data = useLoaderData();
   console.log(data)
    
    return(
       <div className="grid grid-cols-3 gap-4">
        {
            data.plants.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
        }
       </div>
    )
}