import React from "react";
import "./Selection.css";
function Selection() {
  return (
    <section className="Selection">
      <div className="Selection__first">
        <p className="Selection__first-bold">مراحل خرید</p>
        <p className="Selection__first-normal">
          از لحظه سفارش تا لحظه تحویل کنار شما هستم
        </p>
      </div>
      <div className="selection__secend">
        <div className="selection__Guidance">
          <div className="Selection__Guidance-first">
            <img
              className="Selection__Guidance-first--img"
              src="img/procurement__first1--m.svg"
              alt="img"
            />
            <div className="first__box">
              <p className="Selection__Guidance-first--bold">ثبت اولیه سفارش</p>
              <p className="Selection__Guidance-first--normal">
                با تکمیل سبد خرید , پیش فاکتور ارسال میشه
              </p>
            </div>
          </div>
          <div className="selection__Guidance-second">
            <img
              className="selection__Guidance-second--img"
              src="img/procurement__secend1--m.svg"
              alt="img"
            />
            <div className="second__box">
              <p className="selection__Guidance-second--bold">
                تعیین روش پرداخت
              </p>
              <p className="selection__Guidance-second--normal">
                چک صیادی , کیف پول یا کارت اعتباری روش های پرداختی هستند
              </p>
            </div>
          </div>
          <div className="selection__Guidance-third">
            <img
              className="selection__Guidance-third--img"
              src="img/procurement__three1--m.svg"
              alt="img"
            />
            <div className="third__box">
              <p className="selection__Guidance-third--bold">
                کنترل کیفیت و بارگیری محصولات
              </p>
              <p className="selection__Guidance-third--normal">
                بعد از سفارش و کنترل کیفیت , بارگیری محصولات انجام میشه
              </p>
            </div>
          </div>
          <div className="selection__Guidance-fourth">
            <img
              className="selection__Guidance-fourth--img"
              src="img/procurement__foor1--m.svg"
              alt="img"
            />
            <div className="fourth__box">
              <p className="selection__Guidance-fourth--bold">
                صدور فاکتور رسمی و تحویل
              </p>
              <p className="selection__Guidance-fourth--normal">
                فاکتور رسمی برای شما ارسال شده و کالا به دست شما میرسد
              </p>
            </div>
          </div>
        </div>
        <div className="Selection__imgs">
          <img
            className="Selection__imgs-dot"
            src="img/procurement__dot1--m.svg"
            alt="dot"
          />
          <div className="Selection__imgs-kol">
            <img
              className="Selection__imgs-kol--one"
              src="img/procurement__img3--m.svg"
              alt="img"
            />
            <img
              className="Selection__imgs-kol--two"
              src="img/procurement__img3a--m.svg"
              alt="img"
            />
            <img
              className="Selection__imgs-kol--three"
              src="img/procurement__img3r--m.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Selection;
