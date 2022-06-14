export default async function handler({query: { meals }},res){
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`)
    const details = await data.json()
    if(details['meals'] == null ){
        return res.status(404).json({messages:`${meals} not found`})
    }else{
        res.status(200).json(details)
    }
}