import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import Header from '../../comps/Header'
import Product from '../../comps/Product'
import Breadcrumbs from '../../comps/Breadcrumbs'
import Container from '../../comps/Container'

const ProductPage = ({ product }) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Breadcrumbs categories={product.categories} />
      <main>
        <Product product={product} />
        <h2 className="table-title">Specifications</h2>
        <table>
          {
            product.specs.map( spec => (
              <tr>
                <td>{spec[0]}</td>
                <td>{spec[1]}</td>
              </tr>
            ))
          }
        </table>
      </main>

      <style jsx>{`
        .table-title {
          text-align: center;
        }
        table {
          border-collapse: collapse;
          margin: 0 auto;
        }
        td {
          min-width: 100px;
          padding: 5px 10px;
          border: 1px solid black;
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