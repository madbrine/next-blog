export interface IComment {
    publicationId: number,
    commentData: {
        name: string,
        date: string,
        text: string,
    }
}