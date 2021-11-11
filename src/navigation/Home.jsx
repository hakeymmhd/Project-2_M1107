import React, { useState } from "react";
import RandomDisp from "../components/RandomDisplay";
import KeywordList from "../components/KeywordList";
// import FetchData from "../API/suggestions";

export default function Home() {
    

    return (
        <>
            <p>Homepage</p>
            <KeywordList />
            {/* <FetchData />   API CALL */}
            <RandomDisp />
        </>
       
    )
}