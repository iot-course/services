
## `http ⇒ λ graphQL ⇒ cb`


responds to graphQL query


**Callback / External Call:**

```js
graphql(schema, query)
```

arg / param | type | path
--- | --- | ---
`query` | `Object` | `event.body`
`schema` | `Object` | `new GraphQLSchema({ query:queryType })`
<br/> 

## `http ⇒ λ hello ⇒ cb`


GETs this message `hi 🤖 ☁️ 📱` and standard event payload


**Callback / External Call:**

```js
cb({ ...data, ...e })
```

arg / param | type | path
--- | --- | ---
`event` | `Object` | `event`
`data` | `Object` | `const [err, data] = await getRequest(url)`
<br/> 
