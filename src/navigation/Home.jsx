import React, { useState } from "react";
import RandomDisp from "../components/RandomDisplay";
import KeywordList from "../components/KeywordList";
import { Link } from "react-router-dom"
// import FetchData from "../API/suggestions";

export default function Home() {
    const [list, setList] = useState([]);
    // const [keywordStr, setKeywordStr] = useState("");
    const [summaryData, setSummaryData] = useState([]);
    const addToList = (item) => {
        setList([item, ...list]);
    }

    const handleCallback = (childData) => {addToList(childData)};
    console.log(list);
    const displayList = list.map((record, index) => {
        return(
            <p>{record}</p>
        )
    })
    // console.log(keywordStr);
    return (
        <>
            <h1>Homepage</h1>
            <div className="Ingredients">
                <input type="text" placeholder="Ingredient"></input>
                <button type="submit">Submit</button>
                <Link 
                    to="/result-summary"
                    state={{list}}
                ><button type="submit">Search Recipes</button></Link>
                <KeywordList parentCallback={handleCallback } />
            </div>

            <h3>Selected ingredients</h3>
            {displayList}
            {/* <FetchData />   API CALL */}
            <div className="carousel">
                <h3>Some suggestions...</h3>
                <RandomDisp />
            </div>
           
        </>
       
    )
}