---
title: "Cara Mematikan Komentar WordPress Agar Bebas Spam"
date: 2025-10-13
summary: "Panduan lengkap menonaktifkan komentar di WordPress sepenuhnya agar terhindar dari spam, bahkan jika form komentar sudah disembunyikan."
tags: ["WordPress", "Spam", "Tutorial", "Website Security"]
---

Spam komentar adalah masalah klasik di WordPress. Banyak pemilik website mengira cukup dengan menyembunyikan form komentar di tampilan depan, spam akan berhenti. Sayangnya, tidak sesederhana itu. Walaupun form sudah disembunyikan, bot spam tetap bisa mengirim komentar langsung ke endpoint `wp-comments-post.php` di server WordPress.  
Solusinya adalah **mematikan fitur komentar di WordPress sepenuhnya**, baik dari tampilan maupun fungsi backend. Artikel ini akan menjelaskan langkah-langkah detail untuk melakukannya.

## 1. Nonaktifkan Komentar dari Pengaturan WordPress

Langkah pertama adalah mematikan komentar dari **menu Settings (Pengaturan)** bawaan WordPress.

1. Masuk ke dashboard WordPress.  
2. Buka menu **Settings > Discussion**.  
3. Hilangkan centang pada opsi:
   - “Allow people to submit comments on new posts”
   - “Allow link notifications from other blogs (pingbacks and trackbacks)”
4. Klik **Save Changes** untuk menyimpan.

Langkah ini akan mematikan komentar untuk postingan baru. Namun, postingan lama yang sudah ada masih bisa menerima komentar, jadi perlu langkah tambahan di bawah.

## 2. Nonaktifkan Komentar di Semua Postingan Lama

Untuk menghentikan komentar di semua postingan lama secara massal:

1. Masuk ke **Posts > All Posts**.  
2. Centang semua postingan di halaman tersebut.  
3. Di bagian **Bulk actions**, pilih **Edit**, lalu klik **Apply**.  
4. Pada kolom **Comments**, pilih **Do not allow**.  
5. Klik **Update**.

Ulangi langkah ini jika Anda memiliki banyak halaman postingan.  
Anda juga bisa melakukan hal yang sama di **Pages > All Pages** untuk menonaktifkan komentar di halaman statis.

## 3. Hapus atau Nonaktifkan Form Komentar di Template

Jika Anda menggunakan tema custom atau builder seperti Elementor, Divi, atau Gutenberg, pastikan form komentar tidak lagi muncul.  
Untuk memastikan form benar-benar tidak tampil:

- Buka file **comments.php** di folder tema aktif (`/wp-content/themes/nama-tema/comments.php`).  
- Tambahkan kode berikut di baris paling atas:

```php
<?php
// Disable comments template
return;
?>
````

Kode ini akan menghentikan pemuatan form komentar dari template tema, meskipun ada fungsi bawaan yang memanggilnya.

Jika Anda menggunakan **child theme**, simpan perubahan di sana agar tidak hilang saat update tema.

## 4. Blokir Endpoint Komentar WordPress

Banyak spam bot mengirim komentar langsung ke file `wp-comments-post.php`.
Untuk mencegahnya, Anda bisa menonaktifkan endpoint tersebut melalui `.htaccess` (jika menggunakan Apache) atau `functions.php`.

### Opsi 1: Blokir via `.htaccess`

Tambahkan kode ini di file `.htaccess` Anda (letakkan di bawah `RewriteEngine On`):

```apache
# Disable comment posting
<Files wp-comments-post.php>
Order Allow,Deny
Deny from all
</Files>
```

Kode ini memblokir semua akses ke file yang digunakan untuk mengirim komentar, sehingga spam tidak bisa terkirim meski bot mencoba langsung lewat URL.

### Opsi 2: Blokir via `functions.php`

Jika tidak ingin mengubah file server, bisa tambahkan kode berikut di `functions.php` tema Anda:

```php
// Disable comment posting
function disable_comment_posting() {
    if (isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], 'wp-comments-post.php') !== false) {
        wp_die('Comments are closed.');
    }
}
add_action('init', 'disable_comment_posting');
```

Kode ini akan menghentikan proses pengiriman komentar langsung dari WordPress, bahkan sebelum diproses.

## 5. (Opsional) Gunakan Plugin Disable Comments

Jika Anda tidak ingin repot mengedit file, gunakan plugin **Disable Comments** yang resmi di repository WordPress.
Langkah-langkahnya:

1. Buka **Plugins > Add New**.
2. Cari **Disable Comments**.
3. Install dan aktifkan.
4. Masuk ke menu **Settings > Disable Comments**.
5. Pilih **Everywhere** untuk mematikan komentar di seluruh situs.
6. Klik **Save Changes**.

Plugin ini juga bisa menghapus semua komentar lama sekaligus, dan mencegah komentar baru masuk.

## 6. Uji Hasilnya

Setelah semua langkah di atas dilakukan:

* Buka beberapa postingan di situs Anda, pastikan form komentar sudah tidak muncul.
* Coba kirim request ke `wp-comments-post.php` menggunakan tool seperti Postman, pastikan hasilnya “403 Forbidden” atau “Comments are closed.”
* Periksa dashboard, pastikan tidak ada komentar baru yang masuk.

Jika semua berfungsi dengan benar, maka WordPress Anda benar-benar bebas dari komentar spam — bukan hanya disembunyikan, tapi dimatikan sepenuhnya dari sisi server dan CMS.

**Kesimpulan**
Menyembunyikan form komentar saja tidak cukup. Bot spam tetap bisa mengakses endpoint komentar langsung.
Untuk menghentikan spam secara total, Anda perlu **menonaktifkan fitur komentar dari pengaturan, tema, server, dan admin area**.
Dengan mengikuti langkah-langkah di atas, situs WordPress Anda akan benar-benar bebas dari spam komentar tanpa perlu plugin tambahan jika tidak diinginkan.

