# Discord Clone

This is a project made in order to get better with different technologies such as NextJS v14.
It was inspired by [Code With Antonio's](https://www.youtube.com/watch?v=ZbX4Ok9YX94) video.

## Badges

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

## Features

- Light/dark mode toggle
- Live preview
- Real time messages
- Multiple servers
- Voice/Video calls

## Installation

Clone this project with git and `cd` into the project.

```bash
git clone https://github.com/ViiEx/discord-clone.git
cd discord-clone
```

Install the dependencies with `npm`

```bash
npm install
```

Create a `.env` file and populate it with the enviroment variables needed (check bellow).

```bash
touch .env
```

Run the project localy

```bash
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

1. Clerk

   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/`

2. Uploadthing Variables

   - `UPLOADTHING_SECRET`
   - `UPLOADTHING_APP_ID`

3. Database Variables

   - `DATABASE_URL`

4. Livekit
   - `LIVEKIT_API_KEY`
   - `LIVEKIT_API_SECRET`
   - `NEXT_PUBLIC_LIVEKIT_URL`

### Clerk

The authentication is being handled by Clerk.

Create a [Clerk](https://clerk.com/) account. \
Then create a new project. \
Navigate to the `Api Keys` tab from the left navigation sidebar. \
Copy your keys to the `.env` file.

### Uploadthing

Create an [Uploadthing](https://uploadthing.com/) account. \
Create a new project. \
Navigate to the `Api Keys` tab from the left navigation sidebar. \
Create and then copy your keys to the `.env` file.

### Database

Create an account on [PlanetScale](https://app.planetscale.com/). \
Create a new project. \
From the project's dashboard press the **Connect** button and create a new password. \
On the `connect with` section change it to `Prisma` and copy the variable on your `.env` file.

### Livekit

Create an account on [Livekit](https://livekit.io/). \
Create a new project. \
Got to the project settings. \
Navigate to the Keys tab. \
Press `ADD NEW KEYS`. \
Copy your API key and url into the `.env` file as well as the secret key.

## Demo

https://discord-clone-production-e669.up.railway.app/
