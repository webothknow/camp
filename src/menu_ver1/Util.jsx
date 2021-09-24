import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Util = () => {
  return (
    <div className="inner_contents util_wrap">
      <div className="col">
        <div className="row">
          <div class="util_toggle_col_left_top">
            <label class="toggle">
              <input
                id="mycheckbox"
                type="checkbox"
                class="default"
                id="SL00"
                // onChange={(e) =>
                //   send_cmd("gfs", "sol", [
                //     0,
                //     onOffCheck(e.target.checked),
                //   ])
                // }
              />
              <span class="dot">
                <p class="text_on">on</p>
                <p class="text_off">off</p>
              </span>
            </label>
          </div>
          <div className="util_name_col"></div>
          <div className="util_gauge_col">
            <div>
              <div>청수용량</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="util_toggle_col_left_top">
            <label class="toggle">
              <input
                id="mycheckbox"
                type="checkbox"
                class="default"
                id="SL00"
                // onChange={(e) =>
                //   send_cmd("gfs", "sol", [
                //     0,
                //     onOffCheck(e.target.checked),
                //   ])
                // }
              />
              <span class="dot">
                <p class="text_on">on</p>
                <p class="text_off">off</p>
              </span>
            </label>
          </div>
          <div className="util_name_col"></div>
          <div className="util_gauge_col">
            <div>
              <div>오수용량</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
        <div className="row">
          <div className="util_toggle_col_left_bottom">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>냉장고</div>
              </div>
            </div>
          </div>
          <div className="util_toggle_col_left_bottom">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>펌프</div>
                <div>주방</div>
              </div>
            </div>
          </div>
          <div className="util_toggle_col_left_bottom">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>펌프</div>
                <div>화장실</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div class="util_toggle_col_middle_top"></div>
          <div className="util_toggle_col_middle_bottom">
            <div>
              <div>배터리 전압</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="util_toggle_col_middle_top"></div>
          <div className="util_toggle_col_middle_bottom">
            <div>
              <div>배터리 온도</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="util_toggle_col_middle_top"></div>
          <div className="util_toggle_col_middle_bottom">
            <div>
              <div>배터리 전류</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
        <div className="row">
          <div className="util_toggle_col_middle_bottom_btn">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>인버터</div>
                <div>주방</div>
              </div>
            </div>
          </div>
          <div className="util_toggle_col_middle_bottom_btn">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>인버터</div>
                <div>화장실</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div class="util_toggle_col_middle_top"></div>
          <div className="util_toggle_col_middle_bottom">
            <div>
              <div>태양광(200)</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="util_toggle_col_middle_top"></div>
          <div className="util_toggle_col_middle_bottom">
            <div>
              <div>태양광(600)</div>
            </div>
            <div>
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={100}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
        <div className="row">
          <div className="util_toggle_col_middle_bottom_btn">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>차량</div>
                <div>시동</div>
              </div>
            </div>
          </div>
          <div className="util_toggle_col_middle_bottom_btn">
            <div class="inner_util_toggle_col_left">
              <label class="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  class="default"
                  id="SL00"
                  // onChange={(e) =>
                  //   send_cmd("gfs", "sol", [
                  //     0,
                  //     onOffCheck(e.target.checked),
                  //   ])
                  // }
                />
                <span class="dot">
                  <p class="text_on">on</p>
                  <p class="text_off">off</p>
                </span>
              </label>
            </div>
            <div class="inner_util_toggle_col_right">
              <div>
                <div>유압</div>
                <div>레벨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Util;
