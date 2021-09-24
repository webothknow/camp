import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Ctrl = () => {
  //horizontal range slider
  const [rangevalue, setRangeValue] = useState({
    li_1_2: 0,
    li_1_3: 0,
    li_1_4: 0,
    li_1_5: 0,
    li_2_2: 0,
    li_2_3: 0,
  });
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setRangeValue({
      ...rangevalue,
      [e.target.name]: value,
    });
  };

  return (
    <div className="inner_contents ctrl_wrap">
      {/* column 1 */}
      <div className="col">
        <div className="row">
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>청수</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
                <label className="toggle">
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
              <div className="toggle_name">퇴수</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>오수</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
                <label className="toggle">
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
              <div className="toggle_name">퇴수</div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>거실</div>
                  <div>메인</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>침실</div>
                  <div>메인</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>화장실</div>
                  <div>메인</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">냉장고</div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>펌프</div>
                  <div>주방</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>펌프</div>
                  <div>화장실</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* column 2 */}
      <div className="col">
        <div className="row">
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>배터리 전압</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>태양광(200)</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>배터리 온도</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>태양광(600)</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex">
            <div className="semi_label">
              <div>배터리 전류</div>
            </div>
            <div className="semi_bar">
              <div>
                <SemiCircleProgressBar
                  percentage={74}
                  showPercentValue
                  diameter={130}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>화장실</div>
                  <div>간접등</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>벙커</div>
                  <div>메인</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>벙커</div>
                  <div>간접등</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>인버터</div>
                  <div>주방</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>인버터</div>
                  <div>주방</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>차량</div>
                  <div>시동</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* column 3 */}
      <div className="col">
        <div className="row">
          <div class="inner_col_wrap_flex">
            <div className="toggle_wrap">
              <label className="toggle">
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
            <div className="range_name_wrap">
              <div className="range_name">
                <div>거실 - 상부</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="li_1_2"
                  value={rangevalue.li_1_2}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
          <div class="inner_col_wrap_flex">
            <div className="toggle_wrap">
              <label className="toggle">
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
            <div className="range_name_wrap">
              <div className="range_name">
                <div>거실 - 하부</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="li_1_3"
                  value={rangevalue.li_1_3}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="inner_col_wrap_flex">
            <div className="toggle_wrap">
              <label className="toggle">
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
            <div className="range_name_wrap">
              <div className="range_name">
                <div>침실 - 상부</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="li_2_2"
                  value={rangevalue.li_2_2}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
          <div class="inner_col_wrap_flex">
            <div className="toggle_wrap">
              <label className="toggle">
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
            <div className="range_name_wrap">
              <div className="range_name">
                <div>침실 - 하부</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="li_2_3"
                  value={rangevalue.li_2_3}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="inner_col_wrap_flex">
            <div className="toggle_wrap">
              <label className="toggle">
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
            <div className="range_name_wrap">
              <div className="range_name">
                <div>어닝 - 좌</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="li_1_4"
                  value={rangevalue.li_1_4}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
          <div class="inner_col_wrap_flex">
            <div className="toggle_wrap">
              <label className="toggle">
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
            <div className="range_name_wrap">
              <div className="range_name">
                <div>어닝 - 우</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="li_1_5"
                  value={rangevalue.li_1_5}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>주방</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>차량</div>
                  <div>하부등</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>전체등</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>유압</div>
                  <div>레벨</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>화장실</div>
                  <div>팬</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
            <div class="inner_col_flex">
              <div className="toggle_wrap">
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
              <div className="toggle_name">
                <div>
                  <div>ㅇㅇㅇ</div>
                  <div>ㅇㅇㅇ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ctrl;
