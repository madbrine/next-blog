import Database from "better-sqlite3";

export const db = new Database('database.db');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    userName TEXT,
    imageUrl TEXT,
);

CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY,
    imageUrl TEXT,
    text TEXT
);

CREATE TABLE IF NOT EXISTS publications (
    id INTEGER PRIMARY KEY,
    userId: INTEGER,
    categoryId INTEGER,
    date TEXT,
    updateDate TEXT,
    header TEXT,
    description TEXT,
    imageUrl TEXT,
    views INTEGER,
    likes INTEGER,
    comments INTEGER,
    content TEXT, -- JSON
    commentaries TEXT -- JSON
);

`);
