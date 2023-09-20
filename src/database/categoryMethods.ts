import { ICategory } from "@/common/types/ICategory";
import { db } from "./db";

//добавление категории
export function addCategory(category: Omit<ICategory, 'id'>) {
    const stmt = db.prepare('INSERT INTO categories (imageUrl, text) VALUES (?, ?)');
    const result = stmt.run(category.imageUrl, category.text);
}
//обновление категории по id
export function updateCategory(id: number, updatedCategory: ICategory) {
    const stmt = db.prepare('UPDATE categories SET imageUrl = ?, text = ? WHERE id = ?');
    const result = stmt.run(updatedCategory.imageUrl, updatedCategory.text, id);
}
//удаление категории по id
export function deleteCategory(id: number) {
    const stmt = db.prepare('DELETE FROM categories WHERE id = ?');
    const result = stmt.run(id);
}
// получение всего списка категорий
export function getCategories(): ICategory[] {
    const stmt = db.prepare('SELECT * FROM categories');
    return stmt.all() as ICategory[];
}