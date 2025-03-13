# Langkah-langkah Deployment Laravel Filament di Shared Hosting

## Tahapan di Lokal:

1. **Persiapkan Proyek**
   - Pastikan proyek Laravel Filament berjalan dengan baik di lingkungan lokal
   - Optimasi konfigurasi untuk mode production

2. **Optimasi Aplikasi Laravel**
   ```bash
   composer install --optimize-autoloader --no-dev
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

3. **Pengaturan .env**
   - Buat salinan file .env untuk production
   - Atur nilai APP_ENV=production
   - Atur nilai APP_DEBUG=false
   - Sesuaikan konfigurasi database sesuai server production

4. **Persiapan Upload**
   - Arsipkan seluruh proyek dalam format ZIP
   - Atau siapkan Git repository untuk deployment

## Tahapan di Server:

1. **Pengaturan Server Shared Hosting**
   - Login ke cPanel atau kontrol panel hosting
   - Pastikan hosting mendukung PHP 8.0+ dan ekstensi yang dibutuhkan
   - Buat database MySQL baru

2. **Upload File Proyek**
   - Upload file ZIP melalui File Manager atau FTP
   - Ekstrak di folder public_html atau subfolder

3. **Struktur Direktori**
   - Pada shared hosting, atur struktur direktori untuk keamanan:
     - Pindahkan semua folder kecuali /public ke direktori di luar public_html
     - Sesuaikan file index.php di folder public untuk mengarah ke lokasi baru

4. **Konfigurasi Database**
   - Buat database dan user melalui cPanel
   - Update konfigurasi database di file .env

5. **Pengaturan Permissions**
   - Atur izin direktori storage dan bootstrap/cache:
   ```bash
   chmod -R 755 storage bootstrap/cache
   ```

6. **Migrasi Database**
   - Jalankan migrasi database:
   ```bash
   php artisan migrate
   ```

7. **Pengaturan Web Server**
   - Buat atau sesuaikan file .htaccess di folder public untuk mengarahkan semua request ke index.php
   - Jika menggunakan subfolder, sesuaikan base URL di konfigurasi

8. **Verifikasi Deployment**
   - Periksa website berjalan dengan benar
   - Pastikan Filament Admin Panel dapat diakses
   - Periksa log error jika ada masalah

9. **Pengaturan HTTPS**
   - Aktifkan SSL/HTTPS melalui cPanel
   - Update APP_URL di .env ke versi HTTPS

10. **Pengaturan Cron Jobs** (opsional)
    - Tambahkan cron job untuk menjalankan scheduler Laravel:
    ```
    * * * * * cd /path/to/your/project && php artisan schedule:run >> /dev/null 2>&1
    ```

Apakah ada tahapan spesifik yang ingin Anda ketahui lebih detail?
