import express from 'express'
import chalk from 'chalk'
import moment from 'moment'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const rootValue = {
  hello: () => 'Hello Apollo :)'
}

const log = (message) => {
  console.log(
    chalk.white.bgGreen(` ${moment(Date.now()).format('LT')} `) +
    chalk.green(` Server: ${message}.`))
}

const app = express()

app.use(cors())
app.use(express.static(path.resolve(__dirname, '../../dist')))
app.use(bodyParser.json())

// Logging
app.use((req, res, next) => {
  log(`Requested ${req.path}`)
  next()
})

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

app.listen(9000)

console.log('\n\n')
log('Listening on port 9000')
console.log('\n\n')