import express from 'express';
import routes from '@routes/routes';
import cors from 'cors';

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();

    this.middlewares();
    this.routes()
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes() {
    this.server.use(routes)
  }
}

export default new App().server;
