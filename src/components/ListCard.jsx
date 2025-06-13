import { Link } from "react-router";

function ListCard({clubData}) {
    return <div className="p-4 flex flex-row shadow gap-4 items-center bg-white/80">
        <img src={clubData.image} className="w-20 h-20 object-cover" />
        <div className="w-full flex flex-col">
            <p className="font-bold text-2xl">{clubData.name}</p>
            <p className="opacity-70">{clubData.shortDescription}</p>
        </div>
        <button className="w-fit p-4 font-bold bg-black text-white text-nowrap">
            <Link to={`/clubs/${clubData.id}`} state={{club: clubData}}>View Details</Link>
        </button>
    </div>
}

export default ListCard;