import React, { useState, useEffect } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'; //slider bar
import RangeSlider from 'react-bootstrap-range-slider'; //slider bar
import { ProgressBar, Button } from 'react-bootstrap'; //progress bar

const Ctrl = () => {
  //horizontal range slider
  const [rangevalue, setRangeValue] = useState({
    li_3_livingroom_top: 0,
    li_3_livingroom_bottom: 0,
    li_3_bedroom_top: 0,
    li_3_bedroom_bottom: 0,
    li_3_earning_left: 0,
    li_3_earning_right: 0,
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
          <div className="inner_col_wrap_no_flex margin_right">
            <div className="vertical_bar">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: '50%' }}
                >
                  <span class="sr-only">
                    <div>청수</div>
                    <div>50%</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
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
                <p class="text_on">
                  <div>청수</div>
                  <div>퇴수</div>
                </p>
                <p class="text_off">
                  <div>청수</div>
                  <div>퇴수</div>
                </p>
              </span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
            <div className="vertical_bar">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: '30%' }}
                >
                  <span class="sr-only">
                    <div>오수</div>
                    <div>30%</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_flex">
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
                <p class="text_on">
                  <div>오수</div>
                  <div>퇴수</div>
                </p>
                <p class="text_off">
                  <div>오수</div>
                  <div>퇴수</div>
                </p>
              </span>
            </label>
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>거실</div>
                  <div>메인</div>
                </p>
                <p class="text_off">
                  <div>거실</div>
                  <div>메인</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>침실</div>
                  <div>메인</div>
                </p>
                <p class="text_off">
                  <div>침실</div>
                  <div>메인</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex">
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
                <p class="text_on">
                  <div>화장실</div>
                  <div>메인</div>
                </p>
                <p class="text_off">
                  <div>화장실</div>
                  <div>메인</div>
                </p>
              </span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>냉장고</div>
                </p>
                <p class="text_off">
                  <div>냉장고</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>펌프</div>
                  <div>주방</div>
                </p>
                <p class="text_off">
                  <div>펌프</div>
                  <div>주방</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex">
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
                <p class="text_on">
                  <div>펌프</div>
                  <div>화장실</div>
                </p>
                <p class="text_off">
                  <div>펌프</div>
                  <div>화장실</div>
                </p>
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* column 2 */}
      <div className="col">
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
            <div class="progress progress-bar-vertical">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '30%' }}
              >
                <span class="sr-only">
                  <div>배터리전압</div>
                  <div>30%</div>
                </span>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_no_flex">
            <div class="progress progress-bar-vertical">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '30%' }}
              >
                <span class="sr-only">
                  <div>태양광(200)</div>
                  <div>30%</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
            <div class="progress progress-bar-vertical">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '30%' }}
              >
                <span class="sr-only">
                  <div>배터리온도</div>
                  <div>30%</div>
                </span>
              </div>
            </div>
          </div>
          <div className="inner_col_wrap_no_flex">
            <div class="progress progress-bar-vertical">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '30%' }}
              >
                <span class="sr-only">
                  <div>태양광(600)</div>
                  <div>30%</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
            <div class="progress progress-bar-vertical">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '30%' }}
              >
                <span class="sr-only">
                  <div>배터리전류</div>
                  <div>30%</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>화장실</div>
                  <div>간접등</div>
                </p>
                <p class="text_off">
                  <div>화장실</div>
                  <div>간접등</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>벙커</div>
                  <div>메인</div>
                </p>
                <p class="text_off">
                  <div>벙커</div>
                  <div>메인</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex">
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
                <p class="text_on">
                  <div>벙커</div>
                  <div>간접등</div>
                </p>
                <p class="text_off">
                  <div>벙커</div>
                  <div>간접등</div>
                </p>
              </span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>인버터</div>
                  <div>주방</div>
                </p>
                <p class="text_off">
                  <div>인버터</div>
                  <div>주방</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>인버터</div>
                  <div>화장실</div>
                </p>
                <p class="text_off">
                  <div>인버터</div>
                  <div>화장실</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>차량</div>
                  <div>시동</div>
                </p>
                <p class="text_off">
                  <div>차량</div>
                  <div>시동</div>
                </p>
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* column 3 */}
      <div className="col">
        <div className="row">
          <div class="inner_col_wrap_no_flex margin_right">
            <label className="toggle toggle_slider">
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
                <p class="text_on">
                  <div>거실</div>
                  <div>상부</div>
                </p>
                <p class="text_off">
                  <div>거실</div>
                  <div>상부</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="li_3_livingroom_top"
                value={rangevalue.li_3_livingroom_top}
                step={10}
                min={0}
                max={100}
                onChange={(e) => rangdesliderHandle(e)}
              />
            </div>
          </div>
          <div class="inner_col_wrap_no_flex">
            <label className="toggle toggle_slider">
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
                <p class="text_on">
                  <div>거실</div>
                  <div>하부</div>
                </p>
                <p class="text_off">
                  <div>거실</div>
                  <div>하부</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="li_3_livingroom_bottom"
                value={rangevalue.li_3_livingroom_bottom}
                step={10}
                min={0}
                max={100}
                onChange={(e) => rangdesliderHandle(e)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div class="inner_col_wrap_no_flex margin_right">
            <label className="toggle toggle_slider">
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
                <p class="text_on">
                  <div>침실</div>
                  <div>상부</div>
                </p>
                <p class="text_off">
                  <div>침실</div>
                  <div>상부</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="li_3_bedroom_top"
                value={rangevalue.li_3_bedroom_top}
                step={10}
                min={0}
                max={100}
                onChange={(e) => rangdesliderHandle(e)}
              />
            </div>
          </div>
          <div class="inner_col_wrap_no_flex">
            <label className="toggle toggle_slider">
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
                <p class="text_on">
                  <div>침실</div>
                  <div>하부</div>
                </p>
                <p class="text_off">
                  <div>침실</div>
                  <div>하부</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="li_3_bedroom_bottom"
                value={rangevalue.li_3_bedroom_bottom}
                step={10}
                min={0}
                max={100}
                onChange={(e) => rangdesliderHandle(e)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div class="inner_col_wrap_no_flex margin_right">
            <label className="toggle toggle_slider">
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
                <p class="text_on">
                  <div>어닝</div>
                  <div>좌</div>
                </p>
                <p class="text_off">
                  <div>어닝</div>
                  <div>좌</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="li_3_earning_left"
                value={rangevalue.li_3_earning_left}
                step={10}
                min={0}
                max={100}
                onChange={(e) => rangdesliderHandle(e)}
              />
            </div>
          </div>
          <div class="inner_col_wrap_no_flex">
            <label className="toggle toggle_slider">
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
                <p class="text_on">
                  <div>어닝</div>
                  <div>우</div>
                </p>
                <p class="text_off">
                  <div>어닝</div>
                  <div>우</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="li_3_earning_right"
                value={rangevalue.li_3_earning_right}
                step={10}
                min={0}
                max={100}
                onChange={(e) => rangdesliderHandle(e)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>주방</div>
                </p>
                <p class="text_off">
                  <div>주방</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>차량</div>
                  <div>하부등</div>
                </p>
                <p class="text_off">
                  <div>차량</div>
                  <div>하부등</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>전체등</div>
                </p>
                <p class="text_off">
                  <div>전체등</div>
                </p>
              </span>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>유압</div>
                  <div>레벨</div>
                </p>
                <p class="text_off">
                  <div>유압</div>
                  <div>레벨</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_no_flex margin_right">
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
                <p class="text_on">
                  <div>화장실</div>
                  <div>팬</div>
                </p>
                <p class="text_off">
                  <div>화장실</div>
                  <div>팬</div>
                </p>
              </span>
            </label>
          </div>
          <div className="inner_col_wrap_flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Ctrl;
