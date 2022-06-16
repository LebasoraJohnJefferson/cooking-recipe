import Image from "next/image";

const Recipe = ({ details }) => {
  const detail = details["meals"][0];
  let count = 1;
  // since the ingredient have same name we converted the object into list in order to loop and getThe ingredients and the measurements
  const list_details = Object.keys(details["meals"][0]);
  const new_list_details = list_details.filter(() => {
    count += 1;
    if (
      (details["meals"][0][list_details[count]] != null ||
        details["meals"][0][list_details[count]]) &&
      count > 10
    ) {
      return details["meals"][0][list_details[count]];
    }
  });
  return (
    <div>
      <Image
        loader={() => detail.strCategoryThumb}
        src={detail.strMealThumb}
        width={150}
        height={100}
        objectFit="cover"
        alt={detail.strCategory}
        className="rounded-lg"
        unoptimized={true}
      />
      {detail.strMeal}
      <h5>Instructions</h5>
      <p>{detail.strInstructions}</p>
      {new_list_details.map((col) => (
        <div key={count + 1}>
          {/* ingredient && measurements */}
          <div>{details["meals"][0][col]}</div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
