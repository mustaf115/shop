const get = (req, res) => {
  res.send(req.cookies)
}

const post = (req, res) => {
  res.setHeader('Set-Cookie', `time=${new Date().toLocaleTimeString()}; Max-Age=3600`)
  res.end()
}

export default (req, res) => {
  if(req.method === 'GET') return get(req, res)
  if(req.method === 'POST') return post(req, res)
}