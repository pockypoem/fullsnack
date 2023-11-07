import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
// import database
const db = require("../db/models"); //ambil index.js


class AuthController{
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        const hashedPassword : string = await Authentication.passwordHash(password);

        // db.user => dari user.js
        await db.user.create({username, password: hashedPassword });

        return res.send("registrasi berhasil");
    }

    login = async (req: Request, res: Response): Promise<Response> => {

        // TODO: cari data user by username
        let { username, password } = req.body;

        const user = await db.user.findOne({
            where: { username }
        });


        // TODO: check password
        let compare = await Authentication.passwordCompare(password, user.password);

        // TODO: Generate Token
        if(compare) {
            let token = Authentication.generateToken(user.id, username, user.password);
            return res.send({
                token
            });
        }

        return res.send("auth failed!");


    }


    profile = (req: Request, res: Response) => {
        return res.send(req.app.locals.credential);
    }

    
}

export default new AuthController();