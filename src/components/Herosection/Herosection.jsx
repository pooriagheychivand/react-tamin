import React from "react";
import "./Herosection.css";

function Herosection() {
  return (
    <>
      <section className="Hero">
        <h2 className="Hero__title">دسته بندی محصولات</h2>
        <p className="Hero__description">کامل ترین و بروز ترین محصولات </p>
        <div className="Hero__buttom">
          <span className="Hero__buttom--active1">کالاهای گاز رسانی </span>
          <span className="Hero__buttom--active2">مصالح ساختمانی</span>
        </div>
        <div className="Hero__all">
          <div className="box__first">
            <div className="Hero__all-first">
              <p className="Hero__all-first--text">کالاهای گاز رسانی</p>
              <a className="Hero__all-first--flash" href="#">
                <img src="/img/herosection__flashw--m.svg" alt="flash" />
              </a>
            </div>
            <div className="Hero__all-secend">
              <div className="secend__Hero">
                <p className="Hero__all-secend--text">لوله های فولادی</p>
                <a className="Hero__all-secend--flash" href="#">
                  <img src="/img/herosection__flashs--m.svg" alt="flash" />
                </a>
              </div>
              <img
                className="Hero__all-secend--pipe"
                src="/img/herosection__pipefulad--m.svg"
                alt=""
              />
            </div>
          </div>
          <div className="Hero__all-threed">
            <div className="threed__Hero">
              <p className="Hero__all-threed--text">لوله های پلی اتیلن</p>
              <a className="Hero__all-threed--flash" href="#">
                <img src="/img/herosection__flashs--m.svg" alt="flash" />
              </a>
            </div>
            <img
              className="Hero__all-threed--pipe"
              src="/img/herosection__Etilenpipe--m.svg"
              alt="pipe"
            />
          </div>
          <div className="box__secend">
            <div className="Hero__all-foor">
              <img
                className="Hero__all-foor--pipe"
                src="/img/herosection__conctionsfpipe--m.svg"
                alt="pipe"
              />
              <div className="foor__Hero">
                <p className="Hero__all-foor--text">اتصالات فولادی</p>
                <a className="Hero__all-foor--flash" href="#">
                  <img src="/img/herosection__flashs--m.svg" alt="flash" />
                </a>
              </div>
            </div>
            <div className="Hero__all-five">
              <img
                className="Hero__all-five--pipe"
                src="/img/herosection__conctionsppipe--m.svg"
                alt="pipe"
              />
              <div className="five__Hero">
                <p className="Hero__all-five--text">اتصالات پلی اتیلن</p>
                <a href="#">
                  <img
                    className="Hero__all-five--flash"
                    src="/img/herosection__flashs--m.svg"
                    alt="flash"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="Hero__all-six">
            <div className="six__Hero">
              <p className="Hero__all-six--text">مصالح عایق کاری</p>
              <a href="#">
                <img
                  className="Hero__all-six--flash"
                  src="/img/herosection__flashs--m.svg"
                  alt="flash"
                />
              </a>
            </div>
            <img
              className="Hero__all-six--pipe"
              src="/img/herosection__sellpipe--m.svg"
              alt="pipe"
            />
          </div>
          <div className="box__threed">
            <div className="Hero__all-seven">
              <div className="seven__Hero">
                <p className="Hero__all-seven--text">انشعابات (علمک ها)</p>
                <a href="#">
                  <img
                    className="Hero__all-seven--flash"
                    src="/img/herosection__flashs--m.svg"
                    alt="flash"
                  />
                </a>
              </div>
              <img
                className="Hero__all-seven--pipe"
                src="/img/herosection__shootcountor--m.svg"
                alt="pipe"
              />
            </div>
            <div className="Hero__all-eight">
              <p className="Hero__all-eight--text">سایر تجهیزات</p>
              <a className="Hero__all-eight--flash" href="#">
                <img src="/img/herosection__flashs--m.svg" alt="flash" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Herosection;
