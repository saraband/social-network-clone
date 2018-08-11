import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import log from './log'
import client from './pgclient'
import morgan from 'morgan'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const rootValue = {
  hello: () => 'Hello Apollo :)'
}

const app = express()

// Logging
app.use(morgan('tiny'))

// Others middlewares
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../../dist')))
app.use(bodyParser.json())

// GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

app.get('/test', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello world')
})

process.on('SIGINT', () => {
  client.end().then(() => {
    log.db('Bye bye :(')
  })
})

client.connect().then(() => {
  app.listen(9000)
  console.log('\n\n')
  log.db('Connected on port 4532')
  log.server('Listening on port 9000')
})