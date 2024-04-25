import React from "react";
import classes from "./Section3Page.module.scss";

import click from "../../assets/clickImage.png";
import clock from "../../assets/clockImage.png";
import home from "../../assets/HomeImage.png";

function Section3Page() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.firstCont}>
        <div className={classes.textParagraphStyle}>
          <span className={classes.title}>Kenapa Ruang Kerja?</span>
          <span className={classes.paragraph}>
            Kami telah berpengalaman melayani
            <br /> ratusan ribu orang dalam menemukan
            <br />
            ruang kerja idaman mereka
          </span>
        </div>
        <div className={classes.textParagraphStyle}>
          <span className={classes.number}>600+</span>
          <span className={classes.paragraph}>
            Ruang Kerja di seluruh Indonesia
          </span>
        </div>
        <div className={classes.textParagraphStyle}>
          <span className={classes.number}>135+</span>
          <span className={classes.paragraph}>
            Staff yang siap membantu Anda
          </span>
        </div>
      </div>

      <div className={classes.SecondCont}>
        <div className={classes.innerCont}>
          <div className={classes.imageTitle}>
            <div className={classes.circle}>
              <img src={click} alt="" className={classes.imageStyle} />
            </div>
            <div>
              <span>Reservasi Mudah</span>
              <span>
                Proses pemesanan ruang kerja hanya
                <br /> membutuhkan waktu kurang dari 2 menit.{" "}
              </span>
            </div>
          </div>

          <div className={classes.imageTitle}>
            <div className={classes.circle}>
              <img src={clock} alt="" className={classes.imageStyle} />
            </div>
            <div>
              <span>Waktu yang Fleksibel</span>
              <span>
                Proses pemesanan ruang kerja hanya
                <br /> membutuhkan waktu kurang dari 2 menit.
              </span>
            </div>
          </div>

          <div className={classes.imageTitle}>
            <div className={classes.circle}>
              <img src={home} alt="" className={classes.imageStyle} />
            </div>
            <div>
              <span>Kustomisasi Ruang</span>
              <span>
                Proses pemesanan ruang kerja hanya
                <br /> membutuhkan waktu kurang dari 2 menit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3Page;
