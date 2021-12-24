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
        img="https://i.pravatar.cc/150?img=57"
      />
      <MemberCard
        name="Cuong Nguyen"
        role="Co-founder"
        img="https://i.pravatar.cc/150?img=60"
      />
      <MemberCard
        name="Quan Vu"
        role="Tour Operation"
        img="https://i.pravatar.cc/150?img=66"
      />
      <MemberCard
        name="Huy Do"
        role="Sales Executive"
        img="https://i.pravatar.cc/150?img=56"
      />
      <MemberCard
        name="Truong Lam"
        role="Tour Guides"
        img="https://i.pravatar.cc/150?img=55"
      />
    </Slider>
  );
};

export default SlickMemberList;
