import { getPublicationById } from "@/database/publicationsMetods";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const { id } = req.query;

    if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'Неверный ID публикации' });
    }

    const publication = getPublicationById(parseInt(id));

    if (!publication) {
        return res.status(404).json({ error: 'Публикация не найдена' });
    }

    res.status(200).json(publication);
}