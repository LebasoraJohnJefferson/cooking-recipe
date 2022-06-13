import { server } from '../config'
import Head from "next/head";
import { Categories } from "../components/Categories";
import { getCategories } from '../lib/foodApi';

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
  const categories = await getCategories()

  return {
    props: { categories },
  };
};
