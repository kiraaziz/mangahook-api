---
title: Get Manga Detail
description: Unlock detailed insights into specific manga and chapters with the Manga Detail API endpoints. Utilize /api/manga/:id to retrieve comprehensive details about a particular manga using its unique identifier. Access chapter-specific information through /api/manga/:id/:ch, providing details on chapter titles, associated images, and more. Seamlessly integrate these endpoints into your applications to elevate the manga reading experience for your users. Dive into the world of manga effortlessly by exploring and utilizing these powerful API features.
---

#### Endpoint: `/api/manga/:id`

The `/api/manga/:id` endpoint provides detailed information about a specific manga. Use the manga ID obtained from the Manga List endpoint to access manga details.

#### Example

```http
GET http://localhost:3000/api/manga/manga-oa952283
```

#### Response

```json
{
    "imageUrl": "https://ww6.mangakakalot.tv//mangaimage/manga-oa952283.jpg",
    "name": "Attack On Titan",
    "author": "Isayama Hajime",
    "status": "Ongoing",
    "updated": "Apr 22,2022 - 19",
    "view": "105.8M",
    "genres": [
        "Action",
        "Adventure",
        // ... other genres
    ],
    "chapterList": [
        {
            "id": "chapter-139",
            "path": "/chapter/manga-oa952283/chapter-139",
            "name": "Vol.34 Chapter 139: Moving Toward That Tree On The Hill",
            "view": "353.2K",
            "createdAt": "Apr 22,22"
        }
        // ... other chapters
    ]
}
```

## Get Chapter Details

#### Endpoint: `/api/manga/:id/:ch`

The `/api/manga/:id/:ch` endpoint provides details about a specific chapter of a manga. Use the manga ID and chapter ID obtained from the Manga Details endpoint to access chapter details.

#### Example

```http
GET http://localhost:3000/api/manga/manga-oa952283/chapter-136
```

#### Response

```json
{
    "title": "Attack On Titan",
    "currentChapter": "Vol.34 Chapter 136: Offer Your Hearts",
    "chapterListIds": [
        {
            "id": "chapter-139",
            "name": "Vol.34 Chapter 139: Moving Toward That Tree On The Hill"
        },
        // ... other chapter IDs
    ],
    "images": [
        {
            "title": "Attack On Titan Vol.34 Chapter 136: Offer Your Hearts page 1 - Mangakakalot",
            "image": "https://cm.blazefast.co/7d/9b/7d9b48e08f2f3d39d96ef17ada153901.jpg"
        }
        // ... other images
    ]
}
```

## Notes

- The `:id` parameter in the endpoint represents the unique identifier for a specific manga, and `:ch` represents the unique identifier for a specific chapter.
- Use the manga ID and chapter ID obtained from the Manga List and Manga Details endpoints to access specific manga and chapter information.
- The response provides detailed information about the manga, including its status, genres, view count, and a list of chapters.
- Chapter details include the chapter title, list of chapter IDs, and links to individual chapter images.

Feel free to explore and integrate these endpoints into your applications to enhance the manga reading experience for your users.
