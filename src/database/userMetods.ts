import { ICategory } from "@/common/types/ICategory";
import { IPublication } from "@/common/types/IPublication";
import { IUser } from "@/common/types/IUser";
import { db } from "./db";

// добавление пользователя
export function addUser(user: IUser) {
    const stmt = db.prepare('INSERT INTO users (userName, imageUrl) VALUES (?, ?)');
    const result = stmt.run(user.userName, user.imageUrl);
}

// получение всего списка пользователей
export function getAllUsers(): IUser[] {
    const stmt = db.prepare('SELECT * FROM users');
    const rows = stmt.all();

    return rows as IUser[];
}
