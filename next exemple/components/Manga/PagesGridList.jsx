import Link from "next/link"
import ZoomImages from "@/components/Manga/ZoomImages"

const PagesGridList = ({ chapterList, id, ch }) => {

    return (
        <div className="relative space-y-4">
            <div className=" z-10 top-0 right-0  w-full flex gap-1 flex-row h-max overflow-x-scroll">
                {chapterList.chapterListIds.reverse().map((val) => (
                    <Link
                        href={`/manga/${id}/${val.id}`}
                        className={` text-white rounded hover:bg-red-400 ease-in-out duration-500 p-3 ${ch === val.id ? "bg-red-400" : "bg-base-300"} whitespace-nowrap w-max`}>
                        {val.name}
                    </Link>
                ))}
            </div>
            <div className="h-max lg:h-[65svh] w-full overflow-y-scroll">
                <ZoomImages images={chapterList.images} />
            </div>
        </div>
    )
}

export default PagesGridList