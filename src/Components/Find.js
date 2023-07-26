import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Find = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then((res) => res.json())
      .then((data) => setProducts(data?.meals || []));
  }, []);
  console.log(products);

  const recipes = products.filter((foods) =>
    foods.strMeal.toLowerCase().includes(search)
  );
  const navigate = useNavigate();
  const handleSubmit = (id) => {
    try {
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="find_page text-center">
      <h1 className="head fs-20">Welcome to Recipe Communication</h1>
      <Form className="d-flex w-50 mt-5 mx-auto">
        <Form.Control
          type="search"
          placeholder="Search Recipe's"
          aria-label="Search"
          className="me-2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <h3 className=" result mt-5 ">Your Search Results:</h3>
      <div className="container ml-6 d-flex flex-wrap ">
        {recipes.map((recipe) => {
          return (
            <div>
              <Card
                key={recipe.idMeal}
                className="mx-3 my-3"
                style={{ width: "15rem" }}
              >
                <Card.Img variant="top" src={recipe.strMealThumb} alt="img" />
                <Card.Body>
                  <Card.Title>{recipe.strMeal}</Card.Title>
                  <Button
                    onClick={() => handleSubmit(recipe.idMeal)}
                    variant="primary"
                  >
                    Get Recipe
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Find;
