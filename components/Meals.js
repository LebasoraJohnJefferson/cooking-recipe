import Image from 'next/image'
const Meals = ({meals}) => {

  return (
    <div>
        {meals["meals"].map((meal)=>(
            <div key={meal.idMeal}>
                <div>{meal.strMeal}</div>
                <Image loader={() => 
                      meal.strCategoryThumb} 
                      src={meal.strMealThumb} 
                      width={150} height={100}
                      objectFit="cover"
                      alt={meal.strCategory}
                      className="rounded-lg"
                      unoptimized={true}
                    />
            </div>
        ))}
    </div>
  )
}


export default Meals
