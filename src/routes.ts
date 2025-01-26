import { URLController } from './controller/url.controller';
import { Router } from 'express';

const routes = Router();

routes.post('/shorten', new URLController().shorten);
routes.get('/:hash', new URLController().redirect);

export default routes;