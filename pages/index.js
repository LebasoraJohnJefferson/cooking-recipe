import { server } from "../config";
import Head from "next/head";
import { Categories } from "../components/Categories";

const Home = ({ categories }) => {
  return (
    <div>
      <Head>
        <title>Cooking Recipe</title>
      </Head>

      <Categories categories={categories} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/categories`);
  const categories = await res.json();
  return {
    props: { categories },
  };
};
