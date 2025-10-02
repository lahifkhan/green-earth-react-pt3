import { useLoaderData } from "react-router";

export default function PlantDetails() {
  const data = useLoaderData();
  const { name, image, description, id } = data.plants;
  console.log(data.plants);
  return (
    <div className="card bg-base-100  shadow-sm mt-[100px]">
      <figure className="h-[250px]">
        <img src={image} alt="Shoes" className=" object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
