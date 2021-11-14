import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
// import FetchRequestData from "../API/RequestedSuggestions";
import suggestedRecipes from "../API/RequestedSuggestions_Hard";
import RandomDisp from "../components/RandomDisplay";

export default function ResultSummary() {
    const location = useLocation();
    let navigate = useNavigate();
    
    const handleClick = () => {
        navigate(-1);
    }

    console.log(location.state.list);
    const displayList = location.state.list.map((record, index) => {
        return(
           <p>{record}</p>
        )
    })
    
    
    return (
        <> 
            <p>Summary of results based on:</p>
            <div className="keywords">
                {displayList}
            </div>
            {/* <div><RandomDisp /></div> */}
            <button onClick={handleClick}>New Search</button>
            {/* <div className="results"><FetchRequestData /></div> */}
        </>
        
    )
}