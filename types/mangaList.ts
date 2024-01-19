interface mangaList {
    mangaList: [
        {
            id: string,
            imafge: string,
            title: string,
            chapter: string,
            view: string,
            description: string
        }
    ],
    metaData: {
        totalStories: number,
        totalPages: number,
        type: [
            {
                id: string,
                type: string
            }
        ],
        state: [
            {
                id: string,
                type: string
            }
        ],
        category: [
            {
                id: string,
                type: string
            }
        ],
    }
}