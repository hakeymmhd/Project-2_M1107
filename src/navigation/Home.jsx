import React, { useState } from "react";
import RandomDisp from "../components/RandomDisplay";
import KeywordList from "../components/KeywordList";
// import FetchData from "../API/suggestions";

export default function Home() {
    

    return (
        <>
            <p>Homepage</p>
            <div className="Ingredients">
                <input type="text" placeholder="Ingredient"></input>
                <button type="submit">Submit</button>
                <KeywordList />
            </div>

            
            {/* <FetchData />   API CALL */}
            <div className="carousel">
                <RandomDisp />
            </div>
           
        </>
       
    )
}