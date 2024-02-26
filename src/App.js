//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
//import RecipeCard from "./components/Card";
import RecipeCard from "./components/RecipeCard";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
// const randomApi = "https://www.themealdb.com/api/json/v1/1/random.php";
// const mealDetailApi = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // search recipe
  //const searchRecipes = async (event) => {
    //event.preventDefault();
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
     
      <h2>Tasty Tales with <span>Naveen</span></h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        //handleSubmit={searchRecipes}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">

        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
       // )) : "No Recipes To Show."}
        )) : "No Results."}
      </div>
    </div>
  );
}
export default App;
