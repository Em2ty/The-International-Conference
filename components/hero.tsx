import { Button } from '@/components/ui/button'
import { ChevronDown, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/80" />
      {/* </CHANGE> */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-12 sm:py-0">
        <div className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg opacity-90 space-y-1">
          <p>برعاية معالي وزير التربية</p>
          <p className="font-semibold">الدكتور إبراهيم نامس الجبوري المحترم</p>
          <p className="mt-2">وبإشراف المدير العام لتربية القادسية</p>
          <p className="font-semibold">الأستاذ أحمد خرباط الجليحاوي المحترم</p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-balance px-2">
          المؤتمر العلمي الثاني الدوري السنوي
        </h2>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 font-semibold bg-accent/20 py-3 sm:py-4 px-4 sm:px-6 rounded-lg inline-block mx-2">
          "التعليم المعاصر... ابتكار وتحوّل مستدام"
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 mt-4 sm:mt-6">
          17–18 كانون الأول 2025 – الديوانية / العراق
        </p>
        <div className="text-xs sm:text-sm md:text-base opacity-80 mb-6 sm:mb-8 space-y-1 px-2">
          <p>بالتعاون مع:</p>
          <p>مركز البحوث والدراسات التربوية في وزارة التربية</p>
          <p>كلية التربية/جامعة القادسية</p>
          <p>جمعية الرياضيات العراقية</p>
        </div>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg"
          asChild
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1_LOsXozEbWNcby-uJObhdJr9LPRYPqDZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            تحميل وقائع المؤتمر (PDF)
          </a>
        </Button>
        <div className="mt-8 sm:mt-12 flex justify-center animate-bounce">
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 opacity-70" />
        </div>
      </div>
    </section>
  )
}
