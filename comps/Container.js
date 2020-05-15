const Container = ({children}) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

export default Container