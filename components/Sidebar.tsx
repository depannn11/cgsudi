'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navSections = [
  {
    title: 'Pendahuluan',
    links: [
      { href: '/', label: 'Ringkasan' },
      { href: '/artikel/arsitektur', label: 'Arsitektur Sistem' },
    ]
  },
  {
    title: 'Komponen Inti',
    links: [
      { href: '/artikel/logika-utama', label: 'Logika Utama' },
      { href: '/artikel/basis-data', label: 'Basis Data' },
      { href: '/artikel/keamanan', label: 'Keamanan' },
      { href: '/artikel/integrasi-api', label: 'Integrasi API' },
    ]
  },
  {
    title: 'Fitur Khusus',
    links: [
      { href: '/artikel/khus/deploy-surge', label: 'Deploy ke Surge' },
      { href: '/artikel/khus/verifikasi-pengguna', label: 'Verifikasi Pengguna' },
    ]
  },
  {
    title: 'Performa',
    links: [
      { href: '/artikel/optimasi', label: 'Optimasi' },
      { href: '/artikel/skalabilitas', label: 'Skalabilitas' },
      { href: '/artikel/pemantauan', label: 'Pemantauan' },
    ]
  },
  {
    title: 'Operasional',
    links: [
      { href: '/artikel/deployment', label: 'Deployment' },
      { href: '/artikel/praktik-terbaik', label: 'Praktik Terbaik' },
      { href: '/artikel/penyelesaian-masalah', label: 'Penyelesaian Masalah' },
    ]
  }
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-bg-secondary border border-border text-text-primary p-3 rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 bottom-0 w-80 bg-bg-secondary border-r border-border
        overflow-y-auto p-8 z-30 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {navSections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-3">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? 'active' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </>
  )
}