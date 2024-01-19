interface manga {
    imageUrl: string,
    name: string,
    author: string,
    status: string,
    updated: string,
    view: string,
    genres: [string],
    chapterList: [
        {
            id: string,
            path: string,
            name: string,
            view: string,
            createdAt: string
        }
    ]
}