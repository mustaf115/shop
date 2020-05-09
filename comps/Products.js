const Products = ({ products = [] }) => (
  <main className="products">
    {
      products.map( product => (
        <article className="product" key={product.id}>
          <img src={product.images[0]} alt={product.name} />
        </article>
      ))
    }
    <style jsx>{`
      .products {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(auto-fill);
        column-gap: 10px;
        row-gap: 10px;
        grid-area: products;
      }
      .product {

      }
      .product > img {
        height: 100px;
      }

      @media(min-width: 720px) {
        .product {
          box-shadow: 0 0 15px #EEE;
        }
      }
    `}</style>
  </main>
)

export default Products