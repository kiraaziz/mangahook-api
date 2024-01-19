"use server"

const useManga = async(id) => {

    const url = `${process.env.API_URL}/api/manga/${id}`

    const reqData = await fetch(url)
    const data = await reqData.json()

    return data
}

export default useManga