import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import ChinesePattern from '@/components/ChinesePattern';
import CloudPattern from '@/components/CloudPattern';
import ClayTexture from '@/components/ClayTexture';
import TestimonialsSlider from '@/components/TestimonialsSlider';

const Index = () => {
  const navigate = useNavigate();
  const [selectedTeapot, setSelectedTeapot] = useState<any>(null);

  const teapots = [
    {
      id: 1,
      name: "Традиционный Дракон",
      price: "25 000 ₽",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg",
      masterwork: "Глеб Н. Музрукова",
      description: "Изысканный чайник ручной работы с изображением дракона. Традиционная глазурь и уникальная роспись делают каждый экземпляр неповторимым.",
      gallery: [
        "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg",
        "/img/7d4b11bf-147b-4268-ad75-83e7944455a1.jpg",
        "/img/b8549914-6987-4198-835f-6c1ea9310c5f.jpg"
      ]
    },
    {
      id: 2,
      name: "Императорский Лотос",
      price: "45 000 ₽",
      image: "/img/7d4b11bf-147b-4268-ad75-83e7944455a1.jpg",
      masterwork: "Глеб Н. Музрукова",
      description: "Эксклюзивный чайник с орнаментом лотоса. Создан в единственном экземпляре с использованием древних техник.",
      gallery: [
        "/img/7d4b11bf-147b-4268-ad75-83e7944455a1.jpg",
        "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg",
        "/img/b8549914-6987-4198-835f-6c1ea9310c5f.jpg"
      ]
    },
    {
      id: 3,
      name: "Горная Река",
      price: "35 000 ₽",
      image: "/img/b8549914-6987-4198-835f-6c1ea9310c5f.jpg",
      masterwork: "Глеб Н. Музрукова",
      description: "Элегантный чайник в стиле пейзажной живописи. Каждая линия передает красоту горных рек Китая.",
      gallery: [
        "/img/b8549914-6987-4198-835f-6c1ea9310c5f.jpg",
        "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg",
        "/img/7d4b11bf-147b-4268-ad75-83e7944455a1.jpg"
      ]
    }
  ];

  const navigation = [
    { name: "Главная", href: "#", current: true },
    { name: "Каталог", href: "#catalog" },
    { name: "О мастере", href: "/master", isRoute: true },
    { name: "Техники", href: "/techniques", isRoute: true },
    { name: "Блог", href: "/blog", isRoute: true },
    { name: "Контакты", href: "#contacts" }
  ];

  return (
    <div className="min-h-screen relative" style={{backgroundColor: '#5C3A31'}}>
      <ClayTexture />
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-gold/20" style={{backgroundColor: '#6B4238'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-white text-lg">茶</span>
              </div>
              <span className="font-serif text-xl font-semibold text-gold">Исинская чайная керамика Цзыша</span>
            </div>
            
            <div className="flex space-x-8">
              {navigation.map((item) => (
                item.isRoute ? (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.href)}
                    className="text-gold-light hover:text-gold transition-colors duration-200 font-body"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'text-gold font-medium'
                        : 'text-gold-light hover:text-gold'
                    } transition-colors duration-200 font-body`}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 z-10" style={{background: 'linear-gradient(to bottom right, #7A4F42, #5C3A31)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">
                  Ручная работа мастеров
                </Badge>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-gold-light leading-tight">
                  Китайские чайники
                  <span className="text-gold block">премиум класса</span>
                </h1>
                <p className="text-xl text-gold-light/80 mt-6 font-body">
                  Каждый чайник создается вручную мастерами с многолетним опытом. 
                  Уникальные произведения искусства для настоящих ценителей чайной культуры.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white" onClick={() => navigate('/master')}>
                  О мастере
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold font-serif">50+</div>
                  <div className="text-sm text-gold-light/70 font-body">Уникальных моделей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold font-serif">15</div>
                  <div className="text-sm text-gold-light/70 font-body">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold font-serif">100%</div>
                  <div className="text-sm text-gold-light/70 font-body">Ручная работа</div>
                </div>
              </div>

              <TestimonialsSlider />
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg" 
                  alt="Премиум китайский чайник"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-body">Цена</div>
                <div className="text-lg font-bold font-serif">по запросу</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="catalog" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gold mb-4">
              Избранные произведения
            </h2>
            <p className="text-xl text-gold-light/80 font-body max-w-2xl mx-auto">
              Каждый чайник в нашей коллекции — это результат многодневной работы мастера 
              и воплощение тысячелетних традиций китайского искусства.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teapots.map((teapot, index) => (
              <Card key={teapot.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-gold/20 group animate-fade-in" style={{animationDelay: `${index * 0.2}s`, backgroundColor: '#6B4238'}}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={teapot.image} 
                    alt={teapot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-gold mb-2">
                        {teapot.name}
                      </h3>
                      <p className="text-gold-light/80 font-body text-sm mb-3">{teapot.masterwork}</p>
                    </div>
                    
                    <p className="text-gold-light/70 font-body text-sm leading-relaxed line-clamp-3">
                      {teapot.description}
                    </p>
                    
                    <div className="pt-4 space-y-3">
                      <div className="text-center py-2 px-4 bg-gold/10 rounded border border-gold/20">
                        <span className="font-serif text-sm text-gold">Цена по запросу</span>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-gold hover:bg-gold-dark text-white"
                            onClick={() => setSelectedTeapot(teapot)}
                          >
                            <Icon name="Eye" size={18} className="mr-2" />
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          {selectedTeapot && (
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div className="aspect-square overflow-hidden rounded-lg">
                                  <img 
                                    src={selectedTeapot.gallery[0]} 
                                    alt={selectedTeapot.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  {selectedTeapot.gallery.map((img: string, idx: number) => (
                                    <div key={idx} className="aspect-square overflow-hidden rounded border-2 border-gold/20">
                                      <img 
                                        src={img} 
                                        alt={`${selectedTeapot.name} вид ${idx + 1}`}
                                        className="w-full h-full object-cover cursor-pointer hover:opacity-75 transition-opacity"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="space-y-6">
                                <div>
                                  <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                                    {selectedTeapot.name}
                                  </h3>
                                  <p className="text-gold font-medium font-body text-lg">
                                    {selectedTeapot.masterwork}
                                  </p>
                                </div>
                                
                                <p className="text-muted-foreground font-body leading-relaxed">
                                  {selectedTeapot.description}
                                </p>
                                
                                <div className="space-y-4">
                                  <div className="text-center py-3 px-4 bg-gold/10 rounded border border-gold/30">
                                    <span className="font-serif text-lg text-gold">Цена по запросу</span>
                                  </div>
                                  
                                  <Badge className="bg-gold/10 text-gold border-gold/20 w-full justify-center py-2">
                                    Ручная работа мастера
                                  </Badge>
                                  
                                  <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                                    <Icon name="MessageCircle" size={18} className="mr-2" />
                                    Запросить цену
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-slate-dark">
                Мастера своего дела
              </h2>
              <p className="text-lg text-slate-light font-body leading-relaxed">
                Наши мастера изучали искусство создания керамики в древних мастерских Цзинчжэня — 
                столицы китайского фарфора. Каждый чайник создается с соблюдением традиций, 
                передающихся из поколения в поколение.
              </p>
              <p className="text-lg text-slate-light font-body leading-relaxed">
                От выбора глины до финальной росписи — каждый этап контролируется мастером лично. 
                Это гарантирует уникальность и высочайшее качество каждого изделия.
              </p>
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Узнать больше о мастерах
              </Button>
            </div>
            
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/img/b8549914-6987-4198-835f-6c1ea9310c5f.jpg" 
                alt="Мастер за работой"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-dark">
                Премиум качество
              </h3>
              <p className="text-slate-light font-body">
                Каждый чайник проходит строгий контроль качества и создается только из лучших материалов
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Truck" size={32} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-dark">
                Бережная доставка
              </h3>
              <p className="text-slate-light font-body">
                Специальная упаковка и страхование обеспечивают безопасность при транспортировке
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Shield" size={32} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-dark">
                Гарантия подлинности
              </h3>
              <p className="text-slate-light font-body">
                Сертификат подлинности и гарантия качества на каждое изделие ручной работы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-dark text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">茶</span>
                </div>
                <span className="font-serif text-xl font-semibold">Премиум Чайники</span>
              </div>
              <p className="text-cream/70 font-body">
                Лучшие китайские чайники ручной работы для истинных ценителей
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 font-body">
                <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Традиционные чайники</a></li>
                <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Коллекционные</a></li>
                <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Новые поступления</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 font-body">
                <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">О мастерах</a></li>
                <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Доставка</a></li>
                <li><a href="#" className="text-cream/70 hover:text-gold transition-colors">Гарантии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 font-body text-cream/70">
                <p>+7 (495) 123-45-67</p>
                <p>info@premium-teapots.ru</p>
                <p>Москва, ул. Арбат, 10</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cream/20 mt-12 pt-8 text-center font-body text-cream/70">
            <p>&copy; 2024 Исинская чайная керамика. Все права защищены.</p>
            <p className="mt-2 text-sm">Мастер: Глеб Николаевич Музрукова</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;