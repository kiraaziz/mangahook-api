import useManga from "@/hooks/manga/useManga"
import ChapterGridList from "@/components/Manga/ChaptersGridList"
import MangaLayout from "@/components/Manga/MangaLayout"

export const generateMetadata=async({params})=>{

    const mangaData = await useManga(params.id)

    return{
        title: mangaData.name
    }
}

const MangaPage = async ({ params, children }) => {

    const mangaData = await useManga(params.id)

    return (
        <MangaLayout
            name={mangaData.name}
            imageUrl={mangaData.imageUrl}
            author={mangaData.author}
            view={mangaData.view}
            genres={mangaData.genres}
        >
            {children}
        </MangaLayout>
    )
}

export default MangaPage