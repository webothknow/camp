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
      //     d23: d["d23"],
      //     d24: d["d24"],
      //     d25: d["d25"],
      //     d26: d["d26"],
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
      //   c36: d["d68"],
      //   c37: d["d69"],
      //   c38: d["d70"],
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
    d23: zero,
    d24: zero,
    d25: zero,
    d26: zero,
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
    c36: zero,
    c37: zero,
    c38: zero,
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
    air_2_mixfan_temp: homedata.d11,
    floor_heater: homedata.d23,
    air_heater: homedata.d24,
    aqua_bed_warmer: homedata.d25,
    aqua_bunker_warmer: homedata.d26,
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
  let batteryLevel = homedata.d18;
  let alternator = homedata.d20;
  let photovoltaics = homedata.d21;

  //camera modal
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

  const [airconLivingroomTempCount, setairconLivingroomTempCount] = useState(5);
  const [airconLivingroomWindCount, setairconLivingroomWindCount] = useState(5);
  const [airconBedroomTempCount, setairconBedroomTempCount] = useState(5);
  const [airconBedroomWindCount, setairconBedroomWindCount] = useState(5);
  const [maxfantempCount, setmaxfantempCount] = useState(5);
  const [heaterd2Count, setheaterd2Count] = useState(5);

  // 에어컨 거실 온도
  const airconLivingroomTempCal = (target, name, op) => {
    if (op === "p") {
      setairconLivingroomTempCount(
        (prevairconLivingroomTempCount) => prevairconLivingroomTempCount + 1
      );
    } else if (op === "m") {
      setairconLivingroomTempCount(
        (prevairconLivingroomTempCount) => prevairconLivingroomTempCount - 1
      );
    }
    console.log("Count liv temp: ", target, name, airconLivingroomTempCount);
    sendCmd(target, name, airconLivingroomTempCount);
  };

  //에어컨 거실 풍향
  const airconLivingroomWindCal = (target, name, op) => {
    if (op === "p") {
      setairconLivingroomWindCount(
        (prevairconLivingroomWindCount) => prevairconLivingroomWindCount + 1
      );
    } else if (op === "m") {
      setairconLivingroomWindCount(
        (prevairconLivingroomWindCount) => prevairconLivingroomWindCount - 1
      );
    }
    console.log("Count liv wind: ", target, name, airconLivingroomWindCount);
    sendCmd(target, name, airconLivingroomWindCount);
  };

  //에어컨 침실 온도
  const airconBedroomTempCal = (target, name, op) => {
    if (op === "p") {
      setairconBedroomTempCount(
        (prevairconBedroomTempCount) => prevairconBedroomTempCount + 1
      );
    } else if (op === "m") {
      setairconBedroomTempCount(
        (prevairconBedroomTempCount) => prevairconBedroomTempCount - 1
      );
    }
    //console.log("Count bed temp: ", target, name, airconBedroomTempCount);
    sendCmd(target, name, airconBedroomTempCount);
  };

  //에어컨 침실 풍향
  const airconBedroomWindCal = (target, name, op) => {
    if (op === "p") {
      setairconBedroomWindCount(
        (prevairconBedroomWindCount) => prevairconBedroomWindCount + 1
      );
    } else if (op === "m") {
      setairconBedroomWindCount(
        (prevairconBedroomWindCount) => prevairconBedroomWindCount - 1
      );
    }
    //console.log("Count bed wind: ", target, name, airconBedroomWindCount);
    sendCmd(target, name, airconBedroomWindCount);
  };

  //맥스팬 온도
  const maxfanCal = (target, name, op) => {
    if (op === "p") {
      setmaxfantempCount((prevmaxfantempCount) => prevmaxfantempCount + 1);
    } else if (op === "m") {
      setmaxfantempCount((prevmaxfantempCount) => prevmaxfantempCount - 1);
    }
    console.log("Count maxfan temp: ", target, name, maxfantempCount);
    sendCmd(target, name, maxfantempCount);
  };

  //히터 D2 온도
  const heaterd2Cal = (target, name, op) => {
    if (op === "p") {
      setheaterd2Count((prevheaterd2Count) => prevheaterd2Count + 1);
    } else if (op === "m") {
      setheaterd2Count((prevheaterd2Count) => prevheaterd2Count - 1);
    }
    console.log("Count maxfan temp: ", target, name, heaterd2Count);
    sendCmd(target, name, heaterd2Count);
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
    vehicle_bottom_light_check: homedata.c14,
    all_light_check: homedata.c15,
    freshWater_check: homedata.c16,
    wasteWater_check: homedata.c17,
    refrigerator_check: homedata.c18,
    water_pump_check: homedata.c19,
    inverter_check: homedata.c21,
    vehicle_start_check: homedata.c23,
    Hydraulics_level_check: homedata.c24,
    restroom_fan_check: homedata.c31,
    aux1_check: homedata.c32,
    aux2_check: homedata.c33,
    aux3_check: homedata.c34,
    aux4_check: homedata.c35,
    maxfan_check: homedata.c36,
    heaterd2_check: homedata.c37,
    heaterd5_check: homedata.c38,
  });

  console.log(homedata.c1);

  return (
    <div className="inner_contents home_wrap">
      {/* column 1 */}
      <div className="col">
        <div className="wrap_bg li_wrap">
          <div className="title">조명</div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right li_flex">
                <div className="col_wrap_inner_left margin_right">
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
                <div className="col_wrap_inner_right">
                  <div className="col_wrap_inner_right_top">
                    <label className="toggle toggle_slider">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        defaultChecked={
                          defaultToggle.livingroom_top_check === 1
                            ? true
                            : false
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
                  </div>
                  <div className="col_wrap_inner_right_bottm">
                    <label className="toggle toggle_slider">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        onChange={(e) => onOffHandle(e, "livingroom_bottom")}
                        defaultChecked={
                          defaultToggle.bedroom_bottom_check === 1
                            ? true
                            : false
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
                  </div>
                </div>
              </div>
              <div className="inner_col_wrap slider_height">
                <div className="range_slider slider_margin_bottom">
                  <RangeSlider
                    name="li_3_livingroom_top"
                    value={rangevalue.li_3_livingroom_top}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
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
            </div>
            <div className="row">
              <div className="inner_col_wrap margin_right li_flex">
                <div className="col_wrap_inner_left margin_right">
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
                <div className="col_wrap_inner_right">
                  <div className="col_wrap_inner_right_top">
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
                  </div>
                  <div className="col_wrap_inner_right_bottm">
                    <label className="toggle toggle_slider">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        onChange={(e) => onOffHandle(e, "bedroom_bottom")}
                        defaultChecked={
                          defaultToggle.bedroom_bottom_check === 1
                            ? true
                            : false
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
                  </div>
                </div>
              </div>
              <div className="inner_col_wrap slider_height">
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
            </div>
            <div className="row">
              <div className="inner_col_wrap margin_right li_flex">
                <div className="col_wrap_inner_left margin_right">
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
                <div className="col_wrap_inner_right">
                  <div className="col_wrap_inner_right_top">
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
                  </div>
                  <div className="col_wrap_inner_right_bottm">
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
                  </div>
                </div>
              </div>
              <div className="inner_col_wrap slider_height">
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
              <div className="inner_col_wrap margin_right li_flex">
                <div className="col_wrap_inner_left margin_right li_btn_center">
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
                <div className="col_wrap_inner_right li_btn_center">
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
              </div>
              <div className="inner_col_wrap li_flex">
                <div className="col_wrap_inner_left margin_right li_btn_center">
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
                <div className="col_wrap_inner_right li_btn_center">
                  <label className="toggle">
                    <input
                      id="mycheckbox"
                      type="checkbox"
                      className="default"
                      onChange={(e) =>
                        onOffHandle(e, "restroom_indirect_light")
                      }
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
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_bg other_wrap">
          <div className="title">장치</div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "aux1")}
                    defaultChecked={
                      defaultToggle.aux1_check === 1 ? true : false
                    }
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
              <div className="inner_col_wrap margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "aux2")}
                    defaultChecked={
                      defaultToggle.aux2_check === 1 ? true : false
                    }
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
              <div className="inner_col_wrap margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "aux3")}
                    defaultChecked={
                      defaultToggle.aux3_check === 1 ? true : false
                    }
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
              <div className="inner_col_wrap">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "aux4")}
                    defaultChecked={
                      defaultToggle.aux4_check === 1 ? true : false
                    }
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
      </div>
      {/* column 2 */}
      <div className="col">
        <div className="water_wrap_flex">
          <div className="wrap_bg water_wrap water_margin">
            <div className="title">청수</div>
            <div className="row_wrap">
              <div className="row">
                <div className="inner_col_wrap margin_right">
                  <div className="vertical_bar">
                    <div className="progress progress-bar-vertical">
                      <div
                        className="progress-bar pro_bar_blue"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        // style={{ height: `${freshWater}%` }}
                        style={{ height: "10%" }}
                      >
                        <span className="sr-only">
                          <div>{freshWater}%</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner_col_wrap">
                  <div className="water_top">
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
                          <div>퇴수</div>
                        </div>
                        <div className="text_off">
                          <div>퇴수</div>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="water_bottom">
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
                </div>
              </div>
            </div>
          </div>
          <div className="wrap_bg water_wrap">
            <div className="title">오수</div>
            <div className="row_wrap">
              <div className="row">
                <div className="inner_col_wrap margin_right">
                  <div className="vertical_bar">
                    <div className="progress progress-bar-vertical">
                      <div
                        className="progress-bar pro_bar_red"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        // style={{ height: `${wasteWater}%` }}
                        style={{ height: "10%" }}
                      >
                        <span className="sr-only">
                          <div>{wasteWater}%</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner_col_wrap">
                  <div className="water_top">
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
                          <div>퇴수</div>
                        </div>
                        <div className="text_off">
                          <div>퇴수</div>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="water_bottom">
                    <div className="camera_btn" onClick={() => showCamera()}>
                      카메라
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_bg battery_wrap">
          <div className="title">배터리</div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right battery_flex">
                <div className="progress_left margin_right">
                  <div className="progress progress-bar-vertical">
                    <div
                      className="progress-bar pro_bar_green"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // style={{ height: `${batteryLevel}%` }}
                      style={{ height: "10%" }}
                    >
                      <span className="sr-only">
                        <div>
                          <div>배터리</div>
                          <div>잔량</div>
                        </div>
                        <div>{batteryLevel}%</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress_right">
                  <div>전압 {}V</div>
                  <div>전류 {}A</div>
                  <div>온도 {}도</div>
                  <div>{}</div>
                </div>
              </div>
              <div className="inner_col_wrap battery_flex">
                <div className="progress_left margin_right">
                  <div className="progress progress-bar-vertical">
                    <div
                      className="progress-bar pro_bar_yellowgreen"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // style={{ height: `${photovoltaics}%` }}
                      style={{ height: "10%" }}
                    >
                      <span className="sr-only">
                        <div>태양광</div>
                        <div>{photovoltaics}%</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress_right">
                  <div>전류 {}A</div>
                  <div>발전량 {}Ah</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inner_col_wrap margin_right battery_flex">
                <div className="progress_left margin_right">
                  <div className="progress progress-bar-vertical">
                    <div
                      className="progress-bar pro_bar_orange"
                      role="progressbar"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      // style={{ height: `${alternator}%` }}
                      style={{ height: "10%" }}
                    >
                      <span className="sr-only">
                        <div>알터</div>
                        <div>{alternator}%</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress_right">
                  <div>전류 {}A</div>
                  <div>발전량 {}Ah</div>
                </div>
              </div>
              <div className="inner_col_wrap battery_flex"></div>
            </div>
          </div>
        </div>
        <div className="wrap_bg util_wrap">
          <div className="title">전기장치</div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right">
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
              <div className="inner_col_wrap margin_right">
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
              <div className="inner_col_wrap margin_right"></div>
              <div className="inner_col_wrap">
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
              <div className="inner_col_wrap margin_right">
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
              <div className="inner_col_wrap margin_right"></div>
              <div className="inner_col_wrap margin_right">
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
              <div className="inner_col_wrap">
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
            </div>
          </div>
        </div>
      </div>
      {/* column 3 */}
      <div className="col">
        <div className="wrap_bg temp_wrap">
          <div className="title">에어컨</div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap temp_width margin_right">
                <div className="control_top margin_bottom">
                  <div className="control_inner margin_right">
                    <label className="toggle">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        // onChange={(e) => onOffHandle(e, "vehicle_bottom_light")}
                        // defaultChecked={
                        //   defaultToggle.vehicle_bottom_light_check === 1
                        //     ? true
                        //     : false
                        // }
                      />
                      <span className="dot">
                        <div className="text_on">
                          <div>거실</div>
                          <div>on</div>
                        </div>
                        <div className="text_off">
                          <div>거실</div>
                          <div>off</div>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="control_inner margin_right">
                    <div
                      className="control_btn"
                      onClick={() =>
                        airconLivingroomTempCal(
                          "0.1",
                          "aircon_livingroom_temp",
                          "p"
                        )
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        airconLivingroomTempCal(
                          "0.1",
                          "aircon_livingroom_temp",
                          "m"
                        )
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>-</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control_bottom">
                  <div className="control_inner margin_right">
                    <label className="toggle">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        // onChange={(e) => onOffHandle(e, "vehicle_bottom_light")}
                        // defaultChecked={
                        //   defaultToggle.vehicle_bottom_light_check === 1
                        //     ? true
                        //     : false
                        // }
                      />
                      <span className="dot">
                        <div className="text_on">
                          <div>모드</div>
                        </div>
                        <div className="text_off">
                          <div>모드</div>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="control_inner margin_right">
                    <div
                      className="control_btn control_plus"
                      onClick={() =>
                        airconLivingroomWindCal(
                          "0.1",
                          "aircon_livingroom_wind",
                          "p"
                        )
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>∧</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        airconLivingroomWindCal(
                          "0.1",
                          "aircon_livingroom_wind",
                          "m"
                        )
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>∨</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner_col_wrap temp_width">
                <div className="control_top margin_bottom">
                  <div className="control_inner margin_right">
                    <label className="toggle">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        // onChange={(e) => onOffHandle(e, "vehicle_bottom_light")}
                        // defaultChecked={
                        //   defaultToggle.vehicle_bottom_light_check === 1
                        //     ? true
                        //     : false
                        // }
                      />
                      <span className="dot">
                        <div className="text_on">
                          <div>침실</div>
                          <div>on</div>
                        </div>
                        <div className="text_off">
                          <div>침실</div>
                          <div>off</div>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="control_inner margin_right">
                    <div
                      className="control_btn control_plus"
                      onClick={() =>
                        airconBedroomTempCal("0.1", "aircon_bedroom_temp", "p")
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        airconBedroomTempCal("0.1", "aircon_bedroom_temp", "m")
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>-</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control_bottom">
                  <div className="control_inner margin_right">
                    <label className="toggle">
                      <input
                        id="mycheckbox"
                        type="checkbox"
                        className="default"
                        // onChange={(e) => onOffHandle(e, "vehicle_bottom_light")}
                        // defaultChecked={
                        //   defaultToggle.vehicle_bottom_light_check === 1
                        //     ? true
                        //     : false
                        // }
                      />
                      <span className="dot">
                        <div className="text_on">
                          <div>모드</div>
                        </div>
                        <div className="text_off">
                          <div>모드</div>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="control_inner margin_right">
                    <div
                      className="control_btn control_plus"
                      onClick={() =>
                        airconBedroomWindCal("0.1", "aircon_bedroom_wind", "p")
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>∧</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        airconBedroomWindCal("0.1", "aircon_bedroom_wind", "m")
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>∨</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_bg heater_wrap">
          <div className="title">히터</div>
          <div className="row_wrap">
            <div className="heater_row">
              <div className="heater_btns margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "heaterd2")}
                    defaultChecked={
                      defaultToggle.heaterd2_check === 1 ? true : false
                    }
                  />
                  <span className="dot">
                    <div className="text_on">
                      <div>히터D2</div>
                      <div>on</div>
                    </div>
                    <div className="text_off">
                      <div>히터D2</div>
                      <div>off</div>
                    </div>
                  </span>
                </label>
              </div>
              <div className="heater_btns margin_right">
                <div
                  className="control_btn control_plus"
                  onClick={() => heaterd2Cal("0.1", "header_d2_temp", "p")}
                >
                  <div className="pmtext">
                    <div>온도</div>
                    <div>+</div>
                  </div>
                </div>
              </div>
              <div className="heater_btns margin_right">
                <div
                  className="control_btn control_plus"
                  onClick={() => heaterd2Cal("0.1", "header_d2_temp", "m")}
                >
                  <div className="pmtext">
                    <div>온도</div>
                    <div>-</div>
                  </div>
                </div>
              </div>
              <div className="heater_btns">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "heaterd2_reset")}
                  />
                  <span className="dot">
                    <div className="text_on">
                      <div>에러</div>
                      <div>리셋</div>
                    </div>
                    <div className="text_off">
                      <div>에러</div>
                      <div>리셋</div>
                    </div>
                  </span>
                </label>
              </div>
            </div>
            <div className="heater_row">
              <div className="heater_btns margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "heaterd5")}
                    defaultChecked={
                      defaultToggle.heaterd5_check === 1 ? true : false
                    }
                  />
                  <span className="dot">
                    <div className="text_on">
                      <div>히터D5 on</div>
                    </div>
                    <div className="text_off">
                      <div>히터D5 off</div>
                    </div>
                  </span>
                </label>
              </div>
              <div className="heater_btns margin_right"></div>
              <div className="heater_btns margin_right"></div>
              <div className="heater_btns">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "heaterd5_reset")}
                  />
                  <span className="dot">
                    <div className="text_on">
                      <div>에러</div>
                      <div>리셋</div>
                    </div>
                    <div className="text_off">
                      <div>에러</div>
                      <div>리셋</div>
                    </div>
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col_wrap_inner_left margin_right">
                <div className="slider_wrap">
                  <RangeSlider
                    name="aqua_bed_warmer"
                    value={rangevalue.aqua_bed_warmer}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                  {/* <RangeSlider
                    name="li_3_livingroom_top"
                    value={rangevalue.li_3_livingroom_top}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  /> */}
                </div>
                <div className="slider_wrap">
                  <RangeSlider
                    name="aqua_bunker_warmer"
                    value={rangevalue.aqua_bunker_warmer}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
              </div>
              <div className="col_wrap_inner_right">
                <div className="slider_wrap">
                  <RangeSlider
                    name="floor_heater"
                    value={rangevalue.floor_heater}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
                <div className="slider_wrap">
                  <RangeSlider
                    name="air_heater"
                    value={rangevalue.air_heater}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_bg maxfan_wrap">
          <div className="title">맥스팬</div>
          <div className="row_wrap">
            <div className="row">
              <div className="maxfan_btns margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "maxfan")}
                    defaultChecked={
                      defaultToggle.maxfan_check === 1 ? true : false
                    }
                  />
                  <span className="dot">
                    <div className="text_on">
                      <div>맥스팬</div>
                      <div>on</div>
                    </div>
                    <div className="text_off">
                      <div>맥스팬</div>
                      <div>off</div>
                    </div>
                  </span>
                </label>
              </div>
              <div className="maxfan_btns margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle(e, "maxfan")}
                    defaultChecked={
                      defaultToggle.maxfan_check === 1 ? true : false
                    }
                  />
                  <span className="dot">
                    <div className="text_on">
                      <div>맥스팬</div>
                      <div>in</div>
                    </div>
                    <div className="text_off">
                      <div>맥스팬</div>
                      <div>out</div>
                    </div>
                  </span>
                </label>
              </div>
              <div className="maxfan_btns margin_right">
                <div
                  className="control_btn control_plus"
                  onClick={() => maxfanCal("0.1", "maxfan", "p")}
                >
                  <div className="pmtext">
                    <div>풍량</div>
                    <div>∧</div>
                  </div>
                </div>
              </div>
              <div className="maxfan_btns">
                <div
                  className="control_btn"
                  onClick={() => maxfanCal("0.1", "maxfan", "m")}
                >
                  <div className="pmtext">
                    <div>풍량</div>
                    <div>∨</div>
                  </div>
                </div>
              </div>
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
