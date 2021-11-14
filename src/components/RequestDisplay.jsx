import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeReviewCard from "./Card"
import suggestedRecipes from "../API/RequestedSuggestions_Hard";

export default function RequestDisplay () {
    
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

    console.log(suggestedRecipes.length)
    return (
        <>
            <Carousel responsive={responsive}>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[0].title} 
                    img={suggestedRecipes[0].image} 
                    typography={suggestedRecipes[0].summary} />
                    </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[1].title} 
                    img={suggestedRecipes[1].image} 
                    typography={suggestedRecipes[1].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[2].title} 
                    img={suggestedRecipes[2].image} 
                    typography={suggestedRecipes[2].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[3].title} 
                    img={suggestedRecipes[3].image} 
                    typography={suggestedRecipes[3].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={suggestedRecipes[4].title} 
                    img={suggestedRecipes[4].image} 
                    typography={suggestedRecipes[4].summary} />
                </div>
            </Carousel>
        </>
    );
}