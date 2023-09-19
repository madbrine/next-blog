import { NextApiRequest, NextApiResponse } from "next";
import { addPublication } from "@/database/publicationsMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const publicationData = JSON.parse(req.body);
        addPublication(publicationData);
        res.status(201).json({ message: 'Publication added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the publication' });
    }
}