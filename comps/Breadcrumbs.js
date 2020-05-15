import Link from 'next/link'

const Breadcrumbs = ({ categories }) => (
  <div className="breadcrumbs">
    <Link href="/products"><a>products</a></Link>
    {
      categories
        .map( category => <> / <Link href={`/products?category=${category}`}><a>{category}</a></Link></> )
    }
    <style jsx>{`
      .breadcrumbs {
        margin: 20px 0 5px;
        color: #AAA;
      }
      .breadcrumbs a:hover {
        color: #888;
      }
    `}</style>
  </div>
)

export default Breadcrumbs