import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"; //slider bar
import RangeSlider from "react-bootstrap-range-slider"; //slider bar
import { ProgressBar, Button } from "react-bootstrap"; //progress bar
import { Modal } from "react-bootstrap"; //modal
import Videojs from "../video.js"; //camera

const Home = (data, { sendCmd }) => {
  useEffect(() => {
    console.log("home data: ", data);
    console.log("sendCmd: ", sendCmd);
    homeDataHandle(data);
  }, [data]);

  const homeDataHandle = (data) => {
    let d = data;

    if (
      d &&
      d["d1"] &&
      d["d2"] &&
      d["d3"] &&
      d["d4"] &&
      d["d5"] &&
      d["d6"] &&
      d["d7"] &&
      d["d8"] &&
      d["d9"] &&
      d["d10"] &&
      d["d11"] &&
      d["d12"] &&
      d["d13"] &&
      d["d14"] &&
      d["d15"] &&
      d["d16"]
    ) {
      setHomeData({
        ...homedata,
        d1: d["d1"],
        d2: d["d2"],
        d3: d["d3"],
        d4: d["d4"],
        d5: d["d5"],
        d6: d["d6"],
        d7: d["d7"],
        d8: d["d8"],
        d9: d["d9"],
        d10: d["d10"],
        d11: d["d11"],
        d12: d["d12"],
        d13: d["d13"],
        d14: d["d14"],
        d15: d["d15"],
        d16: d["d16"],
      });
    }
  };

  let na = "N/A";
  let zero = 0;
  const [homedata, setHomeData] = useState({
    d1: zero,
    d2: zero,
    d3: zero,
    d4: zero,
    d5: zero,
    d6: zero,
    d7: zero,
    d8: zero,
    d9: zero,
    d10: zero,
    d11: zero,
    d12: zero,
    d13: zero,
    d14: zero,
    d15: zero,
    d16: zero,
    d17: zero,
    d18: zero,
    d19: zero,
    d20: zero,
    d21: zero,
    d22: zero,
  });

  //horizontal range slider
  const [rangevalue, setRangeValue] = useState({
    li_3_livingroom_top: homedata.d1,
    li_3_livingroom_bottom: homedata.d2,
    li_3_bedroom_top: homedata.d3,
    li_3_bedroom_bottom: homedata.d4,
    li_3_earning_left: homedata.d5,
    li_3_earning_right: homedata.d6,
    air_1_livingroom_temp: homedata.d7,
    air_1_bedroom_temp: homedata.d8,
    air_1_bed: homedata.d9,
    air_1_floor: homedata.d10,
    air_2_mixfan_temp: homedata.d11,
    air_2_bunker: homedata.d12,
    air_2_warmair: homedata.d13,
    air_3_heater_d2: homedata.d14,
    air_3_heater_d5: homedata.d15,
  });
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setRangeValue({
      ...rangevalue,
      [e.target.name]: value,
    });
  };

  //progress bar
  let freshWater = homedata.d16;
  let wasteWater = homedata.d17;
  let batteryVoltage = homedata.d18;
  let batteryTemp = homedata.d19;
  let batteryCurrent = homedata.d20;
  let photovoltaics_200 = homedata.d21;
  let photovoltaics_600 = homedata.d22;

  // modal
  const [CameraModal, HandleCameraModal] = useState(false);

  //camera click event
  const showCamera = () => {
    HandleCameraModal(true);
    // player.pause();
  };

  const hideCamera = (e) => {
    HandleCameraModal(false);
    console.log("e: ", e);
  };

  const eventHandle = (e) => {
    console.log("e2: ", e);
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

  //onoff
  const onOffHandle = (e, name) => {
    sendCmd("bw0.1", name, e.target.checked === true ? 1 : 0);
  };

  return (
    <div className="inner_contents home_wrap">
      {/* column 1 */}
      <div className="col">
        <div className="wrap_bg li_wrap">
          <div className="title">조명</div>
          <div className="row">
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "livingroom_top")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>거실</div>
                    <div>상부</div>
                  </div>
                  <div className="text_off">
                    <div>거실</div>
                    <div>상부</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bedroom_top")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>침실</div>
                    <div>상부</div>
                  </div>
                  <div className="text_off">
                    <div>침실</div>
                    <div>상부</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "earning_left")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>어닝</div>
                    <div>좌</div>
                  </div>
                  <div className="text_off">
                    <div>어닝</div>
                    <div>좌</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "livingroom_bottom")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>거실</div>
                    <div>하부</div>
                  </div>
                  <div className="text_off">
                    <div>거실</div>
                    <div>하부</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bedroom_bottom")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>침실</div>
                    <div>하부</div>
                  </div>
                  <div className="text_off">
                    <div>침실</div>
                    <div>하부</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "earning_right")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>어닝</div>
                    <div>우</div>
                  </div>
                  <div className="text_off">
                    <div>어닝</div>
                    <div>우</div>
                  </div>
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
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "livingroom_main")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>거실</div>
                    <div>메인</div>
                  </div>
                  <div className="text_off">
                    <div>거실</div>
                    <div>메인</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bedroom_main")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>침실</div>
                    <div>메인</div>
                  </div>
                  <div className="text_off">
                    <div>침실</div>
                    <div>메인</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "restroom_main")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>화장실</div>
                    <div>메인</div>
                  </div>
                  <div className="text_off">
                    <div>화장실</div>
                    <div>메인</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "restroom_indirect_light")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>화장실</div>
                    <div>간접등</div>
                  </div>
                  <div className="text_off">
                    <div>화장실</div>
                    <div>간접등</div>
                  </div>
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bunker_main")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>벙커</div>
                    <div>메인</div>
                  </div>
                  <div className="text_off">
                    <div>벙커</div>
                    <div>메인</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bunker_indirect_light")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>벙커</div>
                    <div>간접등</div>
                  </div>
                  <div className="text_off">
                    <div>벙커</div>
                    <div>간접등</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "kitchen")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>주방</div>
                  </div>
                  <div className="text_off">
                    <div>주방</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "vehicle_bottom_light")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>차량</div>
                    <div>하부등</div>
                  </div>
                  <div className="text_off">
                    <div>차량</div>
                    <div>하부등</div>
                  </div>
                </span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_left margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "all_light")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>전체등</div>
                  </div>
                  <div className="text_off">
                    <div>전체등</div>
                  </div>
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
          <div className="title">오수</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <div className="vertical_bar">
                <div className="progress progress-bar-vertical">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${freshWater}%` }}
                  >
                    <span className="sr-only">
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
                  className="default"
                  onChange={(e) => onOffHandle(e, "freshWater")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>청수</div>
                    <div>퇴수</div>
                  </div>
                  <div className="text_off">
                    <div>청수</div>
                    <div>퇴수</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <div className="vertical_bar">
                <div className="progress progress-bar-vertical">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${wasteWater}%` }}
                  >
                    <span className="sr-only">
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
                  className="default"
                  onChange={(e) => onOffHandle(e, "wasteWater")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>오수</div>
                    <div>퇴수</div>
                  </div>
                  <div className="text_off">
                    <div>오수</div>
                    <div>퇴수</div>
                  </div>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="wrap_bg battery_wrap">
          <div className="title">배터리</div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${batteryVoltage}%` }}
                >
                  <span className="sr-only">
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
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${batteryTemp}%` }}
                >
                  <span className="sr-only">
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
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${batteryCurrent}%` }}
                >
                  <span className="sr-only">
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
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${photovoltaics_200}%` }}
                >
                  <span className="sr-only">
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
              <div className="progress progress-bar-vertical">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: `${photovoltaics_600}%` }}
                >
                  <span className="sr-only">
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
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "refrigerator")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>냉장고</div>
                  </div>
                  <div className="text_off">
                    <div>냉장고</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "pump_kitchen")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>펌프</div>
                    <div>주방</div>
                  </div>
                  <div className="text_off">
                    <div>펌프</div>
                    <div>주방</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "pump_restroom")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>펌프</div>
                    <div>화장실</div>
                  </div>
                  <div className="text_off">
                    <div>펌프</div>
                    <div>화장실</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex"></div>
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "inverter_kitchen")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>인버터</div>
                    <div>주방</div>
                  </div>
                  <div className="text_off">
                    <div>인버터</div>
                    <div>주방</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "inverter_restroom")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>인버터</div>
                    <div>화장실</div>
                  </div>
                  <div className="text_off">
                    <div>인버터</div>
                    <div>화장실</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "vehicle_start")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>차량</div>
                    <div>시동</div>
                  </div>
                  <div className="text_off">
                    <div>차량</div>
                    <div>시동</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "Hydraulics_level")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>유압</div>
                    <div>레벨</div>
                  </div>
                  <div className="text_off">
                    <div>유압</div>
                    <div>레벨</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
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
            <div className="inner_col_wrap_flex slider_width margin_right">
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
            <div className="inner_col_wrap_flex slider_width">
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "warmair")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>온풍</div>
                  </div>
                  <div className="text_off">
                    <div>온풍</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "heater_d2")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>히터</div>
                    <div>(D2)</div>
                  </div>
                  <div className="text_off">
                    <div>히터</div>
                    <div>(D2)</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "heater_d5")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>히터</div>
                    <div>(D5)</div>
                  </div>
                  <div className="text_off">
                    <div>히터</div>
                    <div>(D5)</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bed")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>침대</div>
                  </div>
                  <div className="text_off">
                    <div>침대</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width margin_right">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "floor")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>바닥</div>
                  </div>
                  <div className="text_off">
                    <div>바닥</div>
                  </div>
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
            <div className="inner_col_wrap_flex slider_width">
              <label className="toggle toggle_slider">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bunker")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>벙커</div>
                  </div>
                  <div className="text_off">
                    <div>벙커</div>
                  </div>
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
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "restroom_fan")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>화장실</div>
                    <div>팬</div>
                  </div>
                  <div className="text_off">
                    <div>화장실</div>
                    <div>팬</div>
                  </div>
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
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "aux1")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>AUX1</div>
                  </div>
                  <div className="text_off">
                    <div>AUX1</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "aux2")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>AUX2</div>
                  </div>
                  <div className="text_off">
                    <div>AUX2</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "aux3")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>AUX3</div>
                  </div>
                  <div className="text_off">
                    <div>AUX3</div>
                  </div>
                </span>
              </label>
            </div>
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "aux4")}
                />
                <span className="dot">
                  <div className="text_on">
                    <div>AUX4</div>
                  </div>
                  <div className="text_off">
                    <div>AUX4</div>
                  </div>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* camera modal */}
      <Modal show={CameraModal} onHide={() => HandleCameraModal(false)}>
        <Button className="camera_close" onClick={(e) => hideCamera(e)}>
          X
        </Button>
        <Modal.Body>
          <div className="camera_view">
            <Videojs {...videoJsOptions} onClick={(e) => eventHandle(e)} />
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
