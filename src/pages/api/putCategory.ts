import { NextApiRequest, NextApiResponse } from "next";
import { updateCategory } from "@/database/categoryMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PUT') {
        return res.status(405).end(); 
    }

    try {
        const { id } = req.query;
        const updatedCategoryData = JSON.parse(req.body);
        updateCategory(Number(id), updatedCategoryData);
        res.status(200).json({ message: 'Category updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on updating category' });
    }
}

