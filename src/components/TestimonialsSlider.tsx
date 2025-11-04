import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Чай – это искусство жизни. Правильный чайник делает церемонию совершенной.",
      author: "Лу Юй",
      title: "Мастер чайной церемонии, VIII век"
    },
    {
      text: "В простоте исинской глины – вся мудрость древнего Китая.",
      author: "Конфуций",
      title: "Философ"
    },
    {
      text: "Каждый чайник из глины цзыша хранит душу мастера и дух земли.",
      author: "Сюй Вэй",
      title: "Художник династии Мин"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gold/5 border border-gold/20 rounded-lg p-6 mt-8">
      <div className="flex items-start gap-4">
        <Icon name="Quote" size={32} className="text-gold flex-shrink-0 mt-1" />
        
        <div className="flex-1 min-h-[120px]">
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute top-0 left-0 translate-x-full'
                }`}
              >
                <p className="text-gold-light font-body text-lg italic mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="text-gold font-serif">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gold-light/70">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gold w-8'
                : 'bg-gold/30 hover:bg-gold/50'
            }`}
            aria-label={`Перейти к цитате ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
