import Image from 'next/image'
import Link from 'next/link'
const Meals = ({meals,category_pick}) => {

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
                    <Link href={`/categories/${category_pick}/${meal.idMeal}`}><div>recipe</div></Link>
            </div>
        ))}
    </div>
  )
}


export default Meals
