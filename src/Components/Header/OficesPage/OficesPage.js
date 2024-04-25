import React from "react";
import classes from "./OficesPage.module.scss";

import firstImage from "../../../assets/RoomType .png";
import dotPic from "../../../assets/DotOrnament.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OficesPage() {
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
    <div className={classes.allCont}>
      <div className={classes.textsContainer}>
      <img src={dotPic} className={classes.dotStyle} />

        <div>
          <span className={classes.officesText}>
            Pilih Ruang Kerja
            <br />
            Sesuai Keinginanmu
          </span>
        </div>
        <div>
          <p className={classes.paragraphStyle}>
            Kami yakin kamu akan menemukan ruang kerja yang sesuai dengan
            <br />
            keinginan dan seleramu. Kami memastikan kamu akan nyaman.
          </p>
          <span className={classes.textParagraph}>
            Lihat semua jenis ruang kerja
          </span>
        </div>
      </div>
      <Slider {...settings} className={classes.allImages}>
          <div className={classes.imageCont}>
            <img src={firstImage} alt="" className={classes.imageStyle} />
            <img src={firstImage} alt="" className={classes.imageStyle} />
            <img src={firstImage} alt="" className={classes.imageStyle} />
            <img src={firstImage} alt="" className={classes.imageStyle} />
            <img src={firstImage} alt="" className={classes.imageStyle} />
            <img src={firstImage} alt="" className={classes.imageStyle} />
          </div>
          <div className={classes.imageCont}>
            {/* <img src={firstImage} alt="" className={classes.imageStyle} /> */}
          </div>
          {/* <div className={classes.imageCont}>
            <img src={firstImage} alt="" className={classes.imageStyle} />
          </div> */}
      </Slider>
    </div>
  );
}

export default OficesPage;
