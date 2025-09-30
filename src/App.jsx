import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Импортируем стили

// Правильные пути к изображениям и исправленное название полей
const images = [
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image1.jpg',
    largeSrc: 'src/assets/images/fullsize/Image1.jpg',
    title: 'Мурлыкающий солнечный лучик'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image2.jpg',
    largeSrc: 'src/assets/images/fullsize/Image2.jpg',
    title: 'Котенок в полосочку'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image3.jpg',
    largeSrc: 'src/assets/images/fullsize/Image3.jpg',
    title: 'Игривый пушистый комочек'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image4.jpg',
    largeSrc: 'src/assets/images/fullsize/Image4.jpg',
    title: 'Любопытный кот на подоконнике'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image5.jpg',
    largeSrc: 'src/assets/images/fullsize/Image5.jpg',
    title: 'Сонный милаха'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image6.jpg',
    largeSrc: 'src/assets/images/fullsize/Image6.jpg',
    title: 'Шерстяной художник'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image7.jpg',
    largeSrc: 'src/assets/images/fullsize/Image7.jpg',
    title: 'Маленький исследователь'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image8.jpg',
    largeSrc: 'src/assets/images/fullsize/Image8.jpg',
    title: 'Хвостатый проказник'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image9.jpg',
    largeSrc: 'src/assets/images/fullsize/Image9.jpg',
    title: 'Обнимашки с кошачьими лапками'
  },
  {
    thumbnailSrc: 'src/assets/images/thumbnails/Image10.jpg',
    largeSrc: 'src/assets/images/fullsize/Image10.jpg',
    title: 'Кошачье царство грёз'
  }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null); // Индекс открытой фотографии

  return (
    <>
      <div className="gallery">
        {images.map((item, index) => (
          <div key={index}>
            <img src={item.thumbnailSrc} alt={item.title} onClick={() => {setIsOpen(true); setCurrentIndex(index)}} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      
      {/* Модальное окно */}
      <Lightbox
        open={isOpen}
        closeButtonLabel="Закрыть"
        render={{
          image: ({ src }) => <img style={{ maxWidth: '600px' }} src={src} />,
        }}
        slides={images.map(item => ({
          src: item.largeSrc,  // Используем правильный ключ largeSrc
          caption: item.title
        }))}
        index={currentIndex}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}