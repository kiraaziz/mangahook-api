---
title: Installation
description: Effortlessly set up Manga Hook API and Next.js client on your local machine with our step-by-step guide. Clone the repository, install dependencies, and start the Express server for Manga Hook. Move to the Next.js client directory, install dependencies, and run the development server. For production, build the Next.js app and start the server. Explore Manga Hook API and Next.js client to access manga data and enhance your applications. Happy coding!
---
Follow these detailed steps to set up the Manga Hook API and Next.js client application on your local machine. This guide assumes you have Git, Node.js, and npm installed.

## 1. Clone the Repository:

Open your terminal and run the following command to clone the Manga Hook repository:

```bash
git clone https://github.com/kiraaziz/mangahook-api
```

## 2. Set Up the Server:

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

#### Start the Express Server:

Launch the Manga Hook server by running:

```bash
npm run start
```

This will start the server on port 3000.

## 3. Set Up the Client (Next.js App):

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

#### Run the Development Server:

Start the Next.js development server with Tailwind CSS:

```bash
npm run dev
```

This will open the client application on [http://localhost:3001](http://localhost:3001) by default.

## 4. Production Deployment for Next.js App:

For production deployment, follow these additional steps:

#### Build the Next.js App:

Generate a production build of the Next.js app:

```bash
npm run build
```

#### Start the Production Server:

Run the built app in production mode:

```bash
npm start
```

Now, your Next.js app is running in production mode.

## Summary:

- Manga Hook server is running on [http://localhost:3000](http://localhost:3000).
- Next.js client app is running on [http://localhost:3001](http://localhost:3001) during development.
- In production, the Next.js app is built using `npm run build` and started with `npm start`.

Feel free to explore the Manga Hook API and Next.js client app to access manga data and enhance your manga-related applications. Happy coding!