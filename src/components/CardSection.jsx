import GridCard from "./GridCard";
import ListCard from "./ListCard";

function CardSection({view, clubs}){
    if(view=="grid"){
        const cards = clubs.map((club)=><GridCard clubData={club} key={club.id}/>);
        return <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-max gap-8 justify-items-stretch">{cards}</div>
    }
    else {
        const cards = clubs.map((club)=><ListCard clubData={club} key={club.id}/>)
        return <div className="w-full h-full flex flex-col gap-8">{cards}</div>
    }
}

export default CardSection;