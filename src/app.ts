import express, { Request, Response } from'express';
import { ProductRoute } from './modules/product.route';
const app = express()

app.use(express.json());

app.use("/api/products", ProductRoute);

app.get('/', (req: Request, res:Response) => {
  res.send('Hey welcome all you  World!')
})
export default app;

