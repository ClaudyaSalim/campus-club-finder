import { useLocation , useParams } from "react-router";

function ClubDetail({joined, setJoined}){

    const club = useLocation().state?.club;
    const clubId = useParams().clubId;
    const events = club.events.map((event)=>
                    <div className="flex flex-col gap-2" key={event.name}>
                        <p>{event.date}</p>
                        <p>{event.name}</p>
                    </div>);

    const joinedStatus = joined.some(clubJoined => clubJoined.id===clubId);
    const infoText = (joinedStatus)? "You have joined this club!" : "";
    const onJoin = () => {setJoined(joinedList => [...joinedList, club])};

    return <div className="w-full h-full p-8 flex flex-col gap-20">
        <div className="w-full flex flex-col md:flex-row items-center gap-8">
            <img src={club.image} className="w-1/2 h-auto object-cover"/>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2>{club.name}</h2>
                <p>{club.description}</p>
                <button className={`w-fit p-4 text-white place-self-center md:place-self-start ${(joinedStatus)? "disabled:opacity-50": "bg-black"}`} onClick={onJoin}>Join Club</button>
                <p>{infoText}</p>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <h4>Upcoming Events</h4>
            {events}
        </div>
    </div>
}

export default ClubDetail;