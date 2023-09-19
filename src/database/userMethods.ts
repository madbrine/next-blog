import { ICategory } from "@/common/types/ICategory";
import { IPublication } from "@/common/types/IPublication";
import { IUser } from "@/common/types/IUser";
import { db } from "./db";

// добавление пользователя
export function addUser(user: IUser) {
    const stmt = db.prepare('INSERT INTO users (userName, imageUrl) VALUES (?, ?)');
    const result = stmt.run(user.userName, user.imageUrl);
}
// получение пользователя
export function getUserById(userId: number): IUser | null {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
    const user = stmt.get(userId);

    return user as IUser | null;
}
// получение всего списка пользователей
export function getUsers(): IUser[] {
    const stmt = db.prepare('SELECT * FROM users');
    const rows = stmt.all();

    return rows as IUser[];
}
