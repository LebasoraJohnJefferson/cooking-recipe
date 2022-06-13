import React from "react";
import Link from "next/link"
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Categories = ({ categories }) => {
  return (
    <>
      <h1 className="font-bold text-slate-900 text-xl mb-5">Categories</h1>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 900: 3 }}>
        <Masonry gutter="15px">
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
                  unoptimized={true}
                />
                <Link href={`/categories/${category.strCategory}`}><div className="bg-purple-800 text-white font-semibold h-fit text-[12px] py-1 px-2 rounded-md shadow-lg cursor-pointer hover:bg-purple-700">
                  Meals &gt;
                </div></Link>
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-lg mb-2">
                  {category.strCategory}
                </h3>
                <p className="text-sm text-slate-500">
                  {category.strCategoryDescription}
                </p>
              </div>
            </article>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};
