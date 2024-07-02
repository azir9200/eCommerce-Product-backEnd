import express, { Request, Response } from'express';
import { ProductRoute } from './folders/modules/product.route';
import notFound from './middleware/notFound';
const app = express()

app.use(express.json());

app.use("/api/products", ProductRoute);

app.get('/', (req: Request, res:Response) => {
  res.send('Hey welcome all you  World!')
});

app.use(notFound);

export default app;

