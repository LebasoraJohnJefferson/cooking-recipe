import React from 'react'
import Image from 'next/image'

export const Categories = ({categories}) => {
  return (
        <>
            <h2 className='flex justify-center items-center w-100 '>CATEGORIES</h2>
            <div className='grid md:grid-cols-3 gap-3 m-2'>
                { categories['categories'].map((category)=>
                (
                    <article key={category.idCategory} className="grid border drop-shadow rounded place-items-center">
                        <Image loader ={()=> category.strCategoryThumb} src={category.strCategoryThumb} width={100} height={100}  alt={category.strCategory} />
                        <h3 className='p-1'>{category.strCategory}</h3>
                    </article>
                ))}
            </div>
        </>
    )
}

