import { Client } from 'pg'

export default new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'social-network-clone',
  password: 'password',
  port: 5432,
})