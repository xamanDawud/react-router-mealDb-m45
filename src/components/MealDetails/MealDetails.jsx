import { useLoaderData, NavLink } from "react-router-dom";

const MealDetails = () => {
  let indiMeal = useLoaderData();
  let {
    strIngredient1,
    strCategory,
    strArea,
    idMeal,
    strMealThumb,
    strInstructions,
  } = indiMeal.meals[0];
  console.log();
  return (
    <div className="w-[400px] mx-auto text-center  border-yellow-300 p-6 border-2 rounded-md mt-4">
      <img className="w-[250px] mx-auto" src={strMealThumb} alt="" />
      <h1 className="text-3xl font-bold text-center">Name: {strIngredient1}</h1>
      <h3 className="text-1xl text-bold">Area: {strArea}</h3>
      <h3 className="text-1xl text-bold">Category: {strCategory}</h3>
      <h3 className="text-1xl text-bold">Id: {idMeal}</h3>
      <p className="text-1xl">{`${strInstructions.slice(0, 200)}`}</p>
      <NavLink to={-1}>
        <button className="details-btn">Go Back</button>
      </NavLink>
    </div>
  );
};

export default MealDetails;
