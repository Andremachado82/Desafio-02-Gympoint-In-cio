import { Router } from 'express';

const routes = new Router();

routes.get('/user', (req, res) => {
  return res.json({ message: 'André Luis Machado' });
});

export default routes;
