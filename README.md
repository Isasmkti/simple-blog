# React Blog App with Supabase

## Overview

Project ini adalah aplikasi blog sederhana berbasis React dan Supabase.

Tujuan project:

* belajar fullstack modern
* memahami authentication
* memahami relational database
* implementasi CRUD
* upload file
* protected route
* role based access

Tech stack ini cocok untuk:

* personal project
* portfolio
* belajar backend as a service
* MVP startup
* content platform sederhana

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* TanStack Query
* Zustand

---

## Backend

Menggunakan Supabase sebagai backend utama.

Fitur yang digunakan:

* PostgreSQL Database
* Supabase Auth
* Supabase Storage
* Row Level Security (RLS)
* Realtime (optional)

---

# System Architecture

```txt
Frontend (React)
       ↓
Supabase Client SDK
       ↓
Supabase Services
 ├── Auth
 ├── PostgreSQL
 ├── Storage
 └── Realtime
```

---

# Features

## Authentication

* Register
* Login
* Logout
* Session persistence
* OAuth Google/GitHub
* Protected routes

---

## Post Management

* Create post
* Edit post
* Delete post
* Draft system
* Publish article
* Upload cover image
* Auto slug

---

## Categories

* Create category
* Edit category
* Delete category
* Filter posts by category

---

## Comments

* Add comment
* Reply comment
* Delete own comment
* Nested comment system

---

## User Profile

* Edit profile
* Upload avatar
* Update bio
* Social links

---

## Engagement

* Like post
* Bookmark post
* Trending posts

---

# Database Design

## users

| Field      | Type        |
| ---------- | ----------- |
| id         | uuid        |
| email      | text        |
| username   | text        |
| avatar_url | text        |
| created_at | timestamptz |

---

## profiles

| Field   | Type |
| ------- | ---- |
| id      | uuid |
| bio     | text |
| website | text |
| role    | text |

Role:

* admin
* writer
* reader

---

## posts

| Field       | Type        |
| ----------- | ----------- |
| id          | uuid        |
| author_id   | uuid        |
| title       | text        |
| slug        | text        |
| content     | text        |
| excerpt     | text        |
| cover_image | text        |
| status      | text        |
| created_at  | timestamptz |
| updated_at  | timestamptz |

Status:

* draft
* published

---

## categories

| Field | Type |
| ----- | ---- |
| id    | uuid |
| name  | text |
| slug  | text |

---

## post_categories

| Field       | Type |
| ----------- | ---- |
| id          | uuid |
| post_id     | uuid |
| category_id | uuid |

---

## comments

| Field      | Type        |
| ---------- | ----------- |
| id         | uuid        |
| post_id    | uuid        |
| user_id    | uuid        |
| content    | text        |
| parent_id  | uuid        |
| created_at | timestamptz |

---

## likes

| Field   | Type |
| ------- | ---- |
| id      | uuid |
| post_id | uuid |
| user_id | uuid |

---

# Entity Relationship Diagram

```txt
users
 ├── profiles
 ├── posts
 └── comments

posts
 ├── comments
 ├── likes
 └── post_categories

categories
 └── post_categories
```

---

# Project Structure

```txt
src/
│
├── api/
├── assets/
├── components/
│   ├── ui/
│   ├── layout/
│   └── forms/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   ├── Post/
│   ├── Dashboard/
│   └── Profile/
│
├── routes/
├── hooks/
├── services/
├── store/
├── utils/
├── lib/
├── types/
└── main.jsx
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/blog-app.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

---

# Environment Variables

Buat file `.env`.

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# Supabase Setup

## Install SDK

```bash
npm install @supabase/supabase-js
```

---

## Create Supabase Client

```js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
```

---

# Authentication Flow

```txt
Register/Login
      ↓
Supabase Auth
      ↓
Session Created
      ↓
Protected Route Access
```

---

# Post Flow

```txt
Writer Login
      ↓
Create Post
      ↓
Save Draft
      ↓
Publish
      ↓
Visible on Homepage
```

---

# Routing Example

```jsx
<Route path="/" element={<HomePage />} />
<Route path="/post/:slug" element={<PostDetail />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} />

<Route path="/dashboard" element={<Dashboard />} />
<Route path="/dashboard/posts" element={<MyPosts />} />
```

---

# Storage Structure

```txt
/posts
/avatars
```

---

# Authorization with RLS

Gunakan Row Level Security agar data lebih aman.

Contoh policy:

## Public

Hanya bisa melihat post published.

```sql
status = 'published'
```

---

## Writer

Hanya bisa edit post milik sendiri.

```sql
auth.uid() = author_id
```

---

## Admin

Memiliki akses penuh.

---

# Best Practices

## Gunakan UUID

Semua primary key menggunakan UUID.

---

## Aktifkan RLS dari Awal

Jangan menunggu production.

---

## Gunakan Index

Index yang direkomendasikan:

```sql
slug
created_at
author_id
```

---

## Gunakan text untuk Konten Panjang

Jangan gunakan varchar untuk artikel.

---

## Gunakan Trigger updated_at

Agar timestamp update otomatis.

---

# Recommended Libraries

## UI

* Tailwind CSS
* shadcn/ui
* Lucide React

---

## Forms

* React Hook Form
* Zod

---

## Data Fetching

* TanStack Query

---

## Editor

* TipTap
* Markdown Editor

---

# Development Roadmap

## Phase 1

* setup React
* setup Supabase
* login/register
* protected route

---

## Phase 2

* CRUD post
* dashboard writer
* image upload

---

## Phase 3

* category system
* comments
* user profile

---

## Phase 4

* likes
* bookmarks
* analytics
* optimization

---

# Future Improvements

Fitur yang bisa ditambahkan nanti:

* dark mode
* SEO optimization
* newsletter
* notification
* AI assistant
* multi language
* schedule posting
* admin CMS dashboard
* realtime comment

---

# Deployment

## Frontend

Deploy menggunakan:

* Vercel
* Netlify

---

## Backend

Menggunakan Supabase Cloud.

---

# Conclusion

Project ini cocok untuk belajar modern web development karena mencakup banyak konsep penting:

* authentication
* database relational
* authorization
* file upload
* protected route
* CRUD application
* clean architecture
* deployment

Dengan React + Supabase, development jadi lebih cepat tanpa perlu setup backend manual.
