import React from "react";
import recipesById from "../API/RecipesById_Hard";
import quickApplePies from "../API/QuickApplePies_Hard";

export default function ResultDetailed() {
    
   
    function RenderIngredients() {
        return quickApplePies.extendedIngredients.map((element, index) => {
            return (
                <tr key={index+1}>
                    <td>{element.amount}</td>
                    <td>{element.unit}</td>
                    <td>{element.name}</td>
                </tr>
            )
        });
    }

    function RenderInstructions() {
        return quickApplePies.analyzedInstructions[0].steps.map((element, index) => {
            return (
                <tr key={index+1}>
                    <td>{element.number}</td>
                    <td>{element.step}</td>
                </tr>
            )
        })
    }
    // console.log(ingredientString)
    const RenderRecipe = () => {
        return (
            <div>
                <img src={quickApplePies.image} />
                <p>{`Title: ${quickApplePies.title}`}</p>
                <p>{`Cooking time: ${quickApplePies.readyInMinutes}`}</p>
                <p>{`Serves: ${quickApplePies.servings}`}</p>
                <div>
                    <h4>{`Ingredients: `} </h4>
                    <table id="ingredients">
                        <tbody>
                            <RenderIngredients />
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>{`Instructions: `} </h4>
                    <table id="instructions">
                        <tbody>
                            <RenderInstructions />
                        </tbody>
                    </table>
                </div>
                
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