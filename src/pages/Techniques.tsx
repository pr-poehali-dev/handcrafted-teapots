import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ChinesePattern from '@/components/ChinesePattern';
import CloudPattern from '@/components/CloudPattern';
import { useNavigate } from 'react-router-dom';

const Techniques = () => {
  const navigate = useNavigate();

  const techniques = [
    {
      title: "Подготовка глины Цзыша",
      icon: "Mountain",
      steps: [
        "Добыча фиолетовой глины из специальных месторождений провинции Цзянсу",
        "Выдерживание глины в течение 3-5 лет для достижения идеальной консистенции",
        "Измельчение и просеивание для удаления примесей",
        "Смешивание с водой до получения оптимальной пластичности"
      ]
    },
    {
      title: "Формовка вручную",
      icon: "Hand",
      steps: [
        "Раскатывание глины в пласты нужной толщины деревянной скалкой",
        "Вырезание деталей: тело, носик, ручка, крышка, донышко",
        "Соединение элементов с использованием жидкой глины",
        "Формирование идеальных пропорций и баланса изделия"
      ]
    },
    {
      title: "Детализация и декор",
      icon: "Palette",
      steps: [
        "Нанесение орнаментов и узоров специальными инструментами",
        "Создание печатей мастера на дне чайника",
        "Гравировка каллиграфических надписей и поэзии",
        "Полировка поверхности для придания благородного блеска"
      ]
    },
    {
      title: "Первичная сушка",
      icon: "Wind",
      steps: [
        "Естественная сушка в тени в течение 7-10 дней",
        "Контроль влажности и температуры окружающей среды",
        "Постепенное затвердевание для предотвращения трещин",
        "Проверка на наличие дефектов перед обжигом"
      ]
    },
    {
      title: "Первый обжиг",
      icon: "Flame",
      steps: [
        "Медленное повышение температуры до 700°C в течение суток",
        "Выдержка при температуре для равномерного прогрева",
        "Постепенное охлаждение в течение 2-3 дней",
        "Проверка прочности бисквита перед окончательной обработкой"
      ]
    },
    {
      title: "Финальный обжиг",
      icon: "Flame",
      steps: [
        "Укладка изделий в печь с соблюдением расстояний",
        "Нагрев до 1150-1200°C в течение 12-15 часов",
        "Контроль атмосферы печи для идеального цвета глины",
        "Медленное охлаждение в течение недели до полного затвердевания"
      ]
    },
    {
      title: "Финальная обработка",
      icon: "Sparkles",
      steps: [
        "Проверка герметичности и качества крышки",
        "Тестирование потока воды из носика",
        "Финальная полировка и очистка поверхности",
        "Упаковка с сертификатом мастера"
      ]
    },
    {
      title: "Патинирование",
      icon: "Coffee",
      steps: [
        "Многократное заваривание чая в новом чайнике",
        "Формирование чайного налёта на внутренних стенках",
        "Развитие уникального блеска и цвета поверхности",
        "Создание особого характера чайника со временем"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      <ChinesePattern />
      <CloudPattern />

      <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 group">
              <Icon name="ArrowLeft" size={20} className="text-gold group-hover:translate-x-[-4px] transition-transform" />
              <span className="text-gold font-serif text-lg">Назад</span>
            </button>
            <div className="font-serif text-2xl font-bold text-gold">工艺</div>
          </div>
        </div>
      </nav>

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gold mb-6">
              Техники изготовления
            </h1>
            <p className="text-xl text-gold-light/80 font-body max-w-3xl mx-auto">
              Традиционный процесс создания исинских чайников, передаваемый из поколения в поколение
            </p>
          </div>

          <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 mb-16 animate-fade-in">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={32} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-2xl font-bold text-gold mb-3">О процессе</h3>
                <p className="text-gold-light/80 font-body leading-relaxed mb-3">
                  Создание настоящего исинского чайника — это искусство, требующее многолетнего опыта 
                  и глубокого понимания материала. Весь процесс от подготовки глины до финального обжига 
                  занимает от 2 до 6 месяцев.
                </p>
                <p className="text-gold-light/80 font-body leading-relaxed">
                  Каждый мастер привносит свой уникальный стиль и секретные техники, 
                  делающие его работы узнаваемыми среди коллекционеров.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {techniques.map((technique, index) => (
              <Card 
                key={index}
                className="bg-dark-light/50 border-gold/20 hover:border-gold/40 transition-all duration-300 animate-scale-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={technique.icon as any} size={28} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-gold-light/60 text-sm font-body mb-1">Этап {index + 1}</div>
                      <h3 className="font-serif text-2xl font-bold text-gold">
                        {technique.title}
                      </h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {technique.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-gold text-xs font-bold">{stepIndex + 1}</span>
                        </div>
                        <span className="text-gold-light/80 font-body leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gold font-serif mb-2">2-6</div>
                <div className="text-gold-light/70 font-body">Месяцев создания</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold font-serif mb-2">1200°C</div>
                <div className="text-gold-light/70 font-body">Температура обжига</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold font-serif mb-2">100%</div>
                <div className="text-gold-light/70 font-body">Ручная работа</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-white px-8"
              onClick={() => navigate('/')}
            >
              Смотреть работы мастера
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techniques;
