import { NextApiRequest, NextApiResponse } from "next";
import { addCategory } from "@/database/categoryMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(); 
    }

    try {
        const categoryData = JSON.parse(req.body);
        addCategory(categoryData);

        res.status(201).json({ message: 'Category added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on adding category' });
    }
}