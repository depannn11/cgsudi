const articles = {
  // Artikel utama
  'arsitektur': {
    title: 'Arsitektur Sistem',
    subtitle: 'Pembahasan mendalam tentang struktur internal dan pola desain yang diterapkan',
    icon: '🏗️',
    category: 'Desain Sistem',
    content: `
      <h2>Gambaran Arsitektur</h2>
      <p>DEPSTORE mengadopsi arsitektur tiga lapis (three-tier) dengan pemisahan yang jelas antara presentation layer, business logic layer, dan data access layer.</p>
      <!-- Konten lengkap dari HTML asli -->
    `
  },
  'logika-utama': {
    title: 'Logika Utama',
    subtitle: 'Detail implementasi event handling dan pemrosesan asynchronous',
    icon: '⚙️',
    category: 'Engine Inti',
    content: `...`
  },
  // Artikel khusus
  'deploy-surge': {
    title: 'Integrasi Deploy Otomatis dengan Surge.sh',
    subtitle: 'Mekanisme deployment satu-klik untuk proyek web statis menggunakan Surge.sh API',
    icon: '☁️',
    category: 'Deployment',
    content: `
      <h2>Alur Deployment</h2>
      <p>Sistem DEPSTORE menyediakan fitur deploy instan untuk file arsip .zip...</p>
      <!-- Konten lengkap dari HTML asli -->
    `
  },
  'verifikasi-pengguna': {
    title: 'Sistem Verifikasi Pengguna & Manajemen State',
    subtitle: 'Arsitektur sessionless untuk tracking status interaksi pengguna secara real-time',
    icon: '👤',
    category: 'Identitas',
    content: `...`
  },
  // Tambahkan artikel lainnya...
}

export default articles