"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
// Routers
const UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        (0, dotenv_1.config)();
    }
    plugins() {
        // Untuk melihat isi parameter dari sebuah request
        this.app.use(body_parser_1.default.json()); // express akan menggunakan library bernama bodyParser
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Ini adalah route menggunakan TS OOP");
        });
        this.app.use("/api/v1/users", UserRoutes_1.default);
    }
}
const PORT = 8000;
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Aplikasi ini berjalan di port ${PORT}`);
    console.log(process.env.DB_USER);
});
// const app = express();
// const PORT = 8000;
// app.route("/").get((req: Request, res: Response) => {
//   res.status(200).send("Halooww");
// });
// app.listen(PORT, () => {
//   console.log(`Server listening on Port ${PORT}`);
// });
