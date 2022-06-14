import Recipe from "../../../components/Recipe";
import { server } from "../../../config";

const recipeID = ({details}) => {
  return (
    <>
      <Recipe details = {details}/>
    </>
  )
}

export default recipeID

export const getServerSideProps  = async (context) => {
    const meals = context.query.meals
    const recipe = context.query.recipeID
    const res = await fetch(`${server}/api/categories/${meals}/${recipe}`)
    const details = await res.json()
    return {
      props: { details },
    };
  };
