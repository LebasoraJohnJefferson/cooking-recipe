import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* meta tags for SEO */}
    <Head>
      <meta name="description" content="cooking-recipe-blue , The web offer free ingredients and step-by-step cooking tutorial, also encourage everyone to explore and discover new things." />
      <meta name="keywords" content="Recipe, Cooking, ingredients list " />
      <meta name="author" content="Lebasora, John Jefferson ; Paranas , Christian ; Luigi, Loreno" />
      <meta name="robots" content="index, follow" />
      {/* avoid fontawesome icon to load it default size */}
      <style>{dom.css()}</style>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
