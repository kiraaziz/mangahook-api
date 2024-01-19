import useManga from "@/hooks/manga/useManga"
import ChapterGridList from "@/components/Manga/ChaptersGridList"

export const generateMetadata = async ({ params }) => {

    const mangaData = await useManga(params.id)

    return {
        title: mangaData.name
    }
}

const MangaPage = async ({ params }) => {

    const mangaData = await useManga(params.id)

    return (
        <ChapterGridList
            id={params.id}
            chapterList={mangaData.chapterList.reverse()}
        />
    )
}

export default MangaPage