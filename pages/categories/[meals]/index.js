import { server } from "../../../config";
import Meals from "../../../components/Meals";
import NoItemFound from "../../../components/NoItemFound";
import Head from "next/head";

const index = ({ meals, title, category_pick }) => {
  return (
    <>
      <Head>
        <title>Cooking Recipe For Everyone | {title}</title>
      </Head>
      {meals["meals"] == null ? (
        <NoItemFound />
      ) : (
        <Meals meals={meals} category_pick={category_pick} />
      )}
    </>
  );
};

export default index;

export const getServerSideProps = async (context) => {
  const category_pick = context.params.meals;
  const res = await fetch(`${server}/api/categories/${category_pick}`);
  const meals = await res.json();
  return {
    props: { meals, title: context.params.meals, category_pick: category_pick },
  };
};
