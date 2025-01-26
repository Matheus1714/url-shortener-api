require('dotenv').config();

import express from 'express';
import cors from 'cors';

import { dataSource } from './data-source';
import routes from './routes'

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")

    const api = express();

    api.use(cors());
    api.use(express.json());

    api.use(routes);

    api.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  });

