import { useLoaderData, useNavigation } from "react-router-dom";
import Meal from "../../components/Meal/Meal";
const Meals = () => {
  let allMeals = useLoaderData();
  let navigation = useNavigation();

  return (
    <div className="grid lg:grid-cols-3 mg:grid-cols-2 gird-cols-1 gap-6">
      {navigation.state === "loading"
        ? "Loading"
        : allMeals.meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
    </div>
  );
};

export default Meals;
