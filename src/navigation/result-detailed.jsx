import React from "react";
import recipesById from "../API/RecipesById_Hard";

export default function ResultDetailed() {
    const RenderIngredients = () => {
        return (<p>{recipesById[0].extendedIngredients[0].original}</p>);
    }

    return (
        <>
            <p>Details of results!</p>
            <RenderIngredients />
        </>
        
    )
}