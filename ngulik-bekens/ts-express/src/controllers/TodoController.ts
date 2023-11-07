import { Request, Response } from "express";
import IController from "./ControllerInterface";


class TodoController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("index todo");
    }

    create(req: Request, res: Response): Response {
        return res.send("Create todo");
    }
    
    show(req: Request, res: Response): Response {
        return res.send("show todo");
    }

    update(req: Request, res: Response): Response {
        return res.send("Update");
    }

    delete(req: Request, res: Response): Response {
        return res.send("delete");
    }
    
}

export default new TodoController();