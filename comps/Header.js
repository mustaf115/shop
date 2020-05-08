import React from 'react'
import Link from './ActiveLink'
import CartButton from './CartButton'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </ul>
      </nav>
      <CartButton />
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #555;
        }
        .nav-links {
          display: flex;
          list-style: none;
        }
        .nav-link {
          padding: 10px 20px;
          border-bottom: 2px solid #555;
          font-size: 1.3rem;
          font-weight: bold;
          cursor: pointer;
        }
        .nav-link:hover {
          color: #333;
        }
      `}</style>
    </header>
  )
}

export default Header