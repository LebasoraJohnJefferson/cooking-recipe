// import {server} from '../config'
import Head from 'next/head'
import { Categories } from '../components/Categories';

const index = ({categories}) => {
  return (
    <div>
        <Head>
            <title>Cooking Recipe</title>
        </Head>

        <Categories categories={categories} />
        
    </div>
  )
}

export default index

export const getStaticProps = async ()=>{
  // const res = await fetch(`${server}/api/categories`)
  const res = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`)
  const categories = await res.json() 
  return{
    props:{categories}
  }
}