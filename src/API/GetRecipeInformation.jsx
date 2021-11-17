import React, { useState, useEffect } from "react";

const URL =
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/";



const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "d7f260b877msh7dc875b681f3a81p1edc5fjsn0affd1eac96e",
  },
};

const GetRecipeInfo = (props) => {
  const ID = props.recipeID+"/information";

  const fetchData = async () => {
    try {
      const response = await fetch(URL+ID, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetchData();
      // setData(response);
      props.parentCallback(response);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Recipes:</h1>
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
};

export default GetRecipeInfo;