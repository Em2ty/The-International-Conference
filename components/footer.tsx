import { Phone, MapPin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* المؤتمر */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-accent">المؤتمر</h3>
            <div className="space-y-3 text-sm">
              <p className="leading-relaxed">المؤتمر العلمي الدوري الثاني التربية القادسية، يهدف إلى تطوير التعليم والابتكار في المجال التربوي.</p>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-accent">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">عن المؤتمر</a>
              </li>
              <li>
                <a href="#objectives" className="hover:text-accent transition-colors">الأهداف</a>
              </li>
              <li>
                <a href="#themes" className="hover:text-accent transition-colors">محاور المؤتمر</a>
              </li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-accent">معلومات التواصل</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span dir="ltr">07807338506</span>
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span dir="ltr">enaamfa9@gmail.com</span>
                <Mail className="h-4 w-4 flex-shrink-0" />
              </div>
              <div className="flex items-start justify-center md:justify-end gap-2">
                <span>الديوانية – العراق</span>
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
            <p>© 2025 وزارة التربية - جميع الحقوق محفوظة</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-accent transition-colors">سياسة الخصوصية</a>
              <a href="#terms" className="hover:text-accent transition-colors">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
