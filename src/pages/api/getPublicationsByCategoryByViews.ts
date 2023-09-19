import { NextApiRequest, NextApiResponse } from "next";
import { getPublicationsByCategoryByViews } from "@/database/publicationsMethods"; // Import your getPublicationsByCategoryByViews function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end(); // Method not allowed
    }

    try {
        const { categoryId, value } = req.query;

        if (!categoryId || isNaN(Number(categoryId)) || !value || isNaN(Number(value))) {
            return res.status(400).json({ error: 'Invalid categoryId or value' });
        }

        const publications = getPublicationsByCategoryByViews(Number(categoryId), Number(value));

        res.status(200).json(publications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on fetching' });
    }
}