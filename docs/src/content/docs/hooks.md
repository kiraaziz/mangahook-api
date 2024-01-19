---
title: Web Hooks For Next
description: Effortlessly integrate MangaHook API into your Next.js applications with a set of custom hooks. Simplify data retrieval with useMangaList for fetching a list of manga titles, useManga for detailed manga information, useMangaChapter for specific chapter details, and useMangaSearch for searching manga titles. Customize parameters as needed, seamlessly incorporating these hooks to enhance your components. Dive into the world of manga effortlessly, managing and displaying data according to your application's unique requirements.
---
MangaHook provides a set of custom hooks to simplify the integration of the MangaHook API into Next.js applications. These hooks facilitate the retrieval of manga data for various purposes. Here's a detailed documentation for each hook:

## 1. `useMangaList`

### Purpose

This hook is designed to fetch a list of manga titles with associated metadata using the `/api/mangalist` endpoint.

### Parameters

- `params` (optional): Additional parameters to customize the manga list request.

### Usage

```jsx
import useMangaList from 'path/to/useMangaList';

const ExampleComponent = async () => {
    const params = "?page=1&type=newest"; // Customize parameters as needed
    const mangaListData = await useMangaList(params);

    // Use mangaListData in your component
};
```

## 2. `useManga`

### Purpose

This hook fetches detailed information about a specific manga using the `/api/manga/:id` endpoint.

### Parameters

- `id`: Unique identifier for the desired manga.

### Usage

```jsx
import useManga from 'path/to/useManga';

const ExampleComponent = async () => {
    const mangaId = "manga-oa952283"; // Replace with the desired manga ID
    const mangaData = await useManga(mangaId);

    // Use mangaData in your component
};
```

## 3. `useMangaChapter`

### Purpose

This hook fetches details about a specific chapter of a manga using the `/api/manga/:id/:ch` endpoint.

### Parameters

- `id`: Unique identifier for the manga.
- `ch`: Unique identifier for the desired chapter.

### Usage

```jsx
import useMangaChapter from 'path/to/useMangaChapter';

const ExampleComponent = async () => {
    const mangaId = "manga-oa952283"; // Replace with the desired manga ID
    const chapterId = "chapter-139"; // Replace with the desired chapter ID
    const chapterData = await useMangaChapter(mangaId, chapterId);

    // Use chapterData in your component
};
```

## 4. `useMangaSearch`

### Purpose

This hook allows users to search for manga titles using the `/api/search/:query` endpoint.

### Parameters

- `params`: The search query string.

### Usage

```jsx
import useMangaSearch from 'path/to/useMangaSearch';

const ExampleComponent = async () => {
    const searchQuery = "attack on titan"; // Replace with the desired search query
    const searchResults = await useMangaSearch(searchQuery);

    // Use searchResults in your component
};
```

These custom hooks can be seamlessly integrated into Next.js applications, making it easy to retrieve and manage manga data within your components. Customize parameters and handle the returned data according to your application's needs.
