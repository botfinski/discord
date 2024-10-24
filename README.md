<h3 align="center">Fullstack Discord Clone</h3>

## <a name="introduction">💬 Introduction</a>

A Discord Clone web application built on Next.js replicates the core functionalities of Discord, offering real-time communication, collaboration, and community building. This app allows users to create and join servers, create different channels within those servers, participate in text and video chats, and share media within different members or groups.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Typescript
- TailwindCSS
- Shadcn/ui
- Socket.io
- MongoDB
- Prisma
- LiveKit

## <a name="features">🎨 Features</a>

🎯 **User Authentication**: Users can sign up, log in, and manage their accounts with ease using Clerk

🎯 **Real-Time Messaging**: Powered by socket.io, users can send and receive messages instantly, with updates pushed in real-time to all participants in a channel

🎯 **Servers and Channels**: Users can create and join multiple servers, with the ability to create individual channels within each server for specific topics or groups

🎯 **Direct Messaging**: Beyond group channels, the app supports one-on-one direct messaging between users.

🎯 **Audio/Video Channels**: Users can join dedicated audio and video channels within a server for real-time voice and video communication

🎯 **User Roles**: The platform supports multiple user roles, such as user, moderator, and admin, each with distinct permissions

🎯 **Media Sharing**: Users can upload and share images and files within chats

## <a name="quick-start">✔️ Installation</a>

Follow these steps to set up the project locally on your machine.

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

Replace the empty values with your actual credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
