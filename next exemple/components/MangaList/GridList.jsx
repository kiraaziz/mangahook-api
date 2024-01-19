"use client"
import { useRouter, useSearchParams } from "next/navigation"
import useMangaList from "@/hooks/manga/useMangaList"
import { useLayoutEffect, useState } from "react"
import { redirectUrlGenerator } from "@/hooks/utils/redirectUrlGenerator"
import Card from "./Card"
import { Pagination } from "@nextui-org/react"

const List = ({ dataList, metaData }) => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [totalMangaPages, setTotalMangaPages] = useState(metaData.totalPages)
    const [mangeList, setMangaList] = useState(dataList)

    const loadData = async () => {
        setLoading(true)
        try {

            const data = await useMangaList(redirectUrlGenerator(searchParams, metaData, "", ""))
            setTotalMangaPages(data.metaData.totalPages)
            setMangaList(data.mangaList)

        } catch (e) {
            alert("Something go wrong " + e)
        }
        setLoading(false)
    }

    const handleRedirect = (f, e) => {

        router.push(redirectUrlGenerator(searchParams, metaData, f, e))
    }

    // useLayoutEffect(() => {
    //     loadData()
    // }, [searchParams])

    return (
        <>
            <div className="gap-3 h-max w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 p-4 bg-transparent ">
                {mangeList && mangeList.map((val, index) => (<Card val={val} index={index + 1} />))}
                <div className="col-span-full flex justify-end pt-3 pr-4">
                    <Pagination total={totalMangaPages} variant="light" classNames={{
                        item: "w-8 h-8 text-small bg-transparent text-white hover:text-black",
                        cursor:
                            "w-8 h-8 text-small bg-red-400",
                    }} onChange={(e) => handleRedirect("page", e)} />
                </div>
            </div>
            {loading &&
                <div style={{ zIndex: 99999 }} className="w-screen h-[100svh] fixed top-0 left-0 backdrop-blur-xl flex items-center justify-center z-50">
                    <img src="/loading.gif" className="w-56" />
                </div>
            }
        </>
    )
}

export default List