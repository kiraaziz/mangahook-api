"use server"

const useManga = async(id, ch) => {

    const url = `${process.env.API_URL}/api/manga/${id}/${ch}`

    const reqData = await fetch(url)
    const data = await reqData.json()

    return data
}

export default useManga