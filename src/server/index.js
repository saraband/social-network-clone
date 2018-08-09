import express from 'express'
import chalk from 'chalk'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))
app.use(bodyParser.json())

app.get('/test', (req, res) => {
  res.setHeader('Content-Type', 'plain/text')
  res.end('Hello world')
})

app.listen(9000)

console.log('\n\n')
console.log(chalk.white.bgGreen('Server:') + chalk.green(' Listening on port 9000.'))
console.log('\n\n')