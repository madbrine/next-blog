import { NextApiRequest, NextApiResponse } from "next";
import { addUser } from "@/database/userMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const userData = JSON.parse(req.body);
        addUser(userData);
        res.status(201).json({ message: 'User added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the user' });
    }
}