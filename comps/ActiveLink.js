import React from 'react';
import { useRouter } from 'next/router'

const ActiveLink = ({ children, href }) => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li className={ router.pathname === href ? 'active' : '' }>
      <a href={href} onClick={handleClick}>
      {children}
      </a>
      <style jsx>{`
        li {
          position: relative;
          font-size: 1.3rem;
          font-weight: bold;
          ${ router.pathname === href ? `
          border-bottom: 2px solid #555;
          color: #333;
          ` : '' }
        }
        li:hover {
          color: #333;
        }
        a {
          padding: 5px 10px;
          display: block;
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </li>
  );
}

export default ActiveLink;