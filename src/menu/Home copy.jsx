import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"; //slider bar
import RangeSlider from "react-bootstrap-range-slider"; //slider bar
import { ProgressBar, Button } from "react-bootstrap"; //progress bar
import { Modal } from "react-bootstrap"; //modal
import Videojs from "../video.js"; //camera
import WebSocketClient from "../js/ws/WebSocketClient"; //websocket
import { observer } from "mobx-react"; //observer

const wsc = new WebSocketClient(null, 8700, "/ws", 100);

const Home = ({ data, sendCmd }) => {
  useEffect(() => {
    console.log("home data: ", data);
  }, [data]);

  let d = data;

  const homeDataHandle = () => {
    console.log("home data2: ", d);

    // if (
    //   d &&
    //   d["d1"] &&
    //   d["d2"] &&
    //   d["d3"] &&
    //   d["d4"] &&
    //   d["d5"] &&
    //   d["d6"] &&
    //   d["d7"] &&
    //   d["d8"] &&
    //   d["d9"] &&
    //   d["d10"] &&
    //   d["d11"] &&
    //   d["d12"] &&
    //   d["d13"] &&
    //   d["d14"] &&
    //   d["d15"] &&
    //   d["d16"] &&
    //   d["d17"] &&
    //   d["d18"] &&
    //   d["d19"] &&
    //   d["d20"] &&
    //   d["d21"] &&
    //   d["d22"]
    // ) {
    setHomeData({
      ...homedata,
      //     d1: d["d1"],
      //     d2: d["d2"],
      //     d3: d["d3"],
      //     d4: d["d4"],
      //     d5: d["d5"],
      //     d6: d["d6"],
      //     d7: d["d7"],
      //     d8: d["d8"],
      //     d9: d["d9"],
      //     d10: d["d10"],
      //     d11: d["d11"],
      //     d12: d["d12"],
      //     d13: d["d13"],
      //     d14: d["d14"],
      //     d15: d["d15"],
      //     d16: d["d16"],
      //     d17: d["d17"],
      //     d18: d["d18"],
      //     d19: d["d19"],
      //     d20: d["d20"],
      //     d21: d["d21"],
      //     d22: d["d22"],
      //   c1: d["d23"],
      //   c2: d["d24"],
      //   c3: d["d25"],
      //   c4: d["d26"],
      //   c5: d["d27"],
      //   c6: d["d28"],
      //   c7: d["d29"],
      //   c8: d["d30"],
      //   c8: d["d31"],
      //   c8: d["d32"],
      //   c8: d["d33"],
      //   c8: d["d34"],
      //   c8: d["d35"],
      //   c8: d["d36"],
      //   c8: d["d37"],
      //   c8: d["d38"],
      //   c8: d["d39"],
      //   c8: d["d40"],
      //   c9: d["d41"],
      //   c10: d["d42"],
      //   c11: d["d43"],
      //   c12: d["d44"],
      //   c13: d["d45"],
      //   c14: d["d46"],
      //   c15: d["d47"],
      //   c16: d["d48"],
      //   c17: d["d49"],
      //   c18: d["d50"],
      //   c19: d["d51"],
      //   c20: d["d52"],
      //   c21: d["d53"],
      //   c22: d["d54"],
      //   c23: d["d55"],
      //   c24: d["d56"],
      //   c25: d["d57"],
      //   c26: d["d58"],
      //   c27: d["d59"],
      //   c28: d["d60"],
      //   c29: d["d61"],
      //   c30: d["d62"],
      //   c31: d["d63"],
      //   c32: d["d64"],
      //   c33: d["d65"],
      //   c34: d["d66"],
      //   c35: d["d67"],
    });
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
    c1: zero, //check버튼의 zero를 1로 바꿔보면 체크된 버튼을 볼 수 있음
    c2: zero,
    c3: zero,
    c4: zero,
    c5: zero,
    c6: zero,
    c7: zero,
    c8: zero,
    c9: zero,
    c10: zero,
    c11: zero,
    c12: zero,
    c13: zero,
    c14: zero,
    c15: zero,
    c16: zero,
    c17: zero,
    c18: zero,
    c19: zero,
    c20: zero,
    c21: zero,
    c22: zero,
    c23: zero,
    c24: zero,
    c25: zero,
    c26: zero,
    c27: zero,
    c28: zero,
    c29: zero,
    c30: zero,
    c31: zero,
    c32: zero,
    c33: zero,
    c34: zero,
    c35: zero,
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
    sendCmd("0.1", e.target.name, value);
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
    sendCmd("0.1", name, e.target.checked === true ? 1 : 0);
  };

  // const [number, setNumber] = useState({
  //   livingroom_temp: 1,
  //   bedroom_temp: 1,
  //   maxfan_temp: 1,
  // });

  const [livingroomtempCount, setlivingroomtempCount] = useState(5);
  const [bedroomtempCount, setbedroomtempCount] = useState(5);
  const [maxfantempCount, setmaxfantempCount] = useState(5);

  const livingroomtempPlus = (name) => {
    setlivingroomtempCount(
      (previouslivingroomtempCount) => previouslivingroomtempCount + 1
    );
    console.log(livingroomtempCount);
    sendCmd("0.1", name, livingroomtempCount);
  };

  const livingroomtempMinus = (name) => {
    setlivingroomtempCount(
      (previouslivingroomtempCount) => previouslivingroomtempCount - 1
    );
    console.log(livingroomtempCount);
    sendCmd("0.1", name, livingroomtempCount);
  };

  const bedroomtempPlus = (name) => {
    setbedroomtempCount(
      (previousbedroomtempCount) => previousbedroomtempCount + 1
    );
    console.log(bedroomtempCount);
    sendCmd("0.1", name, bedroomtempCount);
  };

  const bedroomtempMinus = (name) => {
    setbedroomtempCount(
      (previousbedroomtempCount) => previousbedroomtempCount - 1
    );
    console.log(bedroomtempCount);
    sendCmd("0.1", name, bedroomtempCount);
  };

  const maxfantempCountPlus = (name) => {
    setmaxfantempCount(
      (previousmaxfantempCount) => previousmaxfantempCount + 1
    );
    console.log(maxfantempCount);
    sendCmd("0.1", name, maxfantempCount);
  };

  const maxfantempCountMinus = (name) => {
    setmaxfantempCount(
      (previousmaxfantempCount) => previousmaxfantempCount - 1
    );
    console.log(maxfantempCount);
    sendCmd("0.1", name, maxfantempCount);
  };

  //토글버튼 ex거실상부, 침실상부
  //버튼 체크 상태 1이면 체크됨, 0이면 체크안됨, setDefaultToggle를 homeDataHandle함수에 넣어서 데이터를 지정해주면됨.
  //예시 const [defaultToggle, setDefaultToggle] = useState(1);

  const [defaultToggle, setDefaultToggle] = useState({
    livingroom_top_check: homedata.c1,
    bedroom_top_check: homedata.c2,
    earning_left_check: homedata.c3,
    livingroom_bottom_check: homedata.c4,
    bedroom_bottom_check: homedata.c5,
    earning_right_check: homedata.c6,
    livingroom_main_check: homedata.c7,
    bedroom_main_check: homedata.c8,
    restroom_main_check: homedata.c9,
    restroom_indirect_light_check: homedata.c10,
    bunker_main_check: homedata.c11,
    bunker_indirect_light_check: homedata.c12,
    kitchen_check: homedata.c13,
    vehicle_bottom_light_check: homedata.c14,
    all_light_check: homedata.c15,
    freshWater_check: homedata.c16,
    wasteWater_check: homedata.c17,
    refrigerator_check: homedata.c18,
    water_pump_check: homedata.c19,
    inverter_check: homedata.c21,
    vehicle_start_check: homedata.c23,
    Hydraulics_level_check: homedata.c24,
    warmair_check: homedata.c25,
    heater_d2_check: homedata.c26,
    heater_d5_check: homedata.c27,
    bed_check: homedata.c28,
    floor_check: homedata.c29,
    bunker_check: homedata.c30,
    restroom_fan_check: homedata.c31,
    aux1_check: homedata.c32,
    aux2_check: homedata.c33,
    aux3_check: homedata.c34,
    aux4_check: homedata.c35,
  });

  console.log(homedata.c1);

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
                  defaultChecked={
                    defaultToggle.livingroom_top_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.bedroom_top_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.earning_left_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.bedroom_bottom_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.bedroom_bottom_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.earning_right_check === 1 ? true : false
                  }
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
                  step={5}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
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
                  onChange={(e) => onOffHandle(e, "livingroom_main")}
                  defaultChecked={
                    defaultToggle.livingroom_main_check === 1 ? true : false
                  }
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
                  defaultChecked={
                    defaultToggle.bedroom_main_check === 1 ? true : false
                  }
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
            <div className="inner_col_wrap_flex">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "restroom_main")}
                  defaultChecked={
                    defaultToggle.restroom_main_check === 1 ? true : false
                  }
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
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "bunker_main")}
                  defaultChecked={
                    defaultToggle.bunker_main_check === 1 ? true : false
                  }
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
                  defaultChecked={
                    defaultToggle.bunker_indirect_light_check === 1
                      ? true
                      : false
                  }
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
            <div className="inner_col_wrap_flex">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "kitchen")}
                  defaultChecked={
                    defaultToggle.kitchen_check === 1 ? true : false
                  }
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
          </div>
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "restroom_indirect_light")}
                  defaultChecked={
                    defaultToggle.restroom_indirect_light_check === 1
                      ? true
                      : false
                  }
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
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "all_light")}
                  defaultChecked={
                    defaultToggle.all_light_check === 1 ? true : false
                  }
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
            <div className="inner_col_wrap_flex">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "restroom_fan")}
                  defaultChecked={
                    defaultToggle.restroom_fan_check === 1 ? true : false
                  }
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
          </div>
        </div>
        {/* <div className="wrap_bg li_control_wrap">
          <div className="title">조명장치</div>

        </div> */}
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
                    className="progress-bar pro_bar_blue"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${freshWater}%` }}
                  >
                    <span className="sr-only">
                      <div>청수</div>
                      <div>{freshWater}%</div>
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
                  defaultChecked={
                    defaultToggle.freshWater_check === 1 ? true : false
                  }
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
                    className="progress-bar pro_bar_red"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: `${wasteWater}%` }}
                  >
                    <span className="sr-only">
                      <div>오수</div>
                      <div>{wasteWater}%</div>
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
                  defaultChecked={
                    defaultToggle.wasteWater_check === 1 ? true : false
                  }
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
                  defaultChecked={
                    defaultToggle.refrigerator_check === 1 ? true : false
                  }
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
                  onChange={(e) => onOffHandle(e, "inverter")}
                  defaultChecked={
                    defaultToggle.inverter_check === 1 ? true : false
                  }
                />
                <span className="dot">
                  <div className="text_on">
                    <div>인버터</div>
                  </div>
                  <div className="text_off">
                    <div>인버터</div>
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
                  defaultChecked={
                    defaultToggle.vehicle_start_check === 1 ? true : false
                  }
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
                  defaultChecked={
                    defaultToggle.Hydraulics_level_check === 1 ? true : false
                  }
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
          <div className="row">
            <div className="inner_col_wrap_flex margin_right">
              <label className="toggle">
                <input
                  id="mycheckbox"
                  type="checkbox"
                  className="default"
                  onChange={(e) => onOffHandle(e, "water_pump")}
                  defaultChecked={
                    defaultToggle.water_pump_check === 1 ? true : false
                  }
                />
                <span className="dot">
                  <div className="text_on">
                    <div>물펌프</div>
                  </div>
                  <div className="text_off">
                    <div>물펌프</div>
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
                  defaultChecked={
                    defaultToggle.vehicle_bottom_light_check === 1
                      ? true
                      : false
                  }
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
            <div className="inner_col_wrap_flex margin_right"></div>
            <div className="inner_col_wrap_flex"></div>
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
                  <div
                    className="control_btn"
                    onClick={() => livingroomtempPlus("livingroom_temp")}
                  >
                    <div>+</div>
                  </div>
                  <div className="control_margin_bottom"></div>
                  <div
                    className="control_btn"
                    onClick={() => livingroomtempMinus("livingroom_temp")}
                  >
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
                  <div
                    className="control_btn control_plus"
                    onClick={() => bedroomtempPlus("bedroom_temp")}
                  >
                    <div>+</div>
                  </div>
                  <div className="control_margin_bottom"></div>
                  <div
                    className="control_btn control_minus"
                    onClick={() => bedroomtempMinus("bedroom_temp")}
                  >
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
                  <div
                    className="control_btn control_plus"
                    onClick={() => maxfantempCountPlus("maxfan_temp")}
                  >
                    <div>+</div>
                  </div>
                  <div className="control_margin_bottom"></div>
                  <div
                    className="control_btn control_minus"
                    onClick={() => maxfantempCountMinus("maxfan_temp")}
                  >
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
                  defaultChecked={
                    defaultToggle.warmair_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.heater_d2_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.heater_d5_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={defaultToggle.bed_check === 1 ? true : false}
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.floor_check === 1 ? true : false
                  }
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
                  step={5}
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
                  defaultChecked={
                    defaultToggle.bunker_check === 1 ? true : false
                  }
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
                  step={5}
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
            <div className="inner_col_wrap_flex margin_right"></div>
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
                  defaultChecked={defaultToggle.aux1_check === 1 ? true : false}
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
                  defaultChecked={defaultToggle.aux2_check === 1 ? true : false}
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
                  defaultChecked={defaultToggle.aux3_check === 1 ? true : false}
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
                  defaultChecked={defaultToggle.aux4_check === 1 ? true : false}
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
