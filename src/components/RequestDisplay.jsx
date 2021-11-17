import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeReviewCard from "./Card"
// import suggestedRecipes from "../API/RequestedSuggestions_Hard";
import recipesById from "../API/RecipesById_Hard";
import { Link } from "react-router-dom";
import GetRecipeInfo from "../API/GetRecipeInformation";

export default function RequestDisplay (props) {
    const [detailedData, setDetailedData] = useState([]);
    const handleCallback = (childData) => {setDetailedData([...detailedData,childData])};

    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
   
    // console.log(suggestedRecipes.length)
    console.log(props.data.length);
    const renderCards = props.data.map((record, index) => {
    
        return (
            <Link 
            to={`/result-summary/${props.data[index].title}`} >
            <div className="card" onClick={()=>console.log("JEFKASJEFKA")} >
                <GetRecipeInfo recipeID={props.data[index].id} parentCallback={handleCallback}/>
                <RecipeReviewCard 
                name={props.data[index].title} 
                img={props.data[index].image} 
                // typography={detailedData[index].summary} 
                />
                </div>
            </Link>
        )
    })

    console.log(detailedData);
    
    return (
        <>
            <Carousel responsive={responsive} >
                {renderCards}
                {/* <Link 
                to={`/result-summary/${suggestedRecipes[0].title}`} >
                <div onClick={()=>console.log("JEFKASJEFKA")} ><RecipeReviewCard 
                    name={suggestedRecipes[0].title} 
                    img={suggestedRecipes[0].image} 
                    typography={recipesById[0].summary} 
                    />
                    </div>
                </Link>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[1].title} 
                    img={suggestedRecipes[1].image} 
                    typography={recipesById[1].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[2].title} 
                    img={suggestedRecipes[2].image} 
                    typography={recipesById[2].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[3].title} 
                    img={suggestedRecipes[3].image} 
                    typography={recipesById[3].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[4].title} 
                    img={suggestedRecipes[4].image} 
                    typography={recipesById[4].summary} />
                </div> */}
            </Carousel>
        </>
    );
}