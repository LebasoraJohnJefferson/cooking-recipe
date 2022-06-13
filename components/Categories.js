import React from "react";
import Image from "next/image";

export const Categories = ({ categories }) => {
  return (
    <>
      <h1 className="font-bold text-slate-900 text-xl mb-5">Categories</h1>

      <div className="grid md:grid-cols-3 gap-4 m-2">
        {categories["categories"].map((category) => (
          <article
            key={category.idCategory}
            className="h-fit p-3 rounded-lg bg-white shadow-md"
          >
            <div className="h-fit w-full flex justify-between">
              <Image
                loader={() => category.strCategoryThumb}
                src={category.strCategoryThumb}
                width={150}
                height={100}
                objectFit="cover"
                alt={category.strCategory}
                className="rounded-lg"
              />
              <div className="bg-purple-800 text-white font-semibold h-fit text-sm py-1 px-2 rounded-md shadow-lg cursor-pointer hover:bg-purple-700">
                  Recipes
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium text-lg mb-2">{category.strCategory}</h3>
              <p className="text-sm text-slate-500">{category.strCategoryDescription}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
