import Hero from '@/components/Hero'
import StatCard from '@/components/StatCard'
import FeatureCard from '@/components/FeatureCard'

const stats = [
  { number: '10K+', label: 'Permintaan Harian' },
  { number: '99.9%', label: 'Ketersediaan Sistem' },
  { number: '<200ms', label: 'Waktu Respons Rata-rata' },
  { number: '5TB+', label: 'Data Terproses' },
]

const features = [
  {
    icon: '⚡',
    title: 'Kecepatan Tinggi',
    description: 'Pemrosesan asinkron dengan waktu respons di bawah 200ms untuk pengalaman pengguna yang optimal'
  },
  {
    icon: '🔐',
    title: 'Keamanan Berlapis',
    description: 'Enkripsi data, pembatasan akses, dan validasi input untuk melindungi sistem dari ancaman'
  },
  {
    icon: '📈',
    title: 'Analitik Real-time',
    description: 'Dashboard pemantauan lengkap dengan metrik terperinci untuk monitoring kesehatan sistem'
  },
  {
    icon: '🚀',
    title: 'Skalabilitas Otomatis',
    description: 'Dukungan scaling horizontal dengan load balancing untuk menangani pertumbuhan traffic'
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Content */}
      <section className="animate-slide-up">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 relative pb-3">
          Tentang Platform
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded" />
        </h2>
        
        <p className="text-lg text-text-secondary mb-6">
          DEPSTORE Engine adalah solusi komprehensif untuk distribusi konten digital melalui ekosistem Telegram. 
          Dibangun menggunakan Node.js dan framework Telegraf, platform ini mampu memproses ribuan permintaan 
          secara bersamaan dengan latensi yang sangat rendah.
        </p>
        
        <div className="highlight-box">
          <p className="text-text-primary font-semibold">
            <strong>Battle-Tested:</strong> Platform ini telah melayani lebih dari 10,000 pengguna aktif dengan 
            jutaan transaksi berhasil diproses tanpa downtime.
          </p>
        </div>

        {/* Features */}
        <h2 className="text-3xl lg:text-4xl font-extrabold mt-16 mb-8 relative pb-3">
          Fitur Unggulan
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Tech Stack */}
        <h2 className="text-3xl lg:text-4xl font-extrabold mt-16 mb-6 relative pb-3">
          Stack Teknologi
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded" />
        </h2>
        
        <ul className="space-y-4 text-text-secondary mb-8">
          <li><strong>Runtime Environment:</strong> Node.js versi 18 atau lebih tinggi untuk performa maksimal</li>
          <li><strong>Bot Framework:</strong> Telegraf.js dengan arsitektur middleware yang fleksibel</li>
          <li><strong>Penyimpanan Data:</strong> Berbasis JSON dengan operasi atomic untuk konsistensi data</li>
          <li><strong>Process Manager:</strong> PM2 untuk clustering, auto-restart, dan deployment tanpa downtime</li>
          <li><strong>Monitoring Tools:</strong> Sistem metrik custom dengan integrasi ke platform monitoring populer</li>
        </ul>
      </section>
    </>
  )
}