require('dotenv').config();

import express from 'express';
import cors from 'cors';

import { dataSource } from './data-source';
import { URLController } from './controller/url.controller';

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")

    const api = express();
    api.use(cors());
    api.use(express.json());

    const urlControler = new URLController();

    api.post('/shorten', urlControler.shorten);
    api.get('/:hash', urlControler.redirect);

    const port = process.env.port || 5000;

    api.listen(port, () => console.log('Express listening'));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  });

