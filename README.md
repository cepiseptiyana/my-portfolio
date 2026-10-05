# 🚀 My Portfolio - React + Vite + GSAP

Repository ini berisi kode sumber untuk website portofolio modern yang dibangun menggunakan **React (Vite)**, **GSAP** untuk animasi, dan **Sass** untuk styling. Seluruh lingkungan pengembangan dan produksi proyek ini sudah sepenuhnya dibungkus menggunakan **Docker** agar dapat dijalankan di komputer mana pun tanpa perlu menginstal Node.js secara manual.

---

## 🛠️ Prasyarat (Prerequisites)

Sebelum menjalankan proyek ini, pastikan komputer Anda sudah terinstal:
*   [Docker Desktop](https://docker.com) (Windows/macOS) atau [Docker Engine & Compose](https://docker.com) (Linux Ubuntu/Debian).

---

## 🟢 1. Lingkungan Pengembangan (Development Mode)

Gunakan mode ini untuk melakukan pengkodean sehari-hari. Fitur *Hot Module Replacement (Live Reload)* aktif, sehingga setiap perubahan kode di VS Code akan langsung memperbarui browser secara otomatis.

**Jalankan container development:**
```bash
docker compose -f compose.dev.yaml up --build
```
*   Aplikasi dapat diakses melalui browser di alamat: **`http://localhost:5173`**
*   Untuk menghentikan container dev, tekan `Ctrl + C` di terminal, lalu jalankan:
    ```bash
    docker compose -f compose.dev.yaml down
    ```

---

## 🔵 2. Lingkungan Produksi Lokal (Production Mode / Nginx Web Server)

Gunakan mode ini untuk melakukan simulasi performa asli website sebelum di-deploy ke server VPS. Aplikasi akan dikompilasi (*compiled*) menjadi file statis yang super ringan dan disajikan melalui web server **Nginx kelas industri**.

### Opsi A: Jalankan Menggunakan Source Code Lokal (Build dari Nol)
Jika Anda ingin membangun ulang image dari file lokal di komputer Anda:
```bash
docker compose -f compose.prod.yaml up --build -d
```

### Opsi B: Jalankan Menggunakan Image dari Docker Hub (Tanpa Build)
Jika Anda ingin langsung mengambil image matang yang sudah di-push ke cloud Docker Hub tanpa memerlukan proses kompilasi lokal:
*(Pastikan baris `build:` di dalam file `compose.prod.yaml` sudah dikomentari/dihapus)*
```bash
docker compose -f compose.prod.yaml up -d
```

*   Aplikasi Nginx dapat diakses melalui browser di alamat: **`http://localhost:8080`**
*   Untuk menghentikan container produksi yang berjalan di latar belakang:
    ```bash
    docker compose -f compose.prod.yaml down
    ```

---

## 🐳 3. Alur Pengiriman ke Docker Hub (Manual Push)

Jika Anda ingin memperbarui image produksi di cloud Docker Hub secara manual, jalankan perintah berikut secara berurutan:

1. **Login ke akun Docker Hub Anda:**
   ```bash
   docker login
   ```
2. **Build & Push menggunakan Docker Compose:**
   ```bash
   docker compose -f compose.prod.yaml build
   docker compose -f compose.prod.yaml push
   ```

---

## 🗂️ Struktur Folder Docker
```text
├── docker/
│   ├── development/
│   │   └── Dockerfile       # Konfigurasi Node.js + Vite Dev Server
│   └── production/
│       ├── Dockerfile       # Multi-stage Build (Node.js -> Nginx)
│       └── nginx.conf       # Konfigurasi routing SPA Nginx & Gzip
├── compose.dev.yaml         # Orkestrasi Container Development
└── compose.prod.yaml        # Orkestrasi Container Production (Nginx)
```
