import Recipe from "../../../components/Recipe";
import { server } from "../../../config";
import NoItemFound from "../../../components/NoItemFound";
import Head from "next/head";

const recipeID = ({ details, meals }) => {
  return (
    <>
      <Head>
        <title>Cooking Recipe For Everyone | {meals}</title>
      </Head>
      {details["meals"] == null ? (
        <NoItemFound />
      ) : (
        <Recipe details={details} />
      )}
    </>
  );
};

export default recipeID;

export const getServerSideProps = async (context) => {
  const meals = context.query.meals;
  const recipe = context.query.recipeID;
  const res = await fetch(`${server}/api/categories/${meals}/${recipe}`);
  const details = await res.json();
  return {
    props: { details, meals },
  };
};
