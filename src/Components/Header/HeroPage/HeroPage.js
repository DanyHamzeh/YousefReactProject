import React from "react";
import classes from "./HeroPage.module.scss";
import logo from "./../../../assets/DownArrow.png";
import dotPic from "../../../assets/DotOrnament.png"
import firstImage from "./../../../assets/hero1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeroPage() {
  const settings = {
    rows: 1,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className={classes.textImageCont}>
      <div className={classes.allContHero}>
        <img src={dotPic} className={classes.dotStyle} />
        <div className={classes.titleCont}>
          <span className={classes.titleHero}>
            Temukan Ruang
            <br /> Kerja Dimanapun
          </span>
        </div>
        <div className={classes.btnTextCont}>
          <div className={classes.textCountry}>
            <span className={classes.subTitle}>Temukan ruang kerja di</span>

            <div>
              <button className={classes.titleCountry}>Jakarta</button>
              <img src={logo} alt=" " className={classes.logo} />
            </div>
          </div>
          <div>
            <button className={classes.btnMain}> Cari Sekarang</button>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div className={classes.allImages}>
          <div className={classes.imageCont}>
            <img src={firstImage} alt="" className={classes.imageStyle} />
          </div>
        </div>
        <div className={classes.allImages}>
          <div className={classes.imageCont}>
            <img src={firstImage} alt="" className={classes.imageStyle} />
          </div>
        </div>
        <div className={classes.allImages}>
          <div className={classes.imageCont}>
            <img src={firstImage} alt="" className={classes.imageStyle} />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroPage;
