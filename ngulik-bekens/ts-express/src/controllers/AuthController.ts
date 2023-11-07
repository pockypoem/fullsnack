import { Request, Response } from "express";


class AuthController{
    index(req: Request, res: Response): Response {
        return res.send("");
    }

    create(req: Request, res: Response): Response {

        return res.send("Create Success");
    }
    
}

export default new AuthController();