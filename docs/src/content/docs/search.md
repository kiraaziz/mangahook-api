---
title: Search
description: Refine your manga discovery with the Search API endpoint /api/search/:query. Utilize this powerful tool to search for manga titles based on specific queries. Make GET requests with encoded search queries like attack%20on%20titan?page=1 and receive a response containing a curated list of manga entries with images and titles. Leverage the metaData section for insights into the total number of pages available for search results. Enhance your application's search functionality and offer users relevant manga suggestions effortlessly using this dynamic API feature.
---
#### Endpoint: `/api/search/:query`

The `/api/search/:query` endpoint allows you to search for manga based on a specific query. Use this endpoint to discover manga titles related to your search.

#### Example

```http
GET http://localhost:3000/api/search/attack%20on%20titan?page=1
```

#### Response

```json
{
    "mangaList": [
        {
            "id": "manga-oa952283",
            "image": "https://avt.mkklcdnv6temp.com/34/b/1-1583465037.jpg",
            "title": "Attack On Titan"
        },
        {
            "id": "manga-fv982830",
            "image": "https://avt.mkklcdnv6temp.com/15/y/19-1583499712.jpg",
            "title": "Attack On Titan Anthology"
        },
        {
            "id": "manga-cs980075",
            "image": "https://avt.mkklcdnv6temp.com/15/d/17-1583495808.jpg",
            "title": "Attack On Titan: Junior High"
        },
        // ... other manga entries
    ],
    "metaData": {
        "totalPages": 39
    }
}
```

### Notes

- The `:query` parameter in the endpoint represents the search query. Make sure to encode the query string properly.
- Use the `page` query parameter to navigate through different pages of the search results.
- The response includes a list of manga entries with their respective IDs, images, and titles.
- The `metaData` section provides information about the total number of pages available for the search results.

Feel free to use this endpoint to enhance the search functionality in your application and provide users with relevant manga suggestions based on their queries.
