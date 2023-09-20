import { NextApiRequest, NextApiResponse } from "next";
import { deletePublication } from "@/database/publicationsMethods"; // Import your deletePublication function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        return res.status(405).end();
    }
    try {
        const { id } = req.query;
        deletePublication(Number(id));
        return res.status(200).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the publication' });
    }
}