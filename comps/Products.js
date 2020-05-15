import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Products = ({ products = [] }) => {
  const query = useRouter().query
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [isThanksOpen, setIsThanksOpen] = useState(false)

  const handleQuickView = e => {
    e.preventDefault()
    setIsQuickViewOpen(!isQuickViewOpen)
  }
  const handleThanks = e => {
    e.preventDefault()
    setIsThanksOpen(!isThanksOpen)
    console.log(isThanksOpen)
  }

  return (
    <main className="products">
      {
        products
          .filter( product => !query.category || product.category.includes(query.category))
          .map( product => (
          <Link href="/products/[id]" as={`/products/${product.id}`} key={product.id}>
            <a>
              <article className="product">
                { product.isDiscounted && <div className="discount-rate">-{product.discountRate}%</div> }
                <img src={product.images[0]} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                  { product.isDiscounted && <span className="discounted">${product.price}</span> }
                  { product.isDiscounted ? <span>${product.discountPrice}</span> : <span>${product.price}</span> }
                </p>
                <div className="buttons">
                  <button onClick={handleQuickView} className="btn btn-view">Quick view</button>
                  <button onClick={handleThanks} className="btn btn-tocart">Add to cart</button>
                </div>
              </article>  
            </a>
          </Link>
        ))
      }
      <style jsx>{`
        .products {
          padding: 0 10px;
          display: grid;
          grid-template-rows: repeat(auto-fill);
          column-gap: 10px;
          row-gap: 20px;
          grid-area: products;
        }
        .product {
          padding: 20px 0;
          display: flex;
          align-items: center;
          flex-direction: column;
          position: relative;
          border-bottom: 1px solid #EEE;
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
          .products {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .product {
            padding: 20px 0 0;
            box-shadow: 0 0 15px #EEE;
            border: none;
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
}

export default Products
