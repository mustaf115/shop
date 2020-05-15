import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Header from '../../comps/Header'
import Container from '../../comps/Container'
import Products from '../../comps/Products'
import Filters from '../../comps/Filters'

const ProductsPage = ({ products }) => {
  return (
    <Container>
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
        <Products products={products} />
      </section>

      <style jsx>{`
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
    </Container>
  )
}

export const getServerSideProps = async () => {
  const response = await unfetch('http://localhost:3000/api/products')
  const products = await response.json()
  return { props: { products } }
}

export default ProductsPage;
