import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"; //slider bar
import RangeSlider from "react-bootstrap-range-slider"; //slider bar
import { ProgressBar, Button } from "react-bootstrap"; //progress bar
import { Modal } from "react-bootstrap"; //modal
import Videojs from "../video.js"; //camera
// import WebSocketClient from "../js/ws/WebSocketClient"; //websocket
// import { observer } from "mobx-react"; //observer

let d = null;

const Home = ({ data, sendCmd, primarykey }) => {
  //app.js의 data observer 역할
  useEffect(() => {
    if (data && data.hasOwnProperty(primarykey) && d.length !== 0) {
      d = data[primarykey];
      homeDataHandle(d);
    }
  }, [data]);

  const homeDataHandle = (d) => {
    console.log("d2: ", d);

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
      //     r1: d["d1"],
      //     r2: d["d2"],
      //     r3: d["d3"],
      //     r4: d["d4"],
      //     r5: d["d5"],
      //     r6: d["d6"],
      //     r7: d["d7"],
      //     r8: d["d8"],
      //     r9: d["d9"],
      //     r10: d["d10"],
      //     i1: d["d11"],
      //     i2: d["d12"],
      //     i3: d["d13"],
      //     i4: d["d14"],
      //     i5: d["d15"],
      //     i6: d["d16"],
      //     i7: d["d17"],
      //     i8: d["d18"],
      //     i9: d["d19"],
      //     i10: d["d20"],
      //     i11: d["d21"],
      //     i12: d["d22"],
      //     i13: d["d23"],
      //     i14: d["d24"],
      //     i15: d["d25"],
      //     i16: d["d26"],
      //   i17: d["d27"],
      //   i18: d["d28"],
      //   i19: d["d29"],
      //   i20: d["d30"],
      //   i21: d["d31"],
      //   i22: d["d32"],
      //   i23: d["d33"],
      //   i24: d["d34"],
      //   i25: d["d35"],
      //   i26: d["d36"],
      //   i27: d["d37"],
      //   i28: d["d38"],
      //   i29: d["d39"],
      //   i30: d["d40"],
      //   i31: d["d41"],
      //   i32: d["d42"],
      //   i33: d["d43"],
      //   i34: d["d44"],
      //   pb1: d["d45"],
      //   pb2: d["d46"],
      //   pb3: d["d47"],
      //   pb4: d["d48"],
      //   pb5: d["d49"],
      //   pi1: d["d50"],
      //   pi2: d["d51"],
      //   pi3: d["d52"],
      //   pi4: d["d53"],
      //   pi5: d["d54"],
      //   pi6: d["d55"],
      //   pi7: d["d56"],
      //   pi8: d["d57"],
    });
  };

  //data initial state
  let zero = 0;
  const [homedata, setHomeData] = useState({
    r1: zero, //거실상부 슬라이더 초기값
    r2: zero, //거실하부 슬라이더 초기값
    r3: zero, //침실상부 슬라이더 초기값
    r4: zero, //침실하부 슬라이더 초기값
    r5: zero, //어닝좌 슬라이더 초기값
    r6: zero, //어닝우 슬라이더 초기값
    r7: zero, //바닥난방 슬라이더 초기값
    r8: zero, //온풍난방 슬라이더 초기값
    r9: zero, //침대온수 슬라이더 초기값
    r10: zero, //벙커온수 슬라이더 초기값
    i1: zero, //거실메인 버튼 초기값 (check버튼의 zero를 1로 바꿔보면 체크된 버튼을 볼 수 있음)
    i2: zero, //거실상부 버튼 초기값
    i3: zero, //거실하부 버튼 초기값
    i4: zero, //침실메인 버튼 초기값
    i5: zero, //침실상부 버튼 초기값
    i6: zero, //침실하부 버튼 초기값
    i7: zero, //전체등 버튼 초기값
    i8: zero, //어닝좌 버튼 초기값
    i9: zero, //어닝우 버튼 초기값
    i10: zero, //벙커메인 버튼 초기값
    i11: zero, //벙커간접등 버튼 초기값
    i12: zero, //화장실메인 버튼 초기값
    i13: zero, //화장실간접등 버튼 초기값
    i14: zero, //aux1 버튼 초기값
    i15: zero, //aux2 버튼 초기값
    i16: zero, //aux3 버튼 초기값
    i17: zero, //aux4 버튼 초기값
    i18: zero, //청수퇴수 버튼 초기값
    i19: zero, //물펌프 버튼 초기값
    i20: zero, //오수퇴수 버튼 초기값
    i21: zero, //냉장고 버튼 초기값
    i22: zero, //인버터 버튼 초기값
    i23: zero, //화장실팬 버튼 기값
    i24: zero, //유압레벨 버튼 초기값
    i25: zero, //차량하부등 버튼 초기값
    i26: zero, //차량시동 버튼 초기값
    i27: zero, //에어컨거실 버튼 초기값
    i28: zero, //에어컨모드 버튼 초기값
    i29: zero, //에어컨침실 버튼 초기값
    i30: zero, //에어컨모드 버튼 초기값
    i31: zero, //히터d2 버튼 초기값
    i32: zero, //히터d5 버튼 초기값
    i33: zero, //맥스팬on 버튼 초기값
    i34: zero, //맥스팬 인아웃 버튼 초기값
    pb1: zero, //청수막대바 초기값
    pb2: zero, //오수막대바 초기값
    pb3: zero, //배터리잔량막대바 초기값
    pb4: zero, //태양광막대바 초기값
    pb5: zero, //알터막대바 초기값
    pi1: zero, //배터리전압 텍스트 초기값
    pi2: zero, //배터리전류 텍스트 초기값
    pi3: zero, //배터리온도 텍스트 초기값
    pi4: "00:00:00", //배터리남은시간 텍스트 초기값
    pi5: zero, //태양광전류 텍스트 초기값
    pi6: zero, //태양광발전량 텍스트 초기값
    pi7: zero, //알터전류 텍스트 초기값
    pi8: zero, //알터발전량 텍스트 초기값
  });

  //horizontal range slider state
  const [rangeValue, setrangeValue] = useState({
    livingroom_top: homedata.r1, //거실상부 슬라이더 초기값
    livingroom_bottom: homedata.r2, //거실하부 슬라이더 초기값
    bedroom_top: homedata.r3, //침실상부 슬라이더 초기값
    bedroom_bottom: homedata.r4, //침실하부 슬라이더 초기값
    earning_left: homedata.r5, //어닝좌 슬라이더 초기값
    earning_right: homedata.r6, //어닝우 슬라이더 초기값
    floor_heater: homedata.r7, //바닥난방 슬라이더 초기값
    air_heater: homedata.r8, //온풍난방 슬라이더 초기값
    aqua_bed_warmer: homedata.r9, //침대온수 슬라이더 초기값
    aqua_bunker_warmer: homedata.r10, //벙커온수 슬라이더 초기값
  });

  //slider value
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setrangeValue({
      ...rangeValue,
      [e.target.name]: value,
    });
    sendCmd("0.1", e.target.name, value);
  };

  //progress bar state
  const [progressBar, setprogressbar] = useState({
    freshWater: homedata.pb1, //청수막대바 초기값
    wasteWater: homedata.pb2, //오수막대바 초기값
    batteryLevel: homedata.pb3, //배터리잔량막대바 초기값
    photovoltaics: homedata.pb4, //태양광막대바 초기값
    alternator: homedata.pb5, //알터막대바 초기값
  });

  //camera modal
  const [CameraModal, HandleCameraModal] = useState(false);
  //camera click event (modal show)
  const showCamera = () => {
    HandleCameraModal(true);
    // player.pause();
  };
  //camera click event (modal hide)
  const hideCamera = (e) => {
    HandleCameraModal(false);
    //console.log("e: ", e);
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

  //ON OFF 버튼
  const onOffHandle = (target, name, e) => {
    sendCmd(target, name, e.target.checked === true ? 1 : 0);
  };

  //온도 및 풍량조절
  const TempControl = (target, name, op) => {
    sendCmd(target, name, op);
  };

  //에러리셋 및 모드 클릭
  const resetAndMode = (target, name) => {
    sendCmd(target, name);
  };

  //버튼의 초기 셋팅값
  const [defaultToggle, setDefaultToggle] = useState({
    livingroom_main_check: homedata.i1, //거실메인 버튼 초기값
    livingroom_top_check: homedata.i2, //거실상부 버튼 초기값
    livingroom_bottom_check: homedata.i3, //거실하부 버튼 초기값
    bedroom_main_check: homedata.i4, //침실메인 버튼 초기값
    bedroom_top_check: homedata.i5, //침실상부 버튼 초기값
    bedroom_bottom_check: homedata.i6, //침실하부 버튼 초기값
    all_light_check: homedata.i7, //전체등 버튼 초기값
    earning_left_check: homedata.i8, //어닝좌 버튼 초기값
    earning_right_check: homedata.i9, //어닝우 버튼 초기값
    bunker_main_check: homedata.i10, //벙커메인 버튼 초기값
    bunker_indirect_light_check: homedata.i11, //벙커간접등 버튼 초기값
    restroom_main_check: homedata.i12, //화장실메인 버튼 초기값
    restroom_indirect_light_check: homedata.i13, //화장실간접등 버튼 초기값
    aux1_check: homedata.i14, //aux1 버튼 초기값
    aux2_check: homedata.i15, //aux2 버튼 초기값
    aux3_check: homedata.i16, //aux3 버튼 초기값
    aux4_check: homedata.i17, //aux4 버튼 초기값
    freshWater_check: homedata.i18, //청수퇴수 버튼 초기값
    water_pump_check: homedata.i19, //물펌프 버튼 초기값
    wasteWater_check: homedata.i20, //오수퇴수 버튼 초기값
    refrigerator_check: homedata.i21, //냉장고 버튼 초기값
    inverter_check: homedata.i22, //인버터 버튼 초기값
    restroom_fan_check: homedata.i23, //화장실팬 버튼 기값
    Hydraulics_level_check: homedata.i24, //유압레벨 버튼 초기값
    vehicle_bottom_light_check: homedata.i25, //차량하부등 버튼 초기값
    vehicle_start_check: homedata.i26, //차량시동 버튼 초기값
    aircon_livingroom_check: homedata.i27, //에어컨거실 버튼 초기값
    aircon_livingroom_mode: homedata.i28, //에어컨모드 버튼 초기값
    aircon_bedroom_check: homedata.i29, //에어컨침실 버튼 초기값
    aircon_bedroom_mode: homedata.i30, //에어컨모드 버튼 초기값
    heaterd2_check: homedata.i31, //히터d2 버튼 초기값
    heaterd5_check: homedata.i32, //히터d5 버튼 초기값
    maxfan_check: homedata.i33, //맥스팬on 버튼 초기값
    maxfan_inout_check: homedata.i34, //맥스팬 인아웃 버튼 초기값
  });

  const [progressbarDefault, setProgressbarDefault] = useState({
    battery_voltage_value: homedata.pi1, //배터리전압 텍스트 초기값
    battery_electric_current_value: homedata.pi2, //배터리전류 텍스트 초기값
    battery_temp_value: homedata.pi3, //배터리온도 텍스트 초기값
    battery_remaining_time: homedata.pi4, //배터리남은시간 텍스트 초기값
    photovoltaics_electric_current_value: homedata.pi5, //태양광전류 텍스트 초기값
    photovoltaics_power_generation_value: homedata.pi6, //태양광발전량 텍스트 초기값
    alternator_electric_current_value: homedata.pi7, //알터전류 텍스트 초기값
    alternator_power_generation_value: homedata.pi8, //알터발전량 텍스트 초기값
  });

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
                      onChange={(e) => onOffHandle("0.1", "livingroom_main", e)}
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
                        onChange={(e) =>
                          onOffHandle("0.1", "livingroom_top", e)
                        }
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
                        onChange={(e) =>
                          onOffHandle("0.1", "livingroom_bottom", e)
                        }
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
                    name="livingroom_top"
                    value={rangeValue.livingroom_top}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
                <div className="range_slider">
                  <RangeSlider
                    name="livingroom_bottom"
                    value={rangeValue.livingroom_bottom}
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
                      onChange={(e) => onOffHandle("0.1", "bedroom_main", e)}
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
                        onChange={(e) => onOffHandle("0.1", "bedroom_top", e)}
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
                        onChange={(e) =>
                          onOffHandle("0.1", "bedroom_bottom", e)
                        }
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
                    name="bedroom_top"
                    value={rangeValue.bedroom_top}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
                <div className="range_slider">
                  <RangeSlider
                    name="bedroom_bottom"
                    value={rangeValue.bedroom_bottom}
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
                      onChange={(e) => onOffHandle("0.1", "all_light", e)}
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
                        onChange={(e) => onOffHandle("0.1", "earning_left", e)}
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
                        onChange={(e) => onOffHandle("0.1", "earning_right", e)}
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
                    name="earning_left"
                    value={rangeValue.earning_left}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
                <div className="range_slider">
                  <RangeSlider
                    name="earning_right"
                    value={rangeValue.earning_right}
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
                      onChange={(e) => onOffHandle("0.1", "bunker_main", e)}
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
                      onChange={(e) =>
                        onOffHandle("0.1", "bunker_indirect_light", e)
                      }
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
                      onChange={(e) => onOffHandle("0.1", "restroom_main", e)}
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
                        onOffHandle("0.1", "restroom_indirect_light", e)
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
                    onChange={(e) => onOffHandle("0.1", "aux1", e)}
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
                    onChange={(e) => onOffHandle("0.1", "aux2", e)}
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
                    onChange={(e) => onOffHandle("0.1", "aux3", e)}
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
                    onChange={(e) => onOffHandle("0.1", "aux4", e)}
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
                        //style={{ height: `${progressBar.freshWater}%` }}
                        style={{ height: "10%" }}
                      >
                        <span className="sr-only">
                          <div>{progressBar.freshWater}%</div>
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
                        onChange={(e) => onOffHandle("0.1", "freshWater", e)}
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
                        onChange={(e) => onOffHandle("0.1", "water_pump", e)}
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
                        //style={{ height: `${progressBar.wasteWater}%` }}
                        style={{ height: "10%" }}
                      >
                        <span className="sr-only">
                          <div>{progressBar.wasteWater}%</div>
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
                        onChange={(e) => onOffHandle("0.1", "wasteWater", e)}
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
                      //style={{ height: `${progressBar.batteryLevel}%` }}
                      style={{ height: "10%" }}
                    >
                      <span className="sr-only">
                        <div>
                          <div>배터리</div>
                          <div>잔량</div>
                        </div>
                        <div>{progressBar.batteryLevel}%</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress_right">
                  <div>전압 {progressbarDefault.battery_voltage_value}V</div>
                  <div>
                    전류
                    {progressbarDefault.photovoltaics_electric_current_value}A
                  </div>
                  <div>온도 {progressbarDefault.battery_temp_value}도</div>
                  <div>{progressbarDefault.battery_remaining_time}</div>
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
                      //style={{ height: `${progressBar.photovoltaics}%` }}
                      style={{ height: "10%" }}
                    >
                      <span className="sr-only">
                        <div>태양광</div>
                        <div>{progressBar.photovoltaics}%</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress_right">
                  <div>
                    전류
                    {progressbarDefault.photovoltaics_electric_current_value}A
                  </div>
                  <div>
                    발전량
                    {progressbarDefault.photovoltaics_power_generation_value}Ah
                  </div>
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
                      // style={{ height: `${progressBar.alternator}%` }}
                      style={{ height: "10%" }}
                    >
                      <span className="sr-only">
                        <div>알터</div>
                        <div>{progressBar.alternator}%</div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="progress_right">
                  <div>
                    전류 {progressbarDefault.alternator_electric_current_value}A
                  </div>
                  <div>
                    발전량
                    {progressbarDefault.alternator_power_generation_value}Ah
                  </div>
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
                    onChange={(e) => onOffHandle("0.1", "refrigerator", e)}
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
                    onChange={(e) => onOffHandle("0.1", "inverter", e)}
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
                    onChange={(e) => onOffHandle("0.1", "Hydraulics_level", e)}
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
                    onChange={(e) => onOffHandle("0.1", "restroom_fan", e)}
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
                    onChange={(e) =>
                      onOffHandle("0.1", "vehicle_bottom_light", e)
                    }
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
                    onChange={(e) => onOffHandle("0.1", "vehicle_start", e)}
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
                        onChange={(e) =>
                          onOffHandle("0.1", "aircon_livingroom_check", e)
                        }
                        defaultChecked={
                          defaultToggle.aircon_livingroom_check === 1
                            ? true
                            : false
                        }
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
                        TempControl("0.1", "aircon_livingroom_temp", 1)
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>╋</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        TempControl("0.1", "aircon_livingroom_temp", -1)
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>─</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control_bottom">
                  <div className="control_inner margin_right">
                    <div
                      className="mode_btn"
                      onClick={() => resetAndMode("0.1", "heaterd2_reset")}
                    >
                      <div className="modetext">
                        <div>모드</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner margin_right">
                    <div
                      className="control_btn control_plus"
                      onClick={() =>
                        TempControl("0.1", "aircon_livingroom_wind", 1)
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>△</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        TempControl("0.1", "aircon_livingroom_wind", -1)
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>▽</div>
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
                        onChange={(e) =>
                          onOffHandle("0.1", "aircon_bedroom_check", e)
                        }
                        defaultChecked={
                          defaultToggle.aircon_bedroom_check === 1
                            ? true
                            : false
                        }
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
                        TempControl("0.1", "aircon_bedroom_temp", 1)
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>╋</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        TempControl("0.1", "aircon_bedroom_temp", -1)
                      }
                    >
                      <div className="pmtext">
                        <div>온도</div>
                        <div>─</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control_bottom">
                  <div className="control_inner margin_right">
                    <div
                      className="mode_btn"
                      onClick={() => resetAndMode("0.1", "aircon_bedroom_mode")}
                    >
                      <div className="modetext">
                        <div>모드</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner margin_right">
                    <div
                      className="control_btn control_plus"
                      onClick={() =>
                        TempControl("0.1", "aircon_bedroom_wind", 1)
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>△</div>
                      </div>
                    </div>
                  </div>
                  <div className="control_inner">
                    <div
                      className="control_btn"
                      onClick={() =>
                        TempControl("0.1", "aircon_bedroom_wind", -1)
                      }
                    >
                      <div className="pmtext">
                        <div>풍량</div>
                        <div>▽</div>
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
                    onChange={(e) => onOffHandle("0.1", "heaterd2", e)}
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
                  onClick={() => TempControl("0.1", "header_d2_temp", 1)}
                >
                  <div className="pmtext">
                    <div>온도</div>
                    <div>╋</div>
                  </div>
                </div>
              </div>
              <div className="heater_btns margin_right">
                <div
                  className="control_btn control_plus"
                  onClick={() => TempControl("0.1", "header_d2_temp", -1)}
                >
                  <div className="pmtext">
                    <div>온도</div>
                    <div>─</div>
                  </div>
                </div>
              </div>
              <div className="heater_btns">
                <div
                  className="control_btn control_plus"
                  onClick={() => resetAndMode("0.1", "heaterd2_reset")}
                >
                  <div className="pmtext">
                    <div>에러</div>
                    <div>리셋</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heater_row">
              <div className="heater_btns margin_right">
                <label className="toggle">
                  <input
                    id="mycheckbox"
                    type="checkbox"
                    className="default"
                    onChange={(e) => onOffHandle("0.1", "heaterd5", e)}
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
                <div
                  className="control_btn control_plus"
                  onClick={() => resetAndMode("0.1", "heaterd5_reset")}
                >
                  <div className="pmtext">
                    <div>에러</div>
                    <div>리셋</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col_wrap_inner_left margin_right">
                <div className="slider_wrap">
                  <RangeSlider
                    name="aqua_bed_warmer"
                    value={rangeValue.aqua_bed_warmer}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
                <div className="slider_wrap">
                  <RangeSlider
                    name="aqua_bunker_warmer"
                    value={rangeValue.aqua_bunker_warmer}
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
                    value={rangeValue.floor_heater}
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e) => rangdesliderHandle(e)}
                  />
                </div>
                <div className="slider_wrap">
                  <RangeSlider
                    name="air_heater"
                    value={rangeValue.air_heater}
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
                    onChange={(e) => onOffHandle("0.1", "maxfan", e)}
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
                    onChange={(e) => onOffHandle("0.1", "maxfan", e)}
                    defaultChecked={
                      defaultToggle.maxfan_inout_check === 1 ? true : false
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
                  onClick={() => TempControl("0.1", "maxfan", 1)}
                >
                  <div className="pmtext">
                    <div>풍량</div>
                    <div>△</div>
                  </div>
                </div>
              </div>
              <div className="maxfan_btns">
                <div
                  className="control_btn"
                  onClick={() => TempControl("0.1", "maxfan", -1)}
                >
                  <div className="pmtext">
                    <div>풍량</div>
                    <div>▽</div>
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
