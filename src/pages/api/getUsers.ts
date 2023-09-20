import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "@/database/userMethods";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const users = getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error on fetching users' });
    }
}