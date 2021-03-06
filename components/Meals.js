import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Meals = ({ meals, category_pick }) => {

  return (
    <div>
      <h1 className="font-bold text-slate-900 text-xl mb-5">{ category_pick } Meals</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {meals["meals"].map((meal) => (
            <div
              key={meal.idMeal}
              className="relative grid p-3 rounded-lg bg-white shadow-md"
            >
              <Link href={`/categories/${category_pick}/${meal.idMeal}`}>
                <div className="absolute -bottom-2 right-3 mt-3 ml-10 z-10 bg-purple-800 text-white font-semibold h-fit text-[12px] py-1 px-2 rounded-md shadow-lg cursor-pointer hover:bg-purple-700">
                  <p><i className="far fa-apple-crate"></i> Get Recipe</p>
                </div>
              </Link>
              <Image
                loader={() => meal.strCategoryThumb}
                src={meal.strMealThumb}
                width={100}
                height={200}
                objectFit="cover"
                alt={meal.strCategory}
                className="rounded-lg"
                unoptimized={true}
              />
              <h3 className="font-semibold text-md mt-2">{meal.strMeal}</h3>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Meals;
