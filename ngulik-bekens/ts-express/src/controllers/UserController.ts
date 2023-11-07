import { Request, Response } from "express";
import IController from "./ControllerInterface";
// import { ParamsDictionary } from "express-serve-static-core";

let data: any[] = [
    {id: 1, name: "Adi"},
    {id: 2, name: "Budi"},
    {id: 3, name: "Kevin"},
    {id: 4, name: "Vano"}
];


class UserController implements IController {
    index(req: Request, res: Response): Response {
        console.log("Ini adalah index users");
        return res.send(data);
    }

    create(req: Request, res: Response): Response {
        const { id, name } = req.body;

        data.push({ id, name });

        return res.send("Create Success");
    }
    
    show(req: Request, res: Response): Response {
        const { id } = req.params;

        let person = data.find(item => item.id == id);
        return res.send(person);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;

        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send("Update Success");
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        let people = data.filter(item => item.id != id);
        return res.send(people);
    }
    
}

export default new UserController();