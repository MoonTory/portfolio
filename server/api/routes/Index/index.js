import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requesto to /'
  });
});

export default router;