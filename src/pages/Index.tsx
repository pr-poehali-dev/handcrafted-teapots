import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import ChinesePattern from '@/components/ChinesePattern';
import CloudPattern from '@/components/CloudPattern';

const Index = () => {
  const [selectedTeapot, setSelectedTeapot] = useState<any>(null);

  const teapots = [
    {
      id: 1,
      name: "Традиционный Дракон",
      price: "25 000 ₽",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg",
      masterwork: "Мастер Ли Вэй",
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
      masterwork: "Мастер Чен Минг",
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
      masterwork: "Мастер Ван Хуэй",
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
    { name: "О мастерах", href: "#masters" },
    { name: "Доставка", href: "#delivery" },
    { name: "Контакты", href: "#contacts" },
    { name: "Блог", href: "#blog" }
  ];

  return (
    <div className="min-h-screen relative" style={{backgroundColor: '#5C3A31'}}>
      <ChinesePattern />
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-gold/20" style={{backgroundColor: '#6B4238'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <span className="text-white text-lg">茶</span>
              </div>
              <span className="font-serif text-xl font-semibold text-slate-dark">Премиум Чайники</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.current
                      ? 'text-gold font-medium'
                      : 'text-slate hover:text-gold'
                  } transition-colors duration-200 font-body`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <Button className="bg-gold hover:bg-gold-dark text-white">
              Корзина (0)
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 z-10" style={{background: 'linear-gradient(to bottom right, #7A4F42, #5C3A31)'}}>
        <CloudPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge className="bg-gold/10 text-gold border-gold/20 mb-4">
                  Ручная работа мастеров
                </Badge>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-slate-dark leading-tight">
                  Китайские чайники
                  <span className="text-gold block">премиум класса</span>
                </h1>
                <p className="text-xl text-slate-light mt-6 font-body">
                  Каждый чайник создается вручную мастерами с многолетним опытом. 
                  Уникальные произведения искусства для настоящих ценителей чайной культуры.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white px-8">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                  О мастерах
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gold/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-dark font-serif">50+</div>
                  <div className="text-sm text-slate-light font-body">Уникальных моделей</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-dark font-serif">15</div>
                  <div className="text-sm text-slate-light font-body">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-dark font-serif">100%</div>
                  <div className="text-sm text-slate-light font-body">Ручная работа</div>
                </div>
              </div>
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
                <div className="text-sm font-body">От</div>
                <div className="text-2xl font-bold font-serif">25 000 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="catalog" className="py-20 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 text-gold/10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M 50 5 L 50 95 M 5 50 L 95 50" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-10 w-24 h-24 text-gold/10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 20 50 Q 35 20, 50 50 T 80 50" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M 20 50 Q 35 80, 50 50 T 80 50" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-dark mb-4">
              Избранные произведения
            </h2>
            <p className="text-xl text-slate-light font-body max-w-2xl mx-auto">
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
                      <h3 className="font-serif text-xl font-semibold text-slate-dark">
                        {teapot.name}
                      </h3>
                      <p className="text-gold font-medium font-body">{teapot.masterwork}</p>
                    </div>
                    
                    <p className="text-slate-light font-body text-sm leading-relaxed">
                      {teapot.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                      <span className="font-serif text-2xl font-bold text-slate-dark">
                        {teapot.price}
                      </span>
                      
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-gold text-gold hover:bg-gold hover:text-white"
                              onClick={() => setSelectedTeapot(teapot)}
                            >
                              <Icon name="Eye" size={16} className="mr-1" />
                              Смотреть
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
                                    <h3 className="font-serif text-3xl font-bold text-slate-dark mb-2">
                                      {selectedTeapot.name}
                                    </h3>
                                    <p className="text-gold font-medium font-body text-lg">
                                      {selectedTeapot.masterwork}
                                    </p>
                                  </div>
                                  
                                  <p className="text-slate-light font-body leading-relaxed">
                                    {selectedTeapot.description}
                                  </p>
                                  
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                      <span className="font-serif text-3xl font-bold text-slate-dark">
                                        {selectedTeapot.price}
                                      </span>
                                      <Badge className="bg-gold/10 text-gold border-gold/20">
                                        Единственный экземпляр
                                      </Badge>
                                    </div>
                                    
                                    <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                                      Добавить в корзину
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        <Button size="sm" className="bg-gold hover:bg-gold-dark text-white">
                          <Icon name="ShoppingCart" size={16} className="mr-1" />
                          В корзину
                        </Button>
                      </div>
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
            <p>&copy; 2024 Премиум Чайники. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;