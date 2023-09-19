import { NextApiRequest, NextApiResponse } from "next";
import { deleteCategory } from "@/database/categoryMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        return res.status(405).end();
    }
    try {
        const { id } = req.query;
        deleteCategory(Number(id));
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error on deleting category' });
    }
}