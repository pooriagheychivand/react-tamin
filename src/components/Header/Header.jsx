import React from "react";
import "./Header.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
function Header() {
  return (
    <>
      <header className="Header">
        <div className="Header__first">
          <nav className="Header__nav">
            <div className="Header__nav-first">
              <a href="#" className="Header__nav-first--hamber">
                <img src="/img/header__hamber--m.svg" alt="Hamber" />
              </a>
              <div className="Header__nav-first--logo">
                <img src="/img/header__logo--m.svg" alt="Logo" />
              </div>
              <div className="Header__nav-first--search">
                <input
                  type="search"
                  placeholder="محصول مورد نظر خود را سرچ کنید..."
                  maxLength={30}t
                  className="Header__nav-first--search1"
                />
                <img
                  className="Header__nav-first--search2"
                  src="/img/header__search--m.svg"
                  alt="search"
                />
              </div>
              <a href="#" className="Header__nav-first--shop">
                <img src="/img/header__shop--m.svg" alt="Shop" />
              </a>
              <a href="#" className="Header__nav-first--accent">
                <img src="/img/header__accent--m.svg" alt="Accent" />
                <p className="Header__nav-first--accent1">ثبت نام | ورود</p>
              </a>
            </div>
            <div className="Header__nav-m">
              <input
                type="search"
                placeholder="محصول مورد نظر خود را سرچ کنید..."
                maxLength={30}
                className="Header__nav-m--text"
              />
              <img
                className="Header__nav-m--img"
                src="/img/header__search--m.svg"
                alt="search"
              />
            </div>
            <div className="Header__nav-d">
              <a className="Header__nav-d--1" href="#">
                صفحه اصلی
              </a>
              <a href="#" className="Header__nav--d12">
                <p className="Header__nav--d123">کالاهای گاز رسانی</p>
                <img
                  className="Header__nav--d124"
                  src="/img/header__flash--d.svg"
                  alt="flash"
                />
              </a>
              <a className="Header__nav--d13" href="#">
                <p className="Header__nav--d131">کالاهای ساختمانی</p>
                <img
                  className="Header__nav--d132"
                  src="/img/header__flash--d.svg"
                  alt="flash"
                />
              </a>
              <a href="#" className="Header__nav--d14">
                درباره ما
              </a>
              <a href="#" className="Header__nav--d15">
                تماس با ما
              </a>
              <div className="Header__nav--p">
                <a className="Header__nav--p1" href="call:021-4584587">
                  4584587
                  <span className="Header__nav--p2">-021</span>
                  <img
                    className="Header__nav--p3"
                    src="/img/header__call--d.svg"
                    alt="phone"
                  />
                </a>
              </div>
            </div>
          </nav>
          <div className="Header__secend">
            <p className="Header__secend--1">
              کالا رو برات <span className="Header__secend--2">تامین </span>
              میکنیم!
            </p>
            <p className="Header__secand--3">
              تامین کننده کلیه تجهیزات گاز رسانی کشور
            </p>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            className="header__swiper"
            slidesPerView={"3"}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            speed={5000}
          >
            <SwiperSlide>
              <p>پشتیبانی 24 ساعته محصولات</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/header__star--m.svg" alt="star" />
            </SwiperSlide>
            <SwiperSlide>
              <p>رهگیری انلاین محصولات خرید</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/header__star--m.svg" alt="star" />
            </SwiperSlide>
            <SwiperSlide>
              <p>ارسال سریع به سراسر کشور</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/header__star--m.svg" alt="star" />
            </SwiperSlide>
          </Swiper>
        </div>
      </header>
    </>
  );
}
export default Header;
