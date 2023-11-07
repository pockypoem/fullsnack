import { Request, Response } from "express";
// import database
const db = require("../db/models"); //ambil index.js


class AuthController{
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        // db.user => dari user.js
        const createdUser = await db.user.create({
            username, password
        });

        return res.send("registrasi berhasil");
    }

    login(req: Request, res: Response): Response {

        return res.send("Create Success");
    }
    
}

export default new AuthController();