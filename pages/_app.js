import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* meta tags for SEO */}
    <Head>
      <meta name="description" content="The web offer free ingredients and step-by-step cooking tutorial." />
      <meta name="keywords" content="Recipe, Cooking, ingredients list " />
      <meta name="author" content="Lebasora, John Jefferson ; Paranas , Christian ; Luigi, Loreno" />
      <meta name="robots" content="index, follow" />
    </Head>
    <Layout>
      {/* navigation header */}
      <header>
        <div  className="bg-green-500 md:bg-red-500 lg:bg-green-500">
          <h1>Learn to Cook</h1>
        </div>
      </header>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
