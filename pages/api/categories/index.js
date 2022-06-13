export default async function handler(req,res){
    const data = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`)
    const details = await data.json()
    res.status(200).json(details)
}
