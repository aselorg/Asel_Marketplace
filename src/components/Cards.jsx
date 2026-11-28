import { useEffect, useState } from 'react';
import './css/Cards.css'

const URLS = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5z5Byxd2J5WY0ZvVjR5N2T2lhypOdIVMFLQfYexsglzHNZyzpiIqDwVb&s=10',
  'https://ir.ozone.ru/s3/multimedia-u/c1000/6846786930.jpg',
  'https://good.kz/wp-content/uploads/2024/01/Pomegranate_4.webp'
]

export default function Cards() {
  const [urlAddress, setUrlAddress] = useState(URLS[0]);

  useEffect(() => {
    let nowIs = 0;
    setInterval(() => {
      nowIs += 1;
      if (nowIs == URLS.length) {
        nowIs = 0
      }
      setUrlAddress(URLS[nowIs])
    }, 2000);
  }, [])

  return (
    <div className="cards_wrapp">
      <div className="cards_banner">
        {/* Реклама */}
        <img src={urlAddress} alt="" />
      </div>
      <div className="cards_container">
        <h1>Наши продукты</h1>
        <div className="cards_grid">
          {/* сетка... */}
        </div>
      </div>
    </div>
  );
};