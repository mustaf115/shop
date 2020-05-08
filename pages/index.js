import Head from 'next/head'
import Header from '../comps/Header'

export default () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1 className="title">
          Welcome to hardware store!
        </h1>

        
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .title {
          text-align: center;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>
    </div>
  )
}
