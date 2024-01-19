
<div align="center">
  <h2>
   Welcome to Manga Hook, your own manga API. </br>
  </h2>
  <p>
  Welcome to Manga Hook, your go-to API for accessing a vast repository of manga data freely. Manga Hook is designed to streamline the process of retrieving manga information, offering features such as search, fetching all manga, fetching a single manga, retrieving manga chapters, and obtaining images from a specific chapter.
  </p>
  <br />

</div>
<h4 align="center">
  <a href="https://mangahook.vercel.app">Demo</a> |
  <a href="https://mangahook-api.vercel.app">Documentation</a>
</h4>

<a href="https://mangahook.vercel.app" target="_blank" rel="noopener">
  <picture>
    <img alt="Manga Hook" src="https://mangahook-api.vercel.app/screenshot/list.png" />
  </picture>
</a>

## Features

-📚 get all manga <br/>
-ℹ️ get single manga detail <br/>
-📖 get chapter list including images <br/>
-🔍 search support <br/>
-🔥 Nextjs exemple with ready to use hooks <br/>

## Quick start

Follow these simple steps to get Manga Hook up and running on your local machine:

### 1.  **Clone the Repository:**

Open your terminal and run the following command to clone the Manga Hook repository:

Terminal window

```bash
git  clone  https://github.com/kiraaziz/mangahook-api
```

### 2.  **Navigate to the Server Directory:**

Change your working directory to the server folder:

Terminal window

```bash
cd  server
```

### 3.  **Install Dependencies:**

Install the required dependencies using npm:

Terminal window

```bash
npm  install
```

### 4.  **Start the Express Server:**

Launch the Manga Hook server by running the following command:

Terminal window

```bash
npm  run  start
```

This will start the server on port 3000.

Now that Manga Hook is running, let’s explore how to retrieve manga data.

## List Manga

To list available manga, make a GET request to the following endpoint using a tool like Postman or Insomnia:

- **Endpoint:**

    ```http
    GET http://localhost:3000/api/mangaList
    ```

- **Example Response:**

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

Now you're ready to explore and integrate Manga Hook into your projects. Feel free to use the provided API endpoints to access manga data and enhance your manga-related applications!

- **Response Format:**
The API will respond with data structured as follows:

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
