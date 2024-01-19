import Link from "next/link"
import { GiEyeball } from "react-icons/gi"

const MangaLayout = ({ children, name, imageUrl, author, view, genres}) => {


    return (
        <div className="w-full p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 ">
            <h1 className="text-4xl font-semibold text-white lg:hidden block mt-2">{name}</h1>
            <div className="pt-3 lg:h-[75svh]">
                <div className="w-full h-full items-center justify-center grid grid-cols-2 ">
                    <img className="object-cover bg-white rounded-md mx-auto" src={imageUrl} />
                    <div className="flex-1 overflow-auto px-3 h-max lg:px-0">
                        <h1 className="text-4xl font-semibold text-white hidden lg:block">{name}</h1>
                        <p className="text-red-400 font-light text-sm">author: {author}</p>
                        <p className="text-sm mt-5 text-white flex items-center justify-center w-max gap-2 mb-3">
                            <GiEyeball size={20} />
                            {view} Views
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {genres.map((val) => (
                                <Link className="text-sm py-1 px-2 text-white bg-red-400 hover:bg-base-300 ease-in-out duration-200 " href={"/?category=" + val}>
                                    {val}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default MangaLayout