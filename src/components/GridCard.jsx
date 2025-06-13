import { Link } from "react-router";

function GridCard ({clubData}) {
    return <div className="p-4 h-fit flex flex-col shadow gap-4 bg-white/80">
        <img src={clubData.image} className="w-full h-40 object-cover" />
        <p className="font-bold text-2xl">{clubData.name}</p>
        <p className="opacity-70">{clubData.shortDescription}</p>
        <button className="w-fit p-4 font-bold bg-black text-white place-self-center">
            <Link to={`/clubs/${clubData.id}`} state={{club: clubData}}>View Details</Link>
        </button>
    </div>
}

export default GridCard;