import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-1">
          <img
            className="footer__top1-img"
            src="img/footer__logo1--m.svg"
            alt="img"
          />
          <p className="footer__top1-text">
            تامین کالا ، تامین کننده انواع کالاهای گاز رسانی و مصالح ساختمانی که
            با بیشت 10 سال سابقه در این زمینه فعالیت میکند و هدف از تاسیس این وب
            سایت فراهم کردن بستری امن برای خرید مصالح مختلف با کمترین قیمت و
            بالا ترین کیفیت میباشد.
          </p>
        </div>
        <div className="footer__top-2">
          <div className="footer__top2--first">
            <img
              className="footer__top2-img"
              src="img/footer__starblack--m.svg"
              alt="img"
            />
            <p className="footer__top2-text">دسترسی سریع</p>
          </div>
          <div className="footer__top2--secend">
            <ul>
              <li class="footer__top2-1">دسته بندی محصولات</li>
              <li class="footer__top2-1">درباره ما</li>
              <li class="footer__top2-1">تماس با ما</li>
              <li class="footer__top2-1">ورود / ثبت نام</li>
            </ul>
          </div>
        </div>
        <div className="footer__top-3">
          <div className="footer__top-3--first">
            <img
              className="footer__top3-img"
              src="img/footer__starblack--m.svg"
              alt="img"
            />
            <p className="footer__top3-text">عضویت در خبرنامه</p>
          </div>
          <div className="footer__top-3--secend">
            <span className="footer__top3-span--1">عضویت</span>
            <input
              type="search"
              maxLength={30}
              placeholder="ایمیل خود را وارد کنید"
              className="footer__top3-span--2"
            />
          </div>
          <div className="footer__top-3--third">
            <div class="footer__contact--item">
              <a href="#" class="footer__contact--link">
                <img src="img/footer__carbon--m.svg" alt="carbon" />
                تبریز-کوی ولیعصر-خیابان فروغی-پلاک6
              </a>
            </div>
            <div class="footer__contact--item">
              <a href="#" class="footer__contact--link">
                <img src="img/footer__path--m.svg" alt="path@" />
                info@taminkala.com
              </a>
            </div>
            <div class="footer__contact--item">
              <a href="call:09128102505" class="footer__contact--link">
                <img src="img/footer__call--m.svg" alt="call" />
                09128102505
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__end">
        <div className="footer__end-1">
          <a href="#" class="footer__list--app">
            <img
              class="footer__appp"
              src="img/footer__linkdin--m.svg"
              alt="linkedIn"
            />
          </a>
          <a href="#" class="footer__list--app">
            <img
              class="footer__appp"
              src="img/footer__facebook--m.svg"
              alt="facebook"
            />
          </a>
          <a href="#" class="footer__list--app">
            <img
              class="footer__appp"
              src="img/footer__telegram--m.svg"
              alt="telegram"
            />
          </a>
          <a href="#" class="footer__list--app">
            <img
              class="footer__appp"
              src="img/footer__instagram--m.svg"
              alt="instagram"
            />
          </a>
        </div>
        <div className="footer__end-2">
          <img
            class="footer__copyright--image"
            src="img/footer__copyraight--m.svg"
            alt="copyright"
          />
          تمام حقوق این وب سایت برای تامین کالا محفوظ میباشد.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
