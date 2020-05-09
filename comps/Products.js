const Products = ({ products = [] }) => (
  <main className="products">
    {
      products.map( product => (
        <article className="product" key={product.id}>
          { product.isDiscounted && <div className="discount-rate">-{product.discountRate}%</div> }
          <img src={product.images[0]} alt={product.name} />
          <h3>{product.name}</h3>
          <p>
            { product.isDiscounted && <span className="discounted">${product.price}</span> }
            { product.isDiscounted ? <span>${product.discountPrice}</span> : <span>${product.price}</span> }
          </p>
          <div className="buttons">
            <button className="btn btn-view">Quick view</button>
            <button className="btn btn-tocart">Add to cart</button>
          </div>
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
        padding: 10px 0 0;
        display: flex;
        position: relative;
        align-items: center;
        flex-direction: column;
        transition: .3s;
        cursor: pointer;
      }
      .product > img {
        height: 100px;
      }
      .discount-rate {
        position: absolute;
        top: 25px;
        right: 25px;
        color: white;
        z-index: 1;
      }
      .discount-rate::before,
      .discount-rate::after {
        content: '';
        width: 40px;
        height: 40px;
        background: #D00;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
        z-index: -2;
      }
      .discount-rate::before {
        transform: rotate(45deg);
      }
      .discounted {
        margin-right: 1em;
        position: relative;
        color: #D00;
      }
      .discounted::after {
        content: '';
        border-bottom: 2px solid #D00;
        position: absolute;
        top: 40%;
        right: -5px;
        left: -5px;
        transform: rotate(30deg);
      }
      .buttons {
        width: 100%;
        display: flex;
      }
      .btn {
        padding: 10px 0;
        border: none;
        border-radius: 0;
        flex: 1;
        color: white;
        font-size: 16px;
        cursor: pointer;
      }
      .btn-view {
        background: #BBB;
      }
      .btn-tocart {
        background: #E00;
      }

      @media(min-width: 720px) {
        .product {
          box-shadow: 0 0 15px #EEE;
        }
        .product:hover {
          box-shadow: 0 0 15px #CCC;
        }
        .btn-view:hover,
        .btn-view:active,
        .btn-view:focus {
          background: #AAA;
        }
        .btn-tocart:hover,
        .btn-tocart:active,
        .btn-tocart:focus {
          background: #D00;
        }
      }
    `}</style>
  </main>
)

export default Products
