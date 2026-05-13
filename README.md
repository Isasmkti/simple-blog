# Blueprint Simple Blog With Supabase

## Gambaran Umum

Project ini adalah blog modern yang mendukung multi-user, manajemen artikel, kategori, komentar, serta sistem autentikasi berbasis Supabase. Fokus utamanya adalah membuat arsitektur yang scalable tetapi tetap ringan untuk dikembangkan sendiri.

Stack yang dipakai:

* Frontend: React.js + Tailwind CSS
* Backend: Supabase
* Database: PostgreSQL
* Storage: Supabase Storage
* Authentication: Supabase Auth
* Deployment: Vercel

---

# Arsitektur Sistem

## Frontend

Frontend menggunakan Next.js karena cocok untuk kebutuhan blog:

* SEO lebih bagus
* Routing simpel
* Bisa SSR atau static generation
* Mudah deploy ke Vercel

Tailwind dipakai supaya styling cepat dan konsisten.

Untuk state management cukup ringan:

* React Query → fetch/cache data
* Zustand → state lokal seperti theme atau editor state

---

## Backend

Semua backend ditangani Supabase:

### PostgreSQL

Menyimpan semua data:

* user
* artikel
* komentar
* kategori
* likes

### Supabase Auth

Menangani:

* login
* register
* session
* OAuth Google/GitHub

### Supabase Storage

Dipakai untuk upload:

* thumbnail artikel
* avatar user

### Realtime (Opsional)

Bisa dipakai untuk:

* komentar realtime
* live notification

---

# Struktur Database

## users

Data dasar akun user.

| Field      | Type        |
| ---------- | ----------- |
| id         | uuid        |
| email      | text        |
| username   | text        |
| avatar_url | text        |
| created_at | timestamptz |

---

## profiles

Informasi tambahan user.

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

Menyimpan artikel blog.

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

Kategori artikel.

| Field | Type |
| ----- | ---- |
| id    | uuid |
| name  | text |
| slug  | text |

---

## post_categories

Table pivot many-to-many.

| Field       | Type |
| ----------- | ---- |
| id          | uuid |
| post_id     | uuid |
| category_id | uuid |

---

## comments

Komentar artikel.

| Field      | Type        |
| ---------- | ----------- |
| id         | uuid        |
| post_id    | uuid        |
| user_id    | uuid        |
| content    | text        |
| parent_id  | uuid        |
| created_at | timestamptz |

`parent_id` dipakai untuk reply komentar.

---

## likes

Sistem like artikel.

| Field   | Type |
| ------- | ---- |
| id      | uuid |
| post_id | uuid |
| user_id | uuid |

---

# Relasi Antar Table

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

# Modul Utama

## 1. Authentication

Fitur:

* Register
* Login
* Logout
* OAuth Google/GitHub
* Session management

Role digunakan untuk membatasi akses.

Contoh:

* reader → hanya baca
* writer → CRUD artikel sendiri
* admin → akses penuh

---

# 2. Manajemen Artikel

Writer dapat:

* membuat artikel
* edit artikel
* hapus artikel
* simpan draft
* publish artikel

Tambahan fitur:

* auto generate slug
* upload thumbnail
* preview artikel

---

# 3. Sistem Kategori

Kategori membantu filtering artikel.

Fitur:

* tambah kategori
* edit kategori
* hapus kategori
* filter berdasarkan kategori

Karena relasinya many-to-many, satu artikel bisa punya banyak kategori.

---

# 4. Sistem Komentar

User login bisa:

* menulis komentar
* reply komentar
* hapus komentar sendiri

Admin bisa:

* moderasi komentar
* delete komentar spam

---

# 5. Like & Bookmark

Opsional tapi bagus untuk engagement.

Like:

* satu user satu like per post

Bookmark:

* simpan artikel favorit

---

# 6. Search

Gunakan PostgreSQL Full Text Search.

Fitur pencarian:

* judul
* isi artikel
* kategori
* author

Bisa ditambah sorting:

* terbaru
* paling populer

---

# 7. User Profile

User dapat:

* edit profile
* upload avatar
* ubah bio
* tambah website/social link

---

# 8. Authorization dengan RLS

Bagian paling penting di Supabase.

Contoh aturan:

### Public

Hanya bisa melihat:

```sql
status = 'published'
```

### Writer

Hanya bisa edit post miliknya:

```sql
auth.uid() = author_id
```

### Admin

Bypass semua policy.

---

# 9. Media Management

Struktur storage:

```txt
/posts
/avatars
```

Best practice:

* rename file menggunakan UUID
* compress image sebelum upload
* validasi mime type

---

# 10. Analytics

Opsional.

Bisa menambahkan:

* total views
* trending post
* popular categories

Integrasi:

* Google Analytics
* Plausible

---

# Flow Aplikasi

## Alur User

```txt
Register/Login
      ↓
Masuk Dashboard
      ↓
Buat Artikel
      ↓
Simpan Draft
      ↓
Publish
      ↓
Artikel tampil di Homepage
```

---

## Alur Pembaca

```txt
Buka Artikel
      ↓
Baca Konten
      ↓
Komentar / Like
```

---

# Best Practice

## Gunakan UUID

Lebih aman dibanding integer incremental.

---

## Aktifkan RLS dari Awal

Jangan tunggu production.

---

## Pakai Index

Index penting:

```sql
slug
created_at
author_id
```

---

## Gunakan Trigger updated_at

Supaya timestamp otomatis update.

---

## Simpan Konten Pakai text

Karena artikel bisa panjang.

---

# Struktur Folder Frontend

```txt
src/
 ├── app/
 ├── components/
 ├── features/
 ├── lib/
 ├── hooks/
 ├── services/
 └── types/
```

---

# Rekomendasi Library

## Editor

* TipTap
* EditorJS
* Markdown Editor

---

## UI

* shadcn/ui
* Tailwind CSS

---

## Fetching

* TanStack Query

---

## Validation

* Zod

---

# Fitur yang Bisa Ditambahkan Nanti

Kalau project berkembang, bisa tambah:

* newsletter
* SEO generator
* schedule post
* notification
* dark mode
* AI content assistant
* multi-language
* CMS dashboard
* reading history

---


