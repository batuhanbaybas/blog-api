# Blog API with Express.js, TypeScript, and Docker

This repository contains a simple blog API built using Express.js, TypeScript, and Docker. It serves as a basic template for creating a RESTful API for a blogging platform.

## Features

- CRUD operations for blog posts and auth system
- Postgres as the database
- Express.js for routing
- TypeScript for static typing
- Docker for containerization

## Prerequisites

Make sure you have the following tools installed before running the project:

- Node.js
- npm (Node Package Manager)
- Docker
- Docker Compose

## Installation and Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/batuhanbaybas/blog-api.git
```

2. Install dependencies

```bash
npm install
```

3. Go directory

```bash
cd blog-api
```

4. Create a .env file and add the following environment variables

```bash
cp .env.example .env
```

5. Start the Docker containers

```bash
docker-compose up -d
```

6. Generate and Migrate the database tables

```bash
prisma generate && prisma migrate dev 
```

7. Run the project

```bash
npm start
```

## API Endpoints

### Auth

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login a user |

### Posts

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/post/all | Get all posts |
| GET | /api/post/single/:id | Get a post by id |
| POST | /api/post/create | Create a new post |
| PUT | /api/post/update/:id | Update a post by id |
| DELETE | /api/post/delete/:id | Delete a post by id |
