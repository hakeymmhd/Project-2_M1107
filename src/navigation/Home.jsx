import React, { useState } from "react";
import RandomDisp from "../components/RandomDisplay";
import KeywordList from "../components/KeywordList";
// import FetchData from "../API/suggestions";

export default function Home() {
    const [list, setList] = useState([]);
    const addToList = (item) => {
        setList([item, ...list]);
    }

    const handleCallback = (childData) => {addToList(childData)};
    console.log(list);
    return (
        <>
            <h1>Homepage</h1>
            <div className="Ingredients">
                <input type="text" placeholder="Ingredient"></input>
                <button type="submit">Submit</button>
                <KeywordList list={list} parentCallback={handleCallback } />
            </div>

            <h3>Selected ingredients</h3>
            {/* <FetchData />   API CALL */}
            <div className="carousel">
                <h3>Some suggestions...</h3>
                <RandomDisp />
            </div>
           
        </>
       
    )
}