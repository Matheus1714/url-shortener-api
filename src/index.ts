import { connect } from 'mongoose';
import { config } from './config/Constants';
import express from 'express'
import { URLController } from './controller/URLControle'
import { MongoConnection } from './database/MongoConnection'

require('dotenv').config()

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlControler = new URLController()
api.post('/shorten', urlControler.shorten)
api.get('/:hash', urlControler.redirect)

api.listen(5000, () => console.log('Express listening'))
