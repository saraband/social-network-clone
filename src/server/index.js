import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import graphQLHttp from 'express-graphql'
import morgan from 'morgan'
import schema from './schema'
import log from './log'

const app = express()
app.disable('x-powered-by-x')

/* GRAPHQL */
app.use(cors())
app.use('/graphql', graphQLHttp({
  schema,
  pretty: true,
  graphiql: true
}))

/* LOGGING */
app.use(morgan('tiny'))

/* OTHERS MIDDLEWARES */
app.use(express.static(path.resolve(__dirname, '../../dist')))
app.use(bodyParser.json())

/* TEST */
app.get('/test', (req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end('This is a test')
})

app.listen(3000, () => {
  log.server('Listening on port 3000')
})
