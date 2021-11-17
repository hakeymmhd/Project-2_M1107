import React, {useState} from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import FetchRequestData from "../API/RequestedSuggestions";
import RequestDisplay from "../components/RequestDisplay";

export default function ResultSummary() {
    const [data, setData] = useState([]);
   
    const [keywordStr, setKeywordStr] = useState("");
    const location = useLocation();
    let navigate = useNavigate();
    
    const handleCallback = (childData) => {setData(childData)};

    const handleClick = () => {
        navigate(-1);
    }

    console.log(location.state.list);
    const displayList = location.state.list.map((record, index) => {
        return(
           <p>{record}</p>
        )
    })

    const argAPI = location.state.list.join('%2C');
    // setKeywordStr(location.state.list.join('%2C'));
    console.log(argAPI);
    console.log(data);
    
    return (
        <> 
            <p>Summary of results based on:</p>
            <div className="keywords">
                {displayList}
            </div>
            <div className="results"><FetchRequestData arg={argAPI} parentCallback={handleCallback}/></div>
            <div><RequestDisplay data={data}/></div>
            <button onClick={handleClick}>New Search</button>
            
        </>
    )
}