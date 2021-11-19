import React from "react";
import Slider from "react-slick";
import MemberCard from "./MemberCard";
const SlickMemberList = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <MemberCard
        name="Hao Dinh"
        role="Founder & Managing Director"
        img="https://minimals.cc/static/mock-images/avatars/avatar_2.jpg"
      />
      <MemberCard
        name="Cuong Nguyen"
        role="Co-founder"
        img="https://minimals.cc/static/mock-images/avatars/avatar_3.jpg"
      />
      <MemberCard
        name="Quan Vu"
        role="Tour Operation"
        img="https://minimals.cc/static/mock-images/avatars/avatar_1.jpg"
      />
      <MemberCard
        name="Huy Do"
        role="Sales Executive"
        img="https://minimals.cc/static/mock-images/avatars/avatar_4.jpg"
      />
      <MemberCard
        name="Truong Lam"
        role="Tour Guides"
        img="https://minimals.cc/static/mock-images/avatars/avatar_5.jpg"
      />
    </Slider>
  );
};

export default SlickMemberList;
