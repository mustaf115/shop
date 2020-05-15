import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Header from '../../comps/Header'
import Product from '../../comps/Product'
import Container from '../../comps/Container'

const ProductPage = ({ product }) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Product product={product} />

      </main>

      <style jsx>{`
        .containerX {
          max-width: 1200px;
          margin: 0 auto;
        }
        .title {
          text-align: center;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  )
}

export const getServerSideProps = async context => {
  const response = await unfetch('http://localhost:3000/api/products/' + context.params.id)
  const product = await response.json()
  return { props: { product } }
}

export default ProductPage