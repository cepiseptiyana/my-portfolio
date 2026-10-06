# 🚀 My Portfolio - React + Vite + GSAP (Dockerized)

Repository ini berisi kode sumber untuk website portofolio modern yang dibungkus menggunakan **Docker** agar langsung siap dijalankan di komputer mana pun.

---

## 🛠️ Prasyarat (Prerequisites)
Pastikan komputer Anda sudah terinstal [Docker Desktop](https://docker.com) atau Docker Engine + Compose.

---

## 🟢 1. Lingkungan Pengembangan (Development Mode)
Gunakan mode ini untuk pengkodean sehari-hari dengan fitur *Live Reload* aktif.

*   **Jalankan:** `docker compose -f compose.dev.yaml up --build`
*   **Akses Browser:** **`http://localhost:5173`**
*   **Matikan:** `Ctrl + C` lalu jalankan `docker compose -f compose.dev.yaml down`

---

## 🔵 2. Lingkungan Produksi Lokal (Production Mode via Nginx)
Gunakan mode ini untuk melakukan simulasi performa asli website menggunakan web server **Nginx**.

*   **Jalankan (Build Lokal):** `docker compose -f compose.prod.yaml up --build -d`
*   **Jalankan (Ambil dari Docker Hub):** `docker compose -f compose.prod.yaml up -d`
*   **Akses Browser:** **`http://localhost:8080/my-portfolio/`** *(PENTING: Wajib gunakan akhiran /my-portfolio/ agar aplikasi tampil sempurna)*
*   **Matikan:** `docker compose -f compose.prod.yaml down`

---

## 🐳 3. Push Manual ke Docker Hub
Jika Anda ingin memperbarui image produksi di cloud Docker Hub Anda secara manual:
1. `docker login`
2. `docker compose -f compose.prod.yaml build`
3. `docker compose -f compose.prod.yaml push`

---

## 🗂️ Struktur Docker
*   `compose.dev.yaml` & `compose.prod.yaml`: Orkestrasi Docker Compose.
*   `docker/development/`: Lingkungan Node.js + Vite Server.
*   `docker/production/`: Multi-stage build (Node.js -> Nginx Server).
