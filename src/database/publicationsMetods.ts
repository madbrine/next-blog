import { IPublication } from "@/common/types/IPublication";
import { IPublicationsList } from "@/common/types/IPublicationsList";
import { db } from "./db";

// получение публикации по ID
export function getPublicationById(id: number): IPublication | null {
    const stmt = db.prepare('SELECT * FROM publications WHERE id = ?');
    const row = stmt.get(id) as Record<string, unknown>;
    if (!row) {
        return null;
    }
    const publication: IPublication = {
        id: row.id as number,
        userId: row.userId as number,
        categoryId: row.categoryId as number,
        date: row.date as string,
        updateDate: row.updateDate as string,
        header: row.header as string,
        description: row.description as string,
        imageUrl: row.imageUrl as string | undefined,
        views: row.views as number,
        likes: row.likes as number,
        comments: row.comments as number,
        content: row.content ? JSON.parse(row.content as string) : null,
        commentaries: row.commentaries ? JSON.parse(row.commentaries as string) : null,
    };
    return publication;
}


export function addPublication(publication: IPublication) {
    const stmt = db.prepare('INSERT INTO publications (userId, categoryId, date, update, header, description, imageUrl, views, likes, comments, content, commentaries) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    const result = stmt.run(
        publication.userId,
        publication.categoryId,
        publication.date,
        publication.updateDate,
        publication.header,
        publication.description,
        publication.imageUrl,
        publication.views,
        publication.likes,
        publication.comments,
        JSON.stringify(publication.content),
        JSON.stringify(publication.commentaries)
    );
}

// обновление публикации по ID
export function updatePublication(id: number, updatedPublication: IPublication) {
    const stmt = db.prepare('UPDATE publications SET userId = ?, categoryId = ?, date = ?, update = ?, header = ?, description = ?, imageUrl = ?, views = ?, likes = ?, comments = ?, content = ?, commentaries = ? WHERE id = ?');
    const result = stmt.run(
        id,
        updatedPublication.userId,
        updatedPublication.categoryId,
        updatedPublication.date,
        updatedPublication.updateDate,
        updatedPublication.header,
        updatedPublication.description,
        updatedPublication.imageUrl,
        updatedPublication.views,
        updatedPublication.likes,
        updatedPublication.comments,
        JSON.stringify(updatedPublication.content),
        JSON.stringify(updatedPublication.commentaries)
    );
}
// удаление публикации по id
export function deletePublication(id: number) {
    const stmt = db.prepare('DELETE FROM publications WHERE id = ?');
    const result = stmt.run(id);
}
// получение последних 10 публикаций
export function getPublicationsList(value: number): IPublicationsList {
    const stmt = db.prepare('SELECT id, userId, categoryId, date, updateDate, header, description, imageUrl, views, likes, comments FROM publications WHERE id > ? ORDER BY id ASC LIMIT 10');
    const rows = stmt.all(value);
    const totalStmt = db.prepare('SELECT COUNT(*) as total FROM publications');
    const totalCount = totalStmt.pluck().get() as number;

    return { publications: rows as Omit<IPublication, 'content' | 'commentaries'>[], totalCount };
}

// получение последних 10 публикаций конкретной категории
export function getAllPublicationsByCategory(categoryId: number, value: number): IPublicationsList {
    const stmt = db.prepare('SELECT id, userId, categoryId, date, updateDate, header, description, imageUrl, views, likes, comments FROM publications WHERE categoryId = ? AND id > ? ORDER BY id ASC LIMIT 10');
    const rows = stmt.all(categoryId, value);
    const totalStmt = db.prepare('SELECT COUNT(*) as total FROM publications WHERE categoryId = ?');
    const totalCount = totalStmt.pluck().get(categoryId) as number;

    return { publications: rows as Omit<IPublication, 'content' | 'commentaries'>[], totalCount };
}

// получение самых просматриваемых 10 публикаций
export function getAllPublicationsByViews(value: number): IPublicationsList {
    const stmt = db.prepare('SELECT id, userId, categoryId, date, updateDate, header, description, imageUrl, views, likes, comments FROM publications WHERE views > ? ORDER BY views DESC, id ASC LIMIT 10');
    const rows = stmt.all(value);
    const totalStmt = db.prepare('SELECT COUNT(*) as total FROM publications');
    const totalCount = totalStmt.pluck().get() as number;

    return { publications: rows as Omit<IPublication, 'content' | 'commentaries'>[], totalCount };
}
//получение самых просматриваемых 10 публикаций конкретной категории
export function getAllPublicationsByCategoryByViews(categoryId: number, value: number): IPublicationsList {
    const stmt = db.prepare('SELECT id, userId, categoryId, date, updateDate, header, description, imageUrl, views, likes, comments FROM publications WHERE categoryId = ? AND views > ? ORDER BY views DESC, id ASC LIMIT 10');
    const rows = stmt.all(categoryId, value);
    const totalStmt = db.prepare('SELECT COUNT(*) as total FROM publications WHERE categoryId = ?');
    const totalCount = totalStmt.pluck().get(categoryId) as number;

    return { publications: rows as Omit<IPublication, 'content' | 'commentaries'>[], totalCount };
}

//добавление комментария
export function addCommentToPublication(publicationId: number, comment: { name: string; date: string; text: string }) {

    const stmt = db.prepare('SELECT commentaries FROM publications WHERE id = ?');
    const existingCommentariesStr = stmt.pluck().get(publicationId);

    let existingCommentaries = [];
    if (typeof existingCommentariesStr === 'string' && existingCommentariesStr.trim() !== '') {
        //проверка json
        existingCommentaries = JSON.parse(existingCommentariesStr);
        if (!Array.isArray(existingCommentaries)) {
            existingCommentaries = [];
        }
    }

    existingCommentaries.push(comment);

    const updateStmt = db.prepare('UPDATE publications SET commentaries = ? WHERE id = ?');
    const result = updateStmt.run(JSON.stringify(existingCommentaries), publicationId);
}