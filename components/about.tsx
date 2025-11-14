import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Target, Lightbulb, BookOpen, Users, TrendingUp, Award, Download } from 'lucide-react'

export function About() {
  return (
    <>
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
              عن المؤتمر
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              يقيم قسم الإشراف الاختصاصي في المديرية العامة لتربية القادسية مؤتمره العلمي الثاني الدوري السنوي بالتعاون مع مركز البحوث والدراسات التربوية في وزارة التربية، وكلية التربية في جامعة القادسية، والجمعية العراقية للرياضيات، للمدة 17–18 كانون الأول 2025.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1_LOsXozEbWNcby-uJObhdJr9LPRYPqDZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Download className="h-5 w-5" />
                <span className="text-sm sm:text-base">تحميل الدليل الكامل للمؤتمر</span>
              </a>
            </Button>
          </div>
          {/* </CHANGE> */}
        </div>
      </section>

      <section id="objectives" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-foreground">
            أهداف المؤتمر
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ObjectiveCard
              icon={<Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="التكنولوجيا والتعليم الرقمي"
              description="استشراف مستقبل التعليم في ضوء الاتجاهات العالمية وتكنولوجيا الذكاء الاصطناعي والتعليم الرقمي"
            />
            <ObjectiveCard
              icon={<Users className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="نماذج تعليمية مرنة"
              description="تطوير نماذج تعليمية مرنة تلائم احتياجات المتعلم العراقي في القرن الحادي والعشرين"
            />
            <ObjectiveCard
              icon={<Target className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="جودة التعليم"
              description="مناقشة دور الإشراف التربوي في قيادة التغيير وتحقيق جودة التعليم"
            />
            <ObjectiveCard
              icon={<BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="التعليم الشامل"
              description="تعزيز ممارسات التعليم الشامل والمنصف والمراعي للفوارق الفردية والثقافية"
            />
            <ObjectiveCard
              icon={<TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="البحث التطبيقي"
              description="دعم البحث التربوي التطبيقي وربطه بواقع المدارس والتحديات الميدانية"
            />
            <ObjectiveCard
              icon={<Award className="h-6 w-6 sm:h-8 sm:w-8" />}
              title="الابتكار التربوي"
              description="تحفيز الابتكار في طرائق التدريس والتقويم من خلال ممارسات بحثية مستندة إلى أدلة"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function ObjectiveCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}
