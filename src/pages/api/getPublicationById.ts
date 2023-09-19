import { NextApiRequest, NextApiResponse } from "next";
import { getPublicationById } from "@/database/publicationsMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
        const idParam = req.query.id as string;
        const id = parseInt(idParam);

        if (isNaN(id)) {
            return res.status(400).json({ error: 'Incorrect publication ID' });
        }
        const publication = await getPublicationById(id);
        
        if (!publication) {
            return res.status(404).json({ error: 'Publication not found' });
        }
        res.status(200).json(publication);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}