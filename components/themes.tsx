export function Themes() {
  return (
    <section id="themes" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center text-foreground">
          محاور المؤتمر
        </h2>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* </CHANGE> */}
          <ThemeCard
            title="الإشراف الاختصاصي والابتكار التربوي"
            items={[
              'المشرف بوصفه قائد تغيير',
              'الإشراف الداعم في بيئات التعلم الرقمية',
              'تقويم الأداء المؤسسي وفق معايير الجودة وحقوق الإنسان',
            ]}
          />
          <ThemeCard
            title="التعليم والتقنيات الحديثة"
            items={[
              'الذكاء الاصطناعي في التعليم: الإمكانات والتحديات',
              'البيئات الصفية التفاعلية والمنصات الذكية',
              'التحول الرقمي وإدارة التعليم عن بُعد',
            ]}
          />
          <ThemeCard
            title="المناهج والتعليم المعاصر"
            items={[
              'تصميم مناهج مرنة ومتكيفة مع احتياجات المتعلم',
              'تضمين مفاهيم حقوق الإنسان والتغير المناخي في المناهج',
              'المقاربات التكاملية في المناهج والتعلم القائم على المشروعات',
            ]}
          />
          <ThemeCard
            title="التعليم الشامل والرفاه النفسي"
            items={[
              'استراتيجيات دعم المتعلمين ذوي الاحتياجات الخاصة',
              'الصحة النفسية للطلبة والمعلمين في البيئات التعليمية',
              'الإرشاد التربوي والمهني في عصر التحولات السريعة',
            ]}
          />
          <ThemeCard
            title="طرائق التدريس والتقويم البديل"
            items={[
              'التعليم النشط والمتمركز حول المتعلم',
              'توظيف التقويم التكويني والذاتي والتقويم القائم على الأداء',
              'البحث الإجرائي بوصفه أداة لتحسين الممارسات الصفية',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function ThemeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-primary">{title}</h3>
      <ul className="space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-primary rounded-full w-2 h-2 mt-2 flex-shrink-0" />
            <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    // </CHANGE>
  )
}
