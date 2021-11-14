import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecipeReviewCard from "./Card"
import recipes from '../API/RandomSuggestions_Hard'

export default function RandomDisp () {
    
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

    console.log(recipes.length)
    return (
        <>
            <Carousel responsive={responsive}>
                <div><RecipeReviewCard 
                    name={recipes[0].title} 
                    img={recipes[0].image} 
                    typography={recipes[0].summary} />
                    </div>
                <div><RecipeReviewCard 
                    name={recipes[1].title} 
                    img={recipes[1].image} 
                    typography={recipes[1].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={recipes[2].title} 
                    img={recipes[2].image} 
                    typography={recipes[2].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={recipes[3].title} 
                    img={recipes[3].image} 
                    typography={recipes[3].summary} />
                </div>
                <div><RecipeReviewCard 
                    name={recipes[4].title} 
                    img={recipes[4].image} 
                    typography={recipes[4].summary} />
                </div>
            </Carousel>
        </>
    );
}