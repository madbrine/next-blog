export interface IPublication  {
    id: number,
    userId: number,
    categoryId: number,
    date: string,
    updateDate: string,
    header: string,
    description: string,
    imageUrl?: string,
    views: number,
    likes: number,
    comments: number,
    content?: {
        type: string,
        data: string,
    }[] | null,
    commentaries?: {
        name: string,
        date: string,
        text: string,
    }[] | null
}