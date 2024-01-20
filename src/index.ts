import express from 'express'
import cors from 'cors'
import { URLController } from './controller/URLControle'
import { MongoConnection } from './database/MongoConnection'

require('dotenv').config()

const api = express()
api.use(cors())
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlControler = new URLController()

api.post('/shorten', urlControler.shorten)
api.get('/:hash', urlControler.redirect)

const port = process.env.port || 5000

api.listen(port, () => console.log('Express listening'))
