import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const RecipeView = () => {
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState([]);
  const handleSubmit = (e) => {
    if (window.confirm("Do you want to go to the homo page?")) {
      navigate("/home");
    }
  };

  let params = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then((res) => res.json())
      .then((data) => setIngredient(data?.meals || []))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="btn_view ">
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Go to Home
        </Button>
      </div>
      <div className="ing_Details">
        {ingredient.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="recipeView_page">
            <h1 className="head">{ingredient[0].strMeal}</h1>

            <img src={ingredient[0].strMealThumb} alt="ing_image" />

            <p>{ingredient[0].strInstructions}</p>
            <p>{ingredient[0].strArea}</p>
            <p>
              {" "}
              Reffer to youtube video:{" "}
              <a href={ingredient[0].strYoutube}>click here</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeView;
