import Image from "next/image";
import ReactPlayer from "react-player";

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

  console.log(data);

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
          <div className="grid-start-2 absolute -left-4 -bottom-14 md:relative md:left-0 md:bottom-0">
            <h2 className="font-bold text-3xl text-slate-900">
              {data.strMeal}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-[200px] md:mt-[130px]">
        <h5 className="font-semibold text-xl text-slate-900">
          <i className="fad fa-question-circle text-[18px]"></i> Instructions
        </h5>
        <p className="mt-2 whitespace-pre-line leading-7">
          {data.strInstructions}
        </p>

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

        <div className="mt-10">
          <h5 className="font-semibold text-xl text-slate-900 pb-2">
            <i className="fab fa-youtube text-[18px]"></i> Demo
          </h5>

          {data.strYoutube != null ? (
            <ReactPlayer
              className="shadow-lg"
              url={data.strYoutube}
              width="100%"
              height="400px"
              controls="true"
            />
          ) : (
            <div className="text-slate-900 text-xl font-bold h-[360px] grid place-content-center m-0">
              Trailer not available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
