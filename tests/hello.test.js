const { handler:hello } = require('../lib/hello')
const event = require('./events/hello.json')

test('make sure hello returns appropriate payload', ()=>
  hello(event, null, (err, {body}) =>
    expect(body).toBe('{"message":"hi 🤖 ☁️ 📱 ","a":1}' )
  )
)
