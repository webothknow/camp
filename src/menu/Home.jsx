import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"; //slider bar
import RangeSlider from "react-bootstrap-range-slider"; //slider bar
import { ProgressBar, Button } from "react-bootstrap"; //progress bar
import { Modal } from "react-bootstrap"; //modal
import Videojs from "../video.js"; //camera

const Home = () => {
  //horizontal range slider
  const [rangevalue, setRangeValue] = useState({
    li_3_livingroom_top: 0,
    li_3_livingroom_bottom: 0,
    li_3_bedroom_top: 0,
    li_3_bedroom_bottom: 0,
    li_3_earning_left: 0,
    li_3_earning_right: 0,
    air_1_livingroom_temp: 0,
    air_1_bedroom_temp: 0,
    air_1_bed: 0,
    air_1_floor: 0,
    air_2_mixfan_temp: 0,
    air_2_bunker: 0,
    air_2_warmair: 0,
    air_3_heater_d2: 0,
    air_3_heater_d5: 0,
  });
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setRangeValue({
      ...rangevalue,
      [e.target.name]: value,
    });
  };

  //progress bar
  let freshWater = 10;
  let wasteWater = 20;
  let batteryVoltage = 30;
  let batteryTemp = 40;
  let batteryCurrent = 50;
  let photovoltaics_200 = 60;
  let photovoltaics_600 = 70;

  // modal
  const [CameraModal, HandleCameraModal] = useState(false);

  //camera click event
  const showCamera = () => {
    HandleCameraModal(true);
  };

  //camera1
  const videoJsOptions = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  //camera2
  const videoJsOptions2 = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div className="inner_contents home_wrap">
      {/* column 1 */}
      <div className="col">
        <div className="wrap_bg li_wrap">
          <div className="title">조명</div>
          <div className="row">
            <div class="inner_col_wrap_flex slider_width margin_right">
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
            <div class="inner_col_wrap_flex slider_width margin_right">
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
            <div class="inner_col_wrap_flex slider_width">
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
          </div>
          <div className="row">
            <div class="inner_col_wrap_flex slider_width margin_right">
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
            <div class="inner_col_wrap_flex slider_width margin_right">
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
            <div class="inner_col_wrap_flex slider_width">
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
        </div>
        <div className="wrap_bg li_control_wrap">
          <div className="title">조명장치</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex">
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
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex">
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
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_left margin_right">
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
            <div className="inner_col_wrap_flex margin_right"></div>
            <div className="inner_col_wrap_flex margin_right"></div>
            <div className="inner_col_wrap_flex"></div>
          </div>
        </div>
      </div>
      {/* column 2 */}
      <div className="col">
        <div className="wrap_bg water_wrap">
          <div className="title">오/폐수</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <div className="vertical_bar">
                <div class="progress progress-bar-vertical">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${freshWater}%` }}
                  >
                    <span class="sr-only">
                      <div>청수</div>
                      <div>{freshWater}</div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
              <div className="vertical_bar">
                <div class="progress progress-bar-vertical">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${wasteWater}%` }}
                  >
                    <span class="sr-only">
                      <div>오수</div>
                      <div>{wasteWater}</div>
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
        </div>
        <div className="wrap_bg battery_wrap">
          <div className="title">배터리</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${batteryVoltage}%` }}
                >
                  <span class="sr-only">
                    <div>
                      <div>배터리</div>
                      <div>전압</div>
                    </div>
                    <div>{batteryVoltage}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${batteryTemp}%` }}
                >
                  <span class="sr-only">
                    <div>
                      <div>배터리</div>
                      <div>온도</div>
                    </div>
                    <div>{batteryTemp}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${batteryCurrent}%` }}
                >
                  <span class="sr-only">
                    <div>
                      <div>배터리</div>
                      <div>전류</div>
                    </div>
                    <div>{batteryCurrent}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="inner_col_wrap_flex"></div>
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${photovoltaics_200}%` }}
                >
                  <span class="sr-only">
                    <div>
                      <div>태양광</div>
                      <div>(200)</div>
                    </div>
                    <div>{photovoltaics_200}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <div class="progress progress-bar-vertical">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${photovoltaics_600}%` }}
                >
                  <span class="sr-only">
                    <div>
                      <div>태양광</div>
                      <div>(600)</div>
                    </div>
                    <div>{photovoltaics_600}</div>
                  </span>
                </div>
              </div>
            </div>
            <div className="inner_col_wrap_flex margin_right"></div>
            <div className="inner_col_wrap_flex"></div>
          </div>
        </div>
        <div className="wrap_bg util_control_wrap">
          <div className="title">전기장치</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex"></div>
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex">
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
          </div>
        </div>
      </div>
      {/* column 3 */}
      <div className="col">
        <div className="wrap_bg temp_wrap">
          <div className="title">온도설정</div>
          <div className="row">
            <div class="inner_col_wrap_flex slider_width margin_right">
              <div className="control_wrap">
                <div className="control_name">
                  <div>
                    <div>거실</div>
                    <div>온도</div>
                  </div>
                </div>
                <div className="buttons">
                  <div className="control_btn">
                    <div>+</div>
                  </div>
                  <div className="control_margin_bottom"></div>
                  <div className="control_btn">
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inner_col_wrap_flex slider_width margin_right">
              <div className="control_wrap">
                <div className="control_name">
                  <div>
                    <div>침실</div>
                    <div>온도</div>
                  </div>
                </div>
                <div className="buttons">
                  <div className="control_btn control_plus">
                    <div>+</div>
                  </div>
                  <div className="control_margin_bottom"></div>
                  <div className="control_btn control_minus">
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inner_col_wrap_flex slider_width">
              <div className="control_wrap">
                <div className="control_name">
                  <div>
                    <div>맥스팬</div>
                    <div>온도</div>
                  </div>
                </div>
                <div className="buttons">
                  <div className="control_btn control_plus">
                    <div>+</div>
                  </div>
                  <div className="control_margin_bottom"></div>
                  <div className="control_btn control_minus">
                    <div>-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="inner_col_wrap_flex slider_width margin_right">
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
                    <div>온풍</div>
                  </p>
                  <p class="text_off">
                    <div>온풍</div>
                  </p>
                </span>
              </label>
              <div className="range_slider">
                <RangeSlider
                  name="air_2_warmair"
                  value={rangevalue.air_2_warmair}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
            <div class="inner_col_wrap_flex slider_width margin_right">
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
                    <div>히터</div>
                    <div>(D2)</div>
                  </p>
                  <p class="text_off">
                    <div>히터</div>
                    <div>(D2)</div>
                  </p>
                </span>
              </label>
              <div className="range_slider">
                <RangeSlider
                  name="air_3_heater_d2"
                  value={rangevalue.air_3_heater_d2}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
            <div class="inner_col_wrap_flex slider_width">
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
                    <div>히터</div>
                    <div>(D5)</div>
                  </p>
                  <p class="text_off">
                    <div>히터</div>
                    <div>(D5)</div>
                  </p>
                </span>
              </label>
              <div className="range_slider">
                <RangeSlider
                  name="air_3_heater_d5"
                  value={rangevalue.air_3_heater_d5}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div class="inner_col_wrap_flex slider_width margin_right">
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
                    <div>침대</div>
                  </p>
                  <p class="text_off">
                    <div>침대</div>
                  </p>
                </span>
              </label>
              <div className="range_slider">
                <RangeSlider
                  name="air_1_bed"
                  value={rangevalue.air_1_bed}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
            <div class="inner_col_wrap_flex slider_width margin_right">
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
                    <div>바닥</div>
                  </p>
                  <p class="text_off">
                    <div>바닥</div>
                  </p>
                </span>
              </label>
              <div className="range_slider">
                <RangeSlider
                  name="air_1_floor"
                  value={rangevalue.air_1_floor}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
            <div class="inner_col_wrap_flex slider_width">
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
                    <div>벙커</div>
                  </p>
                  <p class="text_off">
                    <div>벙커</div>
                  </p>
                </span>
              </label>
              <div className="range_slider">
                <RangeSlider
                  name="air_2_bunker"
                  value={rangevalue.air_2_bunker}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_bg other_control_wrap">
          <div className="title">장치</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
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
            <div className="inner_col_wrap_flex margin_right"></div>
            <div className="inner_col_wrap_flex margin_right"></div>
            <div className="inner_col_wrap_flex margin_right">
              <div className="camera_btn" onClick={() => showCamera()}>
                카메라
              </div>
            </div>
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
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
                    <div>AUX1</div>
                  </p>
                  <p class="text_off">
                    <div>AUX1</div>
                  </p>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
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
                    <div>AUX2</div>
                  </p>
                  <p class="text_off">
                    <div>AUX2</div>
                  </p>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
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
                    <div>AUX3</div>
                  </p>
                  <p class="text_off">
                    <div>AUX3</div>
                  </p>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
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
                    <div>AUX4</div>
                  </p>
                  <p class="text_off">
                    <div>AUX4</div>
                  </p>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* camera modal */}
      <Modal show={CameraModal} onHide={() => HandleCameraModal(false)}>
        <Button
          className="camera_close"
          onClick={() => HandleCameraModal(false)}
        >
          X
        </Button>
        <Modal.Body>
          <div className="camera_view">
            <Videojs {...videoJsOptions} />
          </div>
          <div className="camera_view">
            <Videojs {...videoJsOptions2} />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
