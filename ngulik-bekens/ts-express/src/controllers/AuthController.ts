import { Request, Response } from "express";
import PasswordHash from "../utils/PasswordHash";
// import database
const db = require("../db/models"); //ambil index.js


class AuthController{
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        const hashedPassword : string = await PasswordHash.hash(password);

        // db.user => dari user.js
        await db.user.create({username, password: hashedPassword });

        return res.send("registrasi berhasil");
    }

    login(req: Request, res: Response): Response {

        return res.send("Create Success");
    }
    
}

export default new AuthController();