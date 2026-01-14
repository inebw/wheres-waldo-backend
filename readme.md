# Where’s Waldo — Backend

Backend API for the **Where’s Waldo** game, built with **Node.js**, **Express**, and **Prisma**.

It provides game data such as characters, level settings, character coordinates, and leaderboard scores.

## Tech Stack

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- CORS

## API Endpoints

### Characters

- `GET /chars` — Get all characters
- `GET /chars/:id` — Get a single character

### Settings (Levels)

- `GET /settings` — Get all game levels
- `GET /settings/:id` — Get a single level

### Coordinates

- `GET /cords/:settingId` — Get character coordinates for a level

### Scores

- `GET /scores/:settingId` — Get top scores for a level (sorted by time)
- `POST /scores` — Submit a new score

## Notes

- Prisma is used for all database operations
- Scores are sorted by fastest completion time
- Username defaults to `Anonymous` if not provided

Frontend Repo: <https://github.com/inebw/wheres-waldo>
