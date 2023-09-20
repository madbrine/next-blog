import { ICategory } from "@/common/types/ICategory";
import { addCategory } from "@/database/categoryMethods";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(); 
    }
    try {
        const categoryData = req.body;
        if (categoryData) {
            addCategory(categoryData);
            res.status(201).json({ message: 'Category added successfully' });
        } else {
            res.status(400).json({ error: 'Invalid JSON format' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on adding category' });
    }
}