import { MealItem } from './MealItem'

function MealList({ meals }) {
  if (!meals.length) {
    return <h3>Ничего нет</h3>
  }
  return (
    <div className="container mx-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3  xl:gap-x-8 bg-stripes-fuchsia rounded-lg">
      {meals.map((meal) => {
        return <MealItem key={meal.idMeal} {...meal} />
      })}
    </div>
  )
}
export { MealList }
