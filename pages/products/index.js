import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Header from '../../comps/Header'
import Products from '../../comps/products'
import Filters from '../../comps/Filters'

const ProductsPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="product-view">
        <h1 className="title">
          Product list
        </h1>
        <Filters />
        <Products />
      </section>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .product-view {
          display: grid;
          grid-template-areas:
            "title"
            "filters"
            "products";
        }
        .title {
          grid-area: title;
          text-align: center;
          line-height: 1.15;
          font-size: 4rem;
        }
        @media(min-width: 720px) {
          .product-view {
            grid-template:
              "title title" auto
              "filters products" auto / 1fr 3fr;

          }
        }
      `}</style>
    </div>
  )
}

ProductsPage.getInitialProps = async () => {
  const response = await unfetch('http://localhost:3000/api/products')
  const products = await response.json()
  return { products }
}

export default ProductsPage;