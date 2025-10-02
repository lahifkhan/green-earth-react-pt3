import { useNavigate } from "react-router";

export default function PlantCard({ plant }) {

    const {name,image,description,id} = plant;
    const navigate = useNavigate();
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-[150px]">
        <img
          src={image}
          alt="Shoes"
          className=" object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button onClick={()=> navigate(`/home/${id}`)} className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
}
