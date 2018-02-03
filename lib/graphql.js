/**
 * responds to graphQL query
 * @summary http ⇒ λ graphQL ⇒ cb
 * @arg {Object} query - event.body
 * @arg {Object} schema - new GraphQLSchema({ query:queryType })
 * @external  graphql(schema, query)
 */

const { graphql, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql')

const fakeDB = {
  a: { id: 'a', name: 'alice' },
  b: { id: 'b', name: 'bob' },
}


const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  },
})


const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: { user: {
    type: userType,
    args: { id: { type:  GraphQLID } },
    resolve: (_, { id }) => fakeDB[id],
  } },
})


const schema = new GraphQLSchema({ query:queryType })


exports.handler = async (e, _, cb) => {
  const { query } = JSON.parse(e.body)
  const [err, data] = await graphql(schema, query)
  .then( datum => [null, datum])
  .catch( error => [error])

  data
    ? cb(null, {
        statusCode: 200,
        body: JSON.stringify(data),
      })
    : cb(err)
}
