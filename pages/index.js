import Head from "next/head";
import { Categories } from "../components/Categories";

const index = ({ categories }) => {
  console.log(categories);

  return (
    <div>
      <Head>
        <title>Cooking Recipe</title>
      </Head>

      <Categories categories={categories} />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/categories`);
  const categories = await res.json();
  return {
    props: { categories },
  };
};
