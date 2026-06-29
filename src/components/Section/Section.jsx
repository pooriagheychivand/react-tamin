import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Section.css";
function Section() {
  return (
    <section className="section">
      <div className="section__top">
        <p className="section__top-bold">نیاز به مشاوره دارید؟</p>
        <p className="section__top-normal">لحظه به لحظه کنار شما هستیم</p>
        <img
          className="section__top-img"
          src="img/companies__dot11--m.svg"
          alt="img"
        />
      </div>
      <div className="section__end">
        <div className="section__end-1">
          <img
            className="section__end-1--1"
            src="img/companies__imgprushes--m.svg"
            alt="img"
          />
          <p className="section__end-1--2">
            راهنمایی خرید محصولات ساختمانی برای شروع ساخت و ساز!
          </p>
          <p className="section__end-1--3"> دسته بندی : ساختمانی</p>
          <p className="section__end-1--4">
            ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ ریزی
            دقیقی انجام دهید. این شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و
            تعیین زمانبندی پروژه است.
          </p>
          <span className="section__end-1--5">
            <p className="section__end-1--6">ادامه مطلب</p>
          </span>
        </div>
        <div className="section__end-3">
          <img
            className="section__end-1--i"
            src="img/companies__blogsecend--d.svg"
            alt="img"
          />
          <p className="section__end-1--2">فاکتور های مورد نیاز هر ساختمان</p>
          <p className="section__end-1--3">دسته بندی : ساختمانی</p>
          <p className="section__end-1--4">
            ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی
            انجام دهید. این شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین
            زمانبندی پروژه است.
          </p>
          <span className="section__end-1--ii">
            <p className=".section__end-1--o">ادامه مطلب</p>
          </span>
        </div>
        <div className="section__end-4">
          <img className="section__end-1--i" src="img/companies__blogtheerd--d.svg" alt="img" />
          <p className="section__end-1--2"> راهنمایی خرید محصولات ساختمانی برای شروع ساخت و ساز!</p>
          <p className="section__end-1--3">های مورد نیاز هر ساختمان</p>
          <p className="section__end-1--4">
            ابتدا نیاز است که برای ساخت و ساز ساختمان، بررسی و برنامه‌ریزی دقیقی
            انجام دهید. این شامل مطالعه و تحلیل نقشه‌ها، محاسبه هزینه‌ها و تعیین
            زمانبندی پروژه است.</p>
          <span className="section__end-1--5">
            <p className="section__end-1--6">ادامه مطلب</p>
          </span>
        </div>
      </div>
      <div className="section__end-2">
        <div className="section__end-2--img">
          <img
            className="section__end-2--img1"
            src="img/companies__flashhrr--m.svg"
            alt="flash r"
          />
          <img
            className="section__end-2--img2"
            src="img/companies__flashhll--m.svg"
            alt="flash l"
          />
        </div>
        <span className="section__end-1--7">
          <p className="section__end-1--8">مشاهده بیشتر</p>
          <img
            className="section__end-1--9"
            src="img/companies__flashhh--m.svg"
            alt="flash"
          />
        </span>
      </div>
    </section>
  );
}
export default Section;
