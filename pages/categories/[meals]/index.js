import {server} from "../../../config"
import Meals from "../../../components/Meals"
import NoItemFound from "../../../components/NoItemFound"
import Head from "next/head"

const index = ({meals,title}) => {
  return <>
      <Head>
            <title>Cooking Recipe  For Everyone | {title}</title>
      </Head>
      {meals['meals']==null ? <NoItemFound /> :<Meals meals = {meals}/>}
  </>
}

export default index

export const getServerSideProps  = async (context) => {
  const res = await fetch(`${server}/api/categories/${context.params.meals}`)
  const meals = await res.json()
  return {
    props: { meals ,title:context.params.meals},
  };
};
