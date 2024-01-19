"use server"

const useMangaList = async(params) => {

    const url = process.env.API_URL+ "/api/mangalist" + params


    const reqData = await fetch(url)
    const data = await reqData.json()

    return data
}

export default useMangaList