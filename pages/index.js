import Head from 'next/head'
import Header from '../comps/Header'
import Container from '../comps/Container'

export default () => {
  return (
    <Container>
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
        .title {
          text-align: center;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>
    </Container>
  )
}
