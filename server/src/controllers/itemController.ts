import knex from "../database/connection";
import { Request, Response } from "express";

class ItemController {
    async index(request: Request, response: Response) {

        const items = await knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.Image}`,
            }
        });
        return response.status(200).json(serializedItems);

    }
}

export default ItemController;