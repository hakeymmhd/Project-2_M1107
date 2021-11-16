import React from "react";
import recipesById from "../API/RecipesById_Hard";
import quickApplePies from "../API/QuickApplePies_Hard";

export default function ResultDetailed() {
    
   
    function RenderIngredients() {
        let ingredientString = "";
        quickApplePies.extendedIngredients.map((element)=> {
            return element.name
        });
      
        return ingredientString;
    }
    // console.log(ingredientString)
    const RenderRecipe = () => {
        return (
            <div>
                <img src={quickApplePies.image} />
                <p>{`Title: ${quickApplePies.title}`}</p>
                <p>{`Cooking time: ${quickApplePies.readyInMinutes}`}</p>
                <p>{`Serves: ${quickApplePies.servings}`}</p>
                <p>{`Ingredients: `} </p>
                <RenderIngredients />
                
                <section>{RenderIngredients}</section>
            </div>
        
        );
    }

    return (
        <>
            <p>Details of results!</p>
            <RenderRecipe />
            
        </>
        
    )
}