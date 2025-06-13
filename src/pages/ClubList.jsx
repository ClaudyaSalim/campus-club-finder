import { useState } from "react";
import { clubs } from "../components/ClubData";
import CardSection from "../components/CardSection";

function ClubList(){
    const [clubList, setClubs] = useState(clubs.sort((a, b) => a.name.localeCompare(b.name)));
    const [sortValue, setSort] = useState("asc"); 
    const [viewMode, setView] = useState("grid");

    const onChangeSort = (e) =>{
        setSort(e.target.value);
        console.log(clubList);
        setClubs([...clubList].reverse());
        console.log(clubList);
    }

    const onChangeView = (e) => {
        setView(e.target.value);
    }

    return <div className="w-full p-8 flex flex-col items-center justify-center gap-10">
        <div className="flex">
            <label>Sorting:</label>
            <select id="sort-field" onChange={onChangeSort}>
                <option value={"asc"}>Name A-Z</option>
                <option value={"desc"}>Name Z-A</option>
            </select>
            <label>View:</label>
            <select id="view-mode" onChange={onChangeView}>
                <option value={"grid"}>Grid View</option>
                <option value={"list"}>List View</option>
            </select>
        </div>
        <CardSection view={viewMode} clubs={clubList}/>
    </div>
}

export default ClubList;