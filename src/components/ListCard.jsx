import { Link } from "react-router";

function ListCard({clubData}) {
    return <div className="p-4 flex flex-row shadow gap-4 items-center" id={clubData.id}>
        <img src={clubData.image} className="w-20 h-20 object-cover" />
        <div className="w-full flex flex-col">
            <p className="font-bold">{clubData.name}</p>
            <p>{clubData.shortDescription}</p>
        </div>
        <button className="w-fit p-4 bg-black text-white text-nowrap">
            <Link to={`/clubs/${clubData.id}`} state={{club: clubData}}>View Details</Link>
        </button>
    </div>
}

export default ListCard;