---
title: Manga List
description: Explore the Manga List API endpoint /api/mangaList with detailed steps for making GET requests and understanding the responses. Fetch a comprehensive list of manga with associated metadata using your preferred API testing tool or HTTP client library. Optionally, delve into pagination, filter by manga category, type, or state with specified query parameters. Review the JSON response structure, and use the provided TypeScript interface. Start integrating and tailoring manga data to enhance your applications and dive into the diverse world of manga effortlessly!
---
#### Endpoint: `/api/mangaList`

The `/api/mangaList` endpoint provides a list of manga with associated metadata. Follow the steps below to make a request and understand the response.

## Simple Fetch

Use your preferred API testing tool (e.g., Postman, Insomnia) or any HTTP client library to make a GET request to the following endpoint:

- **Method:** GET
- **Endpoint:** `http://localhost:3000/api/mangaList`

##### Example

```http
GET http://localhost:3000/api/mangaList
```

##### Response

```json
{
    "mangaList": [
        {
            "id": "1manga-oa952283",
            "image": "https://ww6.mangakakalot.tv//mangaimage/manga-oa952283.jpg",
            "title": "Attack On Titan",
            "chapter": "chapter-139",
            "view": "105.8M",
            "description": "..."
            
        }
        // ... other manga entries
    ],
    "metaData": {
        "totalStories": 10,
        "totalPages": 100,
        "type": [
            {
                "id": "newest",
                "type": "Newest"
            }
            // ... other types
        ],
        "state": [
            {
                "id": "Completed",
                "type": "Completed"
            }
            // ... other states
        ],
        "category": [
            {
                "id": "all",
                "type": "ALL"
            }
            // ... 40 other categories
        ]
    }
}
```

## Explore Pagination (Optional)

##### Query Parameter: `page`

- To fetch a specific page, use the `page` query parameter.
- Example: `http://localhost:3000/api/mangaList?page=2`

##### Example

```http
GET http://localhost:3000/api/mangaList?page=2
```

## Filter by Manga Category (Optional)

##### Query Parameter: `category`

- Filter manga by category using the `category` query parameter.
- Possible values: `all`, `Action`, `Adventure`, `Comedy`, `Cooking`, `Doujinshi`, `Drama`, and more.
- Example: `http://localhost:3000/api/mangaList?category=Action`

##### Example

```
http://localhost:3000/api/mangaList?category=Action
```

## Filter by Manga Type (Optional)

##### Query Parameter: `type`

- Filter manga by type using the `type` query parameter.
- Possible values: `newest`, `latest`, `topview`.
- Example: `http://localhost:3000/api/mangaList?type=newest`

##### Example

```http
GET http://localhost:3000/api/mangaList?type=newest
```

## Filter by Manga State (Optional)

##### Query Parameter: `state`

- Filter manga by state (status) using the `state` query parameter.
- Possible values: `all`, `Completed`, `Ongoing`, `drop`, `unknown`.
- Example: `http://localhost:3000/api/mangaList?state=Ongoing`

##### Example

```http
GET http://localhost:3000/api/mangaList?state=Ongoing
```

## Review Response

The API responds with a JSON object containing a `mangaList` array and `metaData`. Inspect the structure and data to understand the manga entries and associated metadata.

#### Response Structure

```typescript
interface MangaList {
    mangaList: [
        {
            id: String,
            image: String,
            title: String,
            chapter: String,
            view: String,
            description: String
        }
    ],
    metaData: {
        totalStories: Number,
        totalPages: Number,
        type: [
            {
                id: String,
                type: String
            }
        ],
        state: [
            {
                id: String,
                type: String
            }
        ],
        category: [
            {
                id: String,
                type: String
            }
        ],
    }
}
```

## Explore and Integrate

Now that you've successfully fetched manga data, explore the various filtering options provided by the `/api/mangaList` endpoint to tailor the manga list to your specific requirements. Integrate this data into your applications and enjoy the world of manga at your fingertips!
