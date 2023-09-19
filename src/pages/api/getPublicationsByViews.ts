import { NextApiRequest, NextApiResponse } from "next";
import { getPublicationsByViews } from "@/database/publicationsMethods"; // Import your getPublicationsByViews function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const { value } = req.query;

        if (!value || isNaN(Number(value))) {
            return res.status(400).json({ error: 'Invalid value' });
        }

        const publications = getPublicationsByViews(Number(value));

        res.status(200).json(publications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on fetching' });
    }
}