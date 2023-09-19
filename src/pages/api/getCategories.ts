import { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "@/database/categoryMethods"; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const categories = getCategories();

        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on fetching categories' });
    }
}