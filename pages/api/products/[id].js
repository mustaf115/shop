import products from './_products'

export default (req, res) => {
  if(req.method === 'POST') res.status(403).json({error: 'Forbidden'})
  const { id } = req.query
  const product = products.find( product => product.id === parseInt(id) )
  if(!product) return res.status(404).json({error: 'Not found'})
  res.json(product)
}
