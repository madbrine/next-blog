import { NextApiRequest, NextApiResponse } from 'next';
import { getPublicationsList } from '@/database/publicationsMetods';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { value } = req.query;

            const publications = getPublicationsList(Number(value));

            res.status(200).json(publications);
        } catch (error) {
            console.error('Error fetching publications:', error);
            res.status(500).json({ error: 'Error fetching publications' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}