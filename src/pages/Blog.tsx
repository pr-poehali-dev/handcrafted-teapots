import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ChinesePattern from '@/components/ChinesePattern';
import CloudPattern from '@/components/CloudPattern';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: "История исинских чайников: от династии Мин до наших дней",
      excerpt: "Погружение в многовековую историю создания легендарных чайников из фиолетовой глины провинции Цзянсу.",
      date: "15 ноября 2024",
      category: "История",
      readTime: "8 мин",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
    },
    {
      title: "Как правильно заваривать пуэр в исинском чайнике",
      excerpt: "Подробный гид по завариванию различных сортов пуэра с использованием традиционных чайников.",
      date: "8 ноября 2024",
      category: "Чайная культура",
      readTime: "6 мин",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
    },
    {
      title: "Цзыша: секреты фиолетовой глины",
      excerpt: "Что делает исинскую глину уникальной и почему чайники из неё так ценятся знатоками.",
      date: "1 ноября 2024",
      category: "Материалы",
      readTime: "10 мин",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
    },
    {
      title: "Уход за исинским чайником: советы коллекционеров",
      excerpt: "Как правильно ухаживать за чайником из глины, чтобы он служил поколениями.",
      date: "25 октября 2024",
      category: "Уход",
      readTime: "5 мин",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
    },
    {
      title: "Формы чайников и их значение в чайной церемонии",
      excerpt: "Почему форма чайника влияет на вкус чая и какую модель выбрать для разных сортов.",
      date: "18 октября 2024",
      category: "Чайная культура",
      readTime: "7 мин",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
    },
    {
      title: "Как отличить настоящий исинский чайник от подделки",
      excerpt: "Экспертные советы по идентификации подлинных чайников из провинции Исин.",
      date: "10 октября 2024",
      category: "Советы",
      readTime: "9 мин",
      image: "/img/187c4e8c-36aa-4e91-8642-8b0ed3180909.jpg"
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
            <div className="font-serif text-2xl font-bold text-gold">博客</div>
          </div>
        </div>
      </nav>

      <section className="py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold mb-4 sm:mb-6 px-4">
              Блог о чайной культуре
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gold-light/80 font-body max-w-3xl mx-auto px-4">
              Погрузитесь в мир традиций, мастерства и философии китайского чаепития
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
              Все статьи
            </Button>
            <Button variant="outline" className="border-gold/40 text-gold-light hover:bg-gold hover:text-white">
              История
            </Button>
            <Button variant="outline" className="border-gold/40 text-gold-light hover:bg-gold hover:text-white">
              Чайная культура
            </Button>
            <Button variant="outline" className="border-gold/40 text-gold-light hover:bg-gold hover:text-white">
              Материалы
            </Button>
            <Button variant="outline" className="border-gold/40 text-gold-light hover:bg-gold hover:text-white">
              Советы
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="bg-dark-light/50 border-gold/20 hover:border-gold/40 transition-all duration-300 overflow-hidden group cursor-pointer animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-gold/10 text-gold border-gold/20 text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-gold-light/60 text-sm">
                      <Icon name="Clock" size={14} />
                      <span className="font-body">{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-gold mb-3 group-hover:text-gold-light transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gold-light/70 font-body text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                    <div className="flex items-center gap-2 text-gold-light/60 text-sm font-body">
                      <Icon name="Calendar" size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gold group-hover:gap-2 transition-all">
                      <span className="text-sm font-body">Читать</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white px-8"
            >
              Загрузить ещё статьи
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;