
## `http ⇒ λ graphQL ⇒ cb`


Responds to graphQL query according to spec


**Callback / External Call:**

```js
graphql(schema, query)
```

arg / param | type | path
--- | --- | ---
`query` | `Object` | `event.body.query`
`schema` | `Object` | `new GraphQLSchema({ query:queryType })`
<br/> 

## `http ⇒ λ hello ⇒ cb`


GETs this message: `hi 🤖 ☁️ 📱` and merges it to the standard http event


**Callback / External Call:**

```js
cb({ ...data, ...e })
```

arg / param | type | path
--- | --- | ---
`event` | `Object` | `event`
`data` | `Object` | `const [err, data] = await getRequest(url)`
<br/> 
