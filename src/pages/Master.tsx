import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ChinesePattern from '@/components/ChinesePattern';
import CloudPattern from '@/components/CloudPattern';
import { useNavigate } from 'react-router-dom';

const Master = () => {
  const navigate = useNavigate();

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
            <div className="font-serif text-2xl font-bold text-gold">陶艺师</div>
          </div>
        </div>
      </nav>

      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gold mb-6">
              Мастер Чжан Вэй
            </h1>
            <p className="text-xl text-gold-light/80 font-body max-w-3xl mx-auto">
              Носитель древних традиций, хранитель секретов исинской глины
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className="space-y-6 animate-slide-in">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
                  alt="Мастер Чжан Вэй"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 animate-fade-in">
              <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="Award" size={32} className="text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gold mb-2">Путь мастера</h3>
                    <p className="text-gold-light/80 font-body leading-relaxed">
                      Более 40 лет посвятил искусству создания чайников из исинской глины. 
                      Обучался у великих мастеров в провинции Цзянсу, изучая тонкости 
                      работы с цзыша и формирования идеальных форм.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="Palette" size={32} className="text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gold mb-2">Философия</h3>
                    <p className="text-gold-light/80 font-body leading-relaxed">
                      «Каждый чайник – это диалог между мастером и глиной. Я не создаю форму, 
                      я лишь помогаю ей проявиться. Настоящее мастерство в том, чтобы чувствовать 
                      душу материала и следовать за ней.»
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gold/5 border border-gold/20 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Icon name="Medal" size={32} className="text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-gold mb-2">Достижения</h3>
                    <ul className="space-y-3 text-gold-light/80 font-body">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>Лауреат национальной премии за вклад в керамическое искусство (2018)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>Работы представлены в музее керамики Цзиндэчжэнь</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>Мастер высшей категории гильдии гончаров Исин</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-gold flex-shrink-0 mt-0.5" />
                        <span>Обучил более 20 учеников за свою карьеру</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 text-center animate-scale-in">
              <div className="text-5xl font-bold text-gold font-serif mb-2">40+</div>
              <div className="text-gold-light/70 font-body">Лет опыта</div>
            </div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-gold font-serif mb-2">500+</div>
              <div className="text-gold-light/70 font-body">Созданных чайников</div>
            </div>
            <div className="bg-gold/5 border border-gold/20 rounded-lg p-8 text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-gold font-serif mb-2">15</div>
              <div className="text-gold-light/70 font-body">Международных наград</div>
            </div>
          </div>

          <div className="text-center">
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

export default Master;
