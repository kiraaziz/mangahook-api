"use client"
import { useRouter, useSearchParams } from "next/navigation"
import useMangaList from "@/hooks/manga/useMangaList"
import { useLayoutEffect, useState } from "react"
import { redirectUrlGenerator } from "@/hooks/utils/redirectUrlGenerator"
import Card from "./../MangaList/Card"
import { Pagination } from "@nextui-org/react"
import useMangaSearch from "@/hooks/manga/useMangaSearch"

const List = ({ dataList, metaData }) => {


    const [loading, setLoading] = useState(false)
    const [totalMangaPages, setTotalMangaPages] = useState(metaData ? metaData.totalPages : 0)
    const [mangeList, setMangaList] = useState(dataList)

    const handleRedirect = async(e) => {
        setLoading(true)
        try {

            const data = await useMangaSearch(`/${id}?page=${e}`)
            setMangaList(data.mangaList)

        } catch (e) {
            alert("Something go wrong " + e)
        }
        setLoading(false)
    }

    return (
        <>
            <div className="gap-3 h-max w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 p-4 bg-transparent ">
                {mangeList && mangeList.map((val, index) => (<Card val={val} index={index + 1} />))}
                <div className="col-span-full flex justify-end pt-3 pr-4">
                    <Pagination total={totalMangaPages} variant="light" classNames={{
                        item: "w-8 h-8 text-small bg-transparent text-white hover:text-black",
                        cursor:
                            "w-8 h-8 text-small bg-red-400",
                    }} onChange={(e) => handleRedirect(e)} />
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