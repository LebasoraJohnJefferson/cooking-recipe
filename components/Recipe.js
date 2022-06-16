import { faDigitalTachograph } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Recipe = ({ details }) => {
  const data = details.meals[0];
  const arrIng = [];
  const arrMea = [];
  let ingCount = 0;

  Object.entries(data).forEach(([key, value], idx) => {
    let valid = data[key] != "" && data[key] != null;

    if (key.startsWith("strIngredient") == true && valid) {
      arrIng.push(value);
      ingCount++;
    }

    if (key.startsWith("strMeasure") == true && valid) {
      arrMea.push(value);
    }
  });

  return (
    <div>
      <div className="relative">
        <img
          src="/aa.jpg"
          className="w-full h-[400px] object-cover opacity-50 rounded-xl"
        />

        <div className="absolute w-full top-8 left-8 grid gap-4">
          <div className="bg-white w-fit p-1 pb-0 rounded-2xl  shadow-lg">
            <Image
              loader={() => data.strCategoryThumb}
              src={data.strMealThumb}
              width={350}
              height={400}
              objectFit="cover"
              alt={data.strCategory}
              className="rounded-xl"
              unoptimized={true}
            />
          </div>
          <div className="grid-start-2">
            <h2 className="font-bold text-3xl text-slate-900">
              {data.strMeal}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-[130px]">
        <h5 className="font-semibold text-xl text-slate-900">
          <i className="fad fa-question-circle text-[18px]"></i> Instructions
        </h5>
        <p className="mt-2">{data.strInstructions}</p>

        <div className="mt-10">
          <h5 className="font-semibold text-xl text-slate-900 mb-2">
            <i className="far fa-apple-crate text-[18px]"></i> Ingredients
          </h5>

          {arrIng.map((val, key) => (
            <ul key={key}>
              <li>
                {val}{" "}
                <span className="text-sm text-slate-500">({arrMea[key]})</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
