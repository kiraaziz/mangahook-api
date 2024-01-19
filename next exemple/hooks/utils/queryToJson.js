export const queryToJson = (query, metaData) => {

    let params = {
        category: query.get("category"),
        type: query.get("type"),
        state: query.get("state"),
    }

    Object.keys(params).map((val) => {
        const possibleFilel = metaData[val].map((val) => { return val.id })
        if (!possibleFilel.includes(params[val])) {
            delete params[val]
        }
    })

    if(query.get("page")){params = {
        ...params,
        page: query.get("page")
    }}

    if (!params.pages || params.pages > metaData.totalPages) {
        delete params.pages
    }

    return params
}
