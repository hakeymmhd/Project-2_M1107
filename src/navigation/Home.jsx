import React from "react";
import RandomDisp from "../components/RandomDisplay";
import FetchData from "../API/suggestions";

export default function Home() {
    
    return (
        <>
            <p>Homepage</p>
            <FetchData />
            <RandomDisp />
        </>
       
    )
}