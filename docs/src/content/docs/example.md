---
title: MangaHook Website Example
description: Experience the MangaHook website example, a dynamic platform crafted with Next.js, Tailwind CSS, and Next UI components. Seamlessly interacting with the MangaHook API, the website offers users a captivating manga reading experience. Explore key features, including the Home Screen with a curated list of manga titles, Manga Details Page showcasing detailed information, Chapter Details Page for immersive reading, and a powerful Search Functionality. Check out the example website at https://lmangahook.vercel.app to navigate the home screen, delve into manga details, read chapters, and effortlessly search for favorite titles. Witness how MangaHook combines technologies to create a user-friendly and engaging manga reading platform.
---

MangaHook has created a user-friendly website using Next.js, Tailwind CSS, and Next UI components. The website interacts with the MangaHook API to provide users with a seamless manga reading experience. Let's explore the main features:

## 1. Home Screen

- The home screen displays a list of manga titles obtained from the `/api/mangaList` endpoint.
- Each manga entry on the home screen includes the manga's cover image, title, and other relevant information.
- Users can click on a manga title to navigate to the manga details page.

![Home Screen](/screenshot/list.png)
## 2. Manga Details Page

- When a user clicks on a manga title, it opens the manga details page, utilizing the `/api/manga/:id` endpoint.
- The manga details page showcases the cover image, title, author, status, genres, view count, and a list of chapters.
- Users can click on a specific chapter to navigate to the chapter details page.

![Detail](/screenshot/detail.png)
## 3. Chapter Details Page

- Upon selecting a chapter, the website uses the `/api/manga/:id/:ch` endpoint to fetch details about the selected chapter.
- The chapter details page presents the chapter title, a list of other chapter titles, and individual images for each page of the chapter.
- Users can navigate through the pages and enjoy reading the manga.

![Chapter](/screenshot/chapter.png)
## 4. Search Functionality

- The website features a search button that allows users to search for manga titles using the `/api/search/:query` endpoint.
- Users can enter a search query, and the website displays a list of manga titles related to the search term.
- Clicking on a search result takes users to the manga details page.

![Search](/screenshot/search.png)
## Example Website

- The MangaHook website is hosted at [https://lmangahook.vercel.app](https://lmangahook.vercel.app).
- Users can explore the home screen, view manga details, read chapters, and search for their favorite manga titles.

This example demonstrates how MangaHook combines the power of Next.js, Tailwind CSS, and the MangaHook API to create a dynamic and engaging manga reading platform.
