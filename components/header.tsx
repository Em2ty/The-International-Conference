"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-primary-foreground/20 gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo_navbar.png"
                alt="شعار وزارة التربية"
                width={64}
                height={64}
                className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
              />
            </div>
            <div className="text-center sm:text-right">
              <h1 className="text-base sm:text-xl font-bold leading-tight">
                المديرية العامة لتربية القادسية
              </h1>
              <p className="text-xs sm:text-sm opacity-90">قسم الإشراف الاختصاصي</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <span>الديوانية / العراق</span>
          </div>
        </div>
        {/* </CHANGE> */}
        <nav className="py-3 sm:py-4 overflow-x-auto">
          <ul className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium whitespace-nowrap min-w-max sm:min-w-0">
            <li>
              <a href="#home" className="hover:text-accent transition-colors">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                عن المؤتمر
              </a>
            </li>
            <li>
              <a href="#objectives" className="hover:text-accent transition-colors">
                الأهداف
              </a>
            </li>
            <li>
              <a href="#themes" className="hover:text-accent transition-colors">
                المحاور
              </a>
            </li>
          </ul>
        </nav>
        {/* </CHANGE> */}
      </div>
    </header>
  )
}
