const { handler:graphql } = require('../lib/graphql')
const event = require('./events/graphql.json')

test('make sure graphql returns appropriate payload', ()=>
  graphql(event, null, (err, {body}) =>
    expect(body).toBe('{"data":{"user":{"name":"bob"}}}' )
  )
)
