import useMangaSearch from "@/hooks/manga/useMangaSearch"
import GridList from "@/components/MangaList/GridList"

const MangaList = async ({ params }) => {

    const mangaData = await useMangaSearch(params.id)

    return (
        <GridList
            id={params.id}
            dataList={mangaData.mangaList}
            metaData={mangaData.metaData}
        />
    )
}

export default MangaList

