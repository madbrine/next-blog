import { NextApiRequest, NextApiResponse } from "next";
import { addCommentToPublication } from "@/database/publicationsMethods"; // Import your addCommentToPublication function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const { publicationId } = req.query;
        const commentData = req.body;

        if (!publicationId || isNaN(Number(publicationId))) {
            return res.status(400).json({ error: 'Invalid publicationId' });
        }

        if (!commentData || typeof commentData !== 'object') {
            return res.status(400).json({ error: 'Invalid comment data' });
        }

        addCommentToPublication(Number(publicationId), commentData);

        res.status(201).json({ message: 'Comment added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on adding comment' });
    }
}