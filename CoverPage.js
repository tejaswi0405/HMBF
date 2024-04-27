import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CoverPage() {
  const images = [
    'https://www.gannett-cdn.com/presto/2019/02/27/USAT/52c2114d-9f01-48b4-b9fd-0f29fb4bd542-ang_Oceanfront_Infinity_Pool_at_Anguillas_Zemi_Beach_House_Hotel__Spa_is_the_go-to_for_relaxation_Credit_Dylan_Cross_Tambourine.jpg?crop=3999,2249,x0,y303&width=3200&height=1800&format=pjpg&auto=webp',
    'https://www.jetsetter.com/uploads/sites/7/2018/05/jfam4hOD.jpeg',
    'https://th.bing.com/th/id/R.01870e7befecab271d809033ddf61fee?rik=UtJrwzQp6e977A&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2018%2f06%2fMaldives-tropical-islands-Hideaway-Beach-Resort-Spa-South-Asia-Indian-Ocean-HD-Wallpapers-2560x1600-1920x1440.jpg&ehk=2Zh0MGhoENW5GoOMye9etQJEkIpypWYhMKbyVv9b9jg%3d&risl=&pid=ImgRaw&r=0',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: '650px' }}
          />
        </div>
      ))}
    </Slider>
  );
}
