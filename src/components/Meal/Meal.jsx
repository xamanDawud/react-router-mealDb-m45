import { NavLink } from "react-router-dom";
import "./Meal.css";
const Meal = ({ meal }) => {
  let {
    strIngredient1,
    strCategory,
    strArea,
    idMeal,
    strMealThumb,
    strInstructions,
  } = meal;

  return (
    <div className="text-center  border-yellow-300 p-6 border-2 rounded-md mt-4">
      <img className="w-[250px] mx-auto" src={strMealThumb} alt="" />
      <h1 className="text-3xl font-bold text-center">Name: {strIngredient1}</h1>
      <h3 className="text-1xl text-bold">Area: {strArea}</h3>
      <h3 className="text-1xl text-bold">Category: {strCategory}</h3>
      <h3 className="text-1xl text-bold">Id: {idMeal}</h3>
      <p className="text-1xl">{`${strInstructions.slice(0, 200)}`}</p>
      <NavLink to={`/meals/${idMeal}`}>
        <button className="details-btn">Details</button>
      </NavLink>
    </div>
  );
};

export default Meal;
