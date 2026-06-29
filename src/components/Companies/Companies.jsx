import React from "react";
import "./Companies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
function Companies() {
  return (
    <section className="companies">
      <div className="companies__first">
        <img
          className="companies__first-dot"
          src="img/procurement__dot2--m.svg"
          alt="img-dot"
        />
        <img
          className="companies__first-dot1"
          src="img/companies__dot--d.svg"
          alt="img-dot"
        />
        <p className="companies__first-bold">نیاز به مشاوره دارید ؟</p>
        <p className="companies__first-normal">لحظه به لحظه کنار شما هستیم</p>
        <a className="companies__first-call" href="tel:989128102505">
          <p className="companies__first-call--number">09128102505</p>
          <img
            className="companies__first-call--img"
            src="img/procuremnt__callcuonseling--m.svg"
            alt="img-call"
          />
        </a>
      </div>
      <div className="companies__secend">
        <div className="companies__secend-1">
          <img
            className="companies__secend-1--img1"
            src="img/procuremnt__counselingimg1--m.svg"
            alt="img1"
          />
          <div className="companies__secend-12">
            <img
              className="companies__secend-12--img2"
              src="img/procuremnt__counselingimg2--m.svg"
              alt="img2"
            />
            <img
              className="companies__secend-12--img3"
              src="img/procuremnt__counselingimg3--m.svg"
              alt="img3"
            />
          </div>
        </div>
        <div className="companies__secend-2">
          <div className="companies__secend-21">
            <div className="companies__secend-211">
              <p className="companies__secend-211--text">100+</p>
              <img
                className="companies__secend-211--img"
                src="img/procuremnt__menu1--m.svg"
                alt="img"
              />
            </div>
            <span className="companies__secend-212">
              <p className="companies__secend-212--text">کاربر فعال</p>
            </span>
          </div>
          <div className="companies__secend-22">
            <div className="companies__secend-221">
              <p className="companies__secend-221--text">200+</p>
              <img
                className="companies__secend-221--img"
                src="img/procuremnt__menu2--m.svg"
                alt="img"
              />
            </div>
            <span className="companies__secend-222">
              <p className="companies__secend-222--text">محصول مختلف</p>
            </span>
          </div>
          <div className="companies__secend-23">
            <div className="companies__secend-231">
              <p className="companies__secend-231--text">20+</p>
              <img
                className="companies__secend-231--img"
                src="img/procuremnt__menu3--m.svg"
                alt="img"
              />
            </div>
            <span className="companies__secend-232">
              <p className="companies__secend-232--text">شرکت تامین کننده</p>
            </span>
          </div>
        </div>
      </div>
      <div className="companies__third">
        <div className="companies__third-top">
          <p className="companies__third-top--bold">کارخانه جات تامین کننده</p>
          <p className="companies__third-top--normal">
            بهترین هارا برای شما گرد هم اوردیم
          </p>
        </div>
        <Swiper
          navigation={true}
          modules={[Grid, Navigation]}
          className="companies__third-end"
          spaceBetween={25}
          slidesPerView={2}
          loop={true}
          grid={{
            fill: "row",
            rows: 2,
          }}
          breakpoints={{
            0: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: "auto", grid: { rows: 1 } },
          }}
        >
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__img1.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت سپاهان اصفحان</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__img2.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت انوشا پرشیا</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__img3--m.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت پارس پلاستیک</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__imglist4--d.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت قطران ساوه</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__imglist6--d.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت سیمان صوفیان</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__imglist5--d.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت فولاد کاوه</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__imglist6--d.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت سیمان صوفیان</p>
          </SwiperSlide>
          <SwiperSlide className="companies__third-end1">
            <img
              className="companies__third-end2"
              src="img/companies__imglist4--d.svg"
              alt="img"
            />
            <p className="companies__third-end3">شرکت قطران ساوه</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Companies;
