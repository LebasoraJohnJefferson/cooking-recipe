import Image from 'next/image'

const Recipe = ({details}) => {
    const detail = details['meals'][0]
  return (
    <div>
        <Image loader={() => 
                      detail.strCategoryThumb} 
                      src={detail.strMealThumb} 
                      width={150} height={100}
                      objectFit="cover"
                      alt={detail.strCategory}
                      className="rounded-lg"
                      unoptimized={true}
                    />
        {detail.strMeal}
    </div>
  )
}


export default Recipe
