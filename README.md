# 💬 CollabR8 — Real-Time Team Communication Platform

**CollabR8** is a full-stack real-time communication and collaboration platform built with **React**, **Node.js**, **Express**, **MongoDB**, and **Stream API**.  
It enables seamless team messaging, video calls, and authentication — designed for fast, secure, and scalable collaboration.

---

## 🚀 Overview

CollabR8 allows users to connect, chat, and collaborate through real-time messaging and video conferencing.  
It integrates **Clerk** for user authentication, **Stream** for chat and video APIs, and **Inngest** for event-driven automation such as syncing and deleting user data.  
Built with scalability and performance in mind, it’s production-ready for deployment on **Vercel**.

---

## ✨ Key Features

### 💬 Real-Time Chat
- One-on-one and group messaging  
- Live typing indicators and message synchronization  
- Channel creation and member management  
- Persistent message history via Stream Chat API  

### 🎥 Video Communication
- High-quality 1:1 and group video calls  
- Stream Video SDK integration  
- Interactive call controls (mute, camera toggle, screen share)

### 🔐 Secure Authentication
- User authentication and session management via **Clerk**  
- Secure backend validation using custom Express middleware  

### ⚙️ Event-Driven Workflows
- **Inngest** handles background automation:
  - User data synchronization on registration  
  - Automatic cleanup when accounts are deleted  

### 🧠 Error Monitoring & Analytics
- **Sentry integration** for full-stack error tracking and performance monitoring  


---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, React Router, Axios, Clerk SDK, Stream Video & Chat |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Automation** | Inngest (Event-driven workflows) |
| **Monitoring** | Sentry |
| **Deployment** | Vercel |
| **Authentication** | Clerk |
