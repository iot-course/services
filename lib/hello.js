const { get } = require('https')

const getRequest = url => new Promise( (resolve, reject) =>
  get(url, res => {
    let body = ''
    res.on('data', d => body += d)
    res.on('end', () => resolve(JSON.parse(body) ) )
    res.on('error', err => reject(err) )
  }),
)
  .then( data => [null, data])
  .catch( err => [err])

exports.handler = async (e, _, cb) => {

  const url = 'https://gist.githubusercontent.com/wordyallen/bf4ce6f3bbc24c6bf948700c9bc82c91/raw/bd2e42ce50bf1c50a1d2ecc7ea934cb1f92fbbac/hi.json'

  const [err, data] = await getRequest(url)

  data
    ? cb(null, {
        statusCode: 200,
        body: JSON.stringify({ ...data, ...e }),
      })
    : cb(err)

}
