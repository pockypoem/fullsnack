import { Request, Response } from "express";

interface IController {
    index(req: Request, res:Response) : Response;  // TODO: untuk menampilkan list data 
    create(req: Request, res:Response) : Response; //TODO: untuk membuat data
    show(req: Request, res:Response) : Response; //TODO: untuk menampilkan satu data
    update(req: Request, res:Response) : Response; //TODO: untuk update data
    delete(req: Request, res:Response) : Response; //TODO: untuk hapus data
}

export default IController;