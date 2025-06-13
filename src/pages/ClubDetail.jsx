import { useLocation , useParams } from "react-router";

function ClubDetail({joined, setJoined}){

    const club = useLocation().state?.club;
    const clubId = useParams().clubId;
    const events = club.events.map((event)=>
                    <div className="flex flex-col gap-2" key={event.name}>
                        <p className="opacity-70">{event.date}</p>
                        <p className="font-bold">{event.name}</p>
                    </div>);

    const joinedStatus = joined.some(clubJoined => clubJoined.id===clubId);
    const infoText = (joinedStatus)? "You have joined this club!" : "";
    const onJoin = () => {setJoined(joinedList => [...joinedList, club])};

    return <div className="w-full h-full p-8 flex flex-col gap-20 bg-[#EFF0E1]">
        <div className="w-full flex flex-col lg:flex-row items-center gap-8">
            <img src={club.image} className="w-full lg:w-1/2 h-auto object-cover"/>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="font-bold text-3xl">{club.name}</h2>
                <p className="opacity-70 text-justify">{club.description}</p>
                <button className={`w-fit p-4 font-bold text-white place-self-center lg:place-self-start ${(joinedStatus)? "hidden": "bg-black"}`} onClick={onJoin}>Join Club</button>
                <p className="font-bold">{infoText}</p>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <h4 className="text-xl font-bold">Upcoming Events</h4>
            {events}
        </div>
    </div>
}

export default ClubDetail;