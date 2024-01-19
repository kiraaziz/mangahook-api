"use client"

import Link from "next/link"

const ChapterGridList = ({ chapterList, id, ch }) => {


    return (
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 py-3 lg:px-3 overflow-auto lg:h-[80svh]">
            {chapterList.map((val) => (
                <Link
                    href={`/manga/${id}/${val.id}`}
                    className={` text-white rounded hover:bg-red-400 ease-in-out duration-500 p-3 ${ch === val.id ? "bg-red-400" : "bg-base-300"}`}>
                    {val.name}
                </Link>
            ))}
        </div>
    )
}

export default ChapterGridList