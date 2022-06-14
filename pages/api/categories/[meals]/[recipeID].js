export default async function handler({query:context},res){
    try{
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parseInt(context.recipeID)}`)
        const recipe = await data.json()
        if(recipe['meals'][0].strCategory.toUpperCase() != context.meals.toUpperCase()){
            return res.status(403).json({"message":`${context.recipeID} is not under ${context.meals}`})
        }
        res.status(200).json(recipe)
    }catch{
        return res.status(403).json({"message":`${context.recipeID} not found`})
    }
}