import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

// Routers
import UserRoutes from "./routers/UserRoutes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    // Untuk melihat isi parameter dari sebuah request
    this.app.use(bodyParser.json()); // express akan menggunakan library bernama bodyParser
    this.app.use(morgan('dev'));

    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("Ini adalah route menggunakan TS OOP");
    });

    this.app.use("/api/v1/users", UserRoutes);

    
  }

}

const PORT: number = 8000;
const app = new App().app;

app.listen(PORT, () => {
  console.log(`Aplikasi ini berjalan di port ${PORT}`);
});



// const app = express();
// const PORT = 8000;

// app.route("/").get((req: Request, res: Response) => {
//   res.status(200).send("Halooww");
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on Port ${PORT}`);
// });
