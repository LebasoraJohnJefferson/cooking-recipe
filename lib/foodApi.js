
export async function getCategories(){
  const data = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`)
  const categories = await data.json()

  return categories
}