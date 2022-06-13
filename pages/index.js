<<<<<<< HEAD
import { server } from "../config";
import Head from "next/head";
import { Categories } from "../components/Categories";

const index = ({ categories }) => {
  console.log(categories);
=======
import Head from 'next/head'
import { Categories } from '../components/Categories';
>>>>>>> db0ff91914064c1b07bfc729673ba9730ab3305d

  return (
    <div>
<<<<<<< HEAD
      <Head>
        <title>Cooking Recipe</title>
      </Head>
=======
        <Head>
            <title>Cooking Recipe  For Everyone</title>
        </Head>
>>>>>>> db0ff91914064c1b07bfc729673ba9730ab3305d

      <Categories categories={categories} />
    </div>
  );
};

export default index;

<<<<<<< HEAD
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/categories`);
  const categories = await res.json();
  return {
    props: { categories },
  };
};
=======
export const getStaticProps = async ()=>{
  const res = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`)
  const categories = await res.json() 
  return{
    props:{categories}
  }
}
>>>>>>> db0ff91914064c1b07bfc729673ba9730ab3305d
