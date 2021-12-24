import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"; //slider bar
import RangeSlider from "react-bootstrap-range-slider"; //slider bar
import { ProgressBar, Button } from "react-bootstrap"; //progress bar
import { Modal } from "react-bootstrap"; //modal
import Videojs from "../video.js"; //camera

const Home = ({ data, sendCmd }) => {
  let zero = 0;

  //horizontal range slider state
  const [rangeValue, setrangeValue] = useState({
    livingroom_top: zero, //거실상부 슬라이더 초기값
    livingroom_bottom: zero, //거실하부 슬라이더 초기값
    bedroom_top: zero, //침실상부 슬라이더 초기값
    bedroom_bottom: zero, //침실하부 슬라이더 초기값
    earning_left: zero, //어닝좌 슬라이더 초기값
    earning_right: zero, //어닝우 슬라이더 초기값
    floor_heater: zero, //바닥난방 슬라이더 초기값
    air_heater: zero, //온풍난방 슬라이더 초기값
    aqua_bed_warmer: zero, //침대온수 슬라이더 초기값
    aqua_bunker_warmer: zero, //벙커온수 슬라이더 초기값
  });

  //progress bar state
  const [progressBar, setprogressbar] = useState({
    freshWater: zero, //청수막대바 초기값
    wasteWater: zero, //오수막대바 초기값
    batteryLevel: zero, //배터리잔량막대바 초기값
    photovoltaics: zero, //태양광막대바 초기값
    alternator: zero, //알터막대바 초기값
  });

  let bool = false;

  //버튼의 초기 셋팅값
  const [defaultToggle, setDefaultToggle] = useState({
    livingroom_bottom: bool,
    livingroom_main_check: bool, //거실메인 버튼 초기값
    livingroom_top_check: bool, //거실상부 버튼 초기값
    livingroom_bottom_check: bool, //거실하부 버튼 초기값
    bedroom_main_check: bool, //침실메인 버튼 초기값
    bedroom_top_check: bool, //침실상부 버튼 초기값
    bedroom_bottom_check: bool, //침실하부 버튼 초기값
    all_light_check: bool, //전체등 버튼 초기값
    earning_left_check: bool, //어닝좌 버튼 초기값
    earning_right_check: bool, //어닝우 버튼 초기값
    bunker_main_check: bool, //벙커메인 버튼 초기값
    bunker_indirect_light_check: bool, //벙커간접등 버튼 초기값
    restroom_main_check: bool, //화장실메인 버튼 초기값
    restroom_indirect_light_check: bool, //화장실간접등 버튼 초기값
    aux1_check: bool, //aux1 버튼 초기값
    aux2_check: bool, //aux2 버튼 초기값
    aux3_check: bool, //aux3 버튼 초기값
    aux4_check: bool, //aux4 버튼 초기값
    freshWater_check: bool, //청수퇴수 버튼 초기값
    water_pump_check: bool, //물펌프 버튼 초기값
    wasteWater_check: bool, //오수퇴수 버튼 초기값
    refrigerator_check: bool, //냉장고 버튼 초기값
    inverter_check: bool, //인버터 버튼 초기값
    restroom_fan_check: bool, //화장실팬 버튼 기값
    Hydraulics_level_check: bool, //유압레벨 버튼 초기값
    vehicle_bottom_light_check: bool, //차량하부등 버튼 초기값
    vehicle_start_check: bool, //차량시동 버튼 초기값
    aircon_livingroom_check: bool, //에어컨거실 버튼 초기값
    aircon_livingroom_mode: bool, //에어컨모드 버튼 초기값
    aircon_bedroom_check: bool, //에어컨침실 버튼 초기값
    aircon_bedroom_mode: bool, //에어컨모드 버튼 초기값
    heaterd2_check: bool, //히터d2 버튼 초기값
    heaterd5_check: bool, //히터d5 버튼 초기값
    maxfan_check: bool, //맥스팬on 버튼 초기값
    maxfan_inout_check: bool, //맥스팬 인아웃 버튼 초기값
  });

  let empty = "";

  //프로그래스바 초기 셋팅값
  const [progressbarDefault, setProgressbarDefault] = useState({
    battery_voltage_value: empty, //배터리전압 텍스트 초기값
    battery_electric_current_value: empty, //배터리전류 텍스트 초기값
    battery_temp_value: empty, //배터리온도 텍스트 초기값
    battery_remaining_time: empty, //배터리남은시간 텍스트 초기값
    photovoltaics_electric_current_value: empty, //태양광전류 텍스트 초기값
    photovoltaics_power_generation_value: empty, //태양광발전량 텍스트 초기값
    alternator_electric_current_value: empty, //알터전류 텍스트 초기값
    alternator_power_generation_value: empty, //알터발전량 텍스트 초기값
  });

  //app.js의 data observer 역할
  useEffect(() => {
    let d = null;
    if (data && data.length !== 0) {
      d = data;
      if (
        d.d1 &&
        d.d2 &&
        d.d3 &&
        d.d4 &&
        d.d5 &&
        d.d6 &&
        d.d7 &&
        d.d8 &&
        d.d9 &&
        d.d10 &&
        d.d11 &&
        d.d12 &&
        d.d13 &&
        d.d14 &&
        d.d15 &&
        d.d16 &&
        d.d17 &&
        d.d18 &&
        d.d19 &&
        d.d20 &&
        d.d21 &&
        d.d22 &&
        d.d23 &&
        d.d24 &&
        d.d25 &&
        d.d26 &&
        d.d27 &&
        d.d28 &&
        d.d29 &&
        d.d30 &&
        d.d31 &&
        d.d32 &&
        d.d33 &&
        d.d34 &&
        d.d35 &&
        d.d36 &&
        d.d37 &&
        d.d38 &&
        d.d39 &&
        d.d40 &&
        d.d41 &&
        d.d42 &&
        d.d43 &&
        d.d44 &&
        d.d45 &&
        d.d46 &&
        d.d47 &&
        d.d48 &&
        d.d49 &&
        d.d50 &&
        d.d51 &&
        d.d52 &&
        d.d53 &&
        d.d54 &&
        d.d55 &&
        d.d56 &&
        d.d57 &&
        d.d58
      ) {
        setrangeValue(...rangeValue, {
          livingroom_top: d.d1,
          livingroom_bottom: d.d2,
          bedroom_top: d.d3,
          bedroom_bottom: d.d4,
          earning_left: d.d5,
          earning_right: d.d6,
          floor_heater: d.d7,
          air_heater: d.d8,
          aqua_bed_warmer: d.d9,
          aqua_bunker_warmer: d.d10,
        });
        setprogressbar(...progressBar, {
          freshWater: d.d11,
          wasteWater: d.d12,
          batteryLevel: d.d13,
          photovoltaics: d.d14,
          alternator: d.d15,
        });
        setDefaultToggle(...defaultToggle, {
          livingroom_bottom: d.d16,
          livingroom_main_check: d.d17,
          livingroom_top_check: d.d18,
          livingroom_bottom_check: d.d19,
          bedroom_main_check: d.d20,
          bedroom_top_check: d.d21,
          bedroom_bottom_check: d.d22,
          all_light_check: d.d23,
          earning_left_check: d.d24,
          earning_right_check: d.d25,
          bunker_main_check: d.d26,
          bunker_indirect_light_check: d.d27,
          restroom_main_check: d.d28,
          restroom_indirect_light_check: d.d29,
          aux1_check: d.d30,
          aux2_check: d.d31,
          aux3_check: d.d32,
          aux4_check: d.d33,
          freshWater_check: d.d34,
          water_pump_check: d.d35,
          wasteWater_check: d.d36,
          refrigerator_check: d.d37,
          inverter_check: d.d38,
          restroom_fan_check: d.d39,
          Hydraulics_level_check: d.d40,
          vehicle_bottom_light_check: d.d41,
          vehicle_start_check: d.d42,
          aircon_livingroom_check: d.d43,
          aircon_livingroom_mode: d.d44,
          aircon_bedroom_check: d.d45,
          aircon_bedroom_mode: d.d46,
          heaterd2_check: d.d47,
          heaterd5_check: d.d48,
          maxfan_check: d.d49,
          maxfan_inout_check: d.d50,
        });
        setProgressbarDefault(...progressbarDefault, {
          battery_voltage_value: d.d51,
          battery_electric_current_value: d.d52,
          battery_temp_value: d.d53,
          battery_remaining_time: d.d54,
          photovoltaics_electric_current_value: d.d55,
          photovoltaics_power_generation_value: d.d56,
          alternator_electric_current_value: d.d57,
          alternator_power_generation_value: d.d58,
        });
      }
    }
  }, [data]);

  //ON OFF 버튼 및 모드
  const onOffHandle = (target, name, e) => {
    sendCmd(target, name, e.target.checked === true ? 1 : 0);
  };

  //온도 및 풍량조절
  const TempControl = (target, name, op) => {
    sendCmd(target, name, op);
  };

  //에러리셋
  const errorReset = (target, name) => {
    sendCmd(target, name);
  };

  //slider value
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setrangeValue({
      ...rangeValue,
      [e.target.name]: value,
    });
    sendCmd("0.1", e.target.name, value);
  };

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

  //버튼 컴포넌트1
  const InputBtnOne = ({ name, checked, textA }) => {
    return (
      <label className="toggle">
        <input
          type="checkbox"
          onChange={(e) => onOffHandle("0.1", name, e)}
          defaultChecked={checked === 1 ? true : false}
        />
        <span className="dot">
          <div className="text_on">
            <div>{textA}</div>
          </div>
          <div className="text_off">
            <div>{textA}</div>
          </div>
        </span>
      </label>
    );
  };

  //버튼 컴포넌트2
  const InputBtnTwo = ({ name, checked, textA, textB }) => {
    return (
      <label className="toggle">
        <input
          type="checkbox"
          onChange={(e) => onOffHandle("0.1", name, e)}
          defaultChecked={checked === 1 ? true : false}
        />
        <span className="dot">
          <div className="text_on">
            <div>{textA}</div>
            <div>{textB}</div>
          </div>
          <div className="text_off">
            <div>{textA}</div>
            <div>{textB}</div>
          </div>
        </span>
      </label>
    );
  };

  //버튼 컴포넌트3
  const InputBtnThree = ({ name, checked, textA, textB, textC }) => {
    return (
      <label className="toggle">
        <input
          type="checkbox"
          onChange={(e) => onOffHandle("0.1", name, e)}
          defaultChecked={checked === 1 ? true : false}
        />
        <span className="dot">
          <div className="text_on">
            <div>{textA}</div>
            <div>{textB}</div>
          </div>
          <div className="text_off">
            <div>{textA}</div>
            <div>{textC}</div>
          </div>
        </span>
      </label>
    );
  };

  return (
    <div className="inner_contents home_wrap">
      {/* column 1 */}
      <div className="col">
        <div className="wrap_bg li_wrap">
          <div className="title">
            <div>조명</div>
          </div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right li_flex">
                <div className="col_wrap_inner_left margin_right">
                  <InputBtnTwo
                    checked={defaultToggle.livingroom_main_check}
                    textA="거실"
                    textB="메인"
                    name="livingroom_main"
                  />
                </div>
                <div className="col_wrap_inner_right">
                  <div className="col_wrap_inner_right_top">
                    <InputBtnTwo
                      checked={defaultToggle.livingroom_top_check}
                      textA="거실"
                      textB="상부"
                      name="livingroom_top"
                    />
                  </div>
                  <div className="col_wrap_inner_right_bottm">
                    <InputBtnTwo
                      checked={defaultToggle.bedroom_bottom_check}
                      textA="거실"
                      textB="하부"
                      name="livingroom_bottom"
                    />
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
                  <InputBtnTwo
                    checked={defaultToggle.bedroom_main_check}
                    textA="침실"
                    textB="메인"
                    name="bedroom_main"
                  />
                </div>
                <div className="col_wrap_inner_right">
                  <div className="col_wrap_inner_right_top">
                    <InputBtnTwo
                      checked={defaultToggle.bedroom_top_check}
                      textA="침실"
                      textB="상부"
                      name="bedroom_top"
                    />
                  </div>
                  <div className="col_wrap_inner_right_bottm">
                    <InputBtnTwo
                      checked={defaultToggle.bedroom_bottom_check}
                      textA="침실"
                      textB="하부"
                      name="bedroom_bottom"
                    />
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
                  <InputBtnOne
                    checked={defaultToggle.all_light_check}
                    textA="전체등"
                    name="all_light"
                  />
                </div>
                <div className="col_wrap_inner_right">
                  <div className="col_wrap_inner_right_top">
                    <InputBtnTwo
                      checked={defaultToggle.earning_left_check}
                      textA="어닝"
                      textB="좌"
                      name="earning_left"
                    />
                  </div>
                  <div className="col_wrap_inner_right_bottm">
                    <InputBtnTwo
                      checked={defaultToggle.earning_right_check}
                      textA="어닝"
                      textB="우"
                      name="earning_right"
                    />
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
                  <InputBtnTwo
                    checked={defaultToggle.bunker_main_check}
                    textA="벙커"
                    textB="메인"
                    name="bunker_main"
                  />
                </div>
                <div className="col_wrap_inner_right li_btn_center">
                  <InputBtnTwo
                    checked={defaultToggle.bunker_indirect_light_check}
                    textA="벙커"
                    textB="간접등"
                    name="bunker_indirect_light"
                  />
                </div>
              </div>
              <div className="inner_col_wrap li_flex">
                <div className="col_wrap_inner_left margin_right li_btn_center">
                  <InputBtnTwo
                    checked={defaultToggle.restroom_main_check}
                    textA="화장실"
                    textB="메인"
                    name="restroom_main"
                  />
                </div>
                <div className="col_wrap_inner_right li_btn_center">
                  <InputBtnTwo
                    checked={defaultToggle.restroom_indirect_light_check}
                    textA="화장실"
                    textB="간접등"
                    name="restroom_indirect_light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_bg other_wrap">
          <div className="title">
            <div>장치</div>
          </div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right">
                <InputBtnOne
                  checked={defaultToggle.aux1_check}
                  textA="AUX1"
                  name="aux1"
                />
              </div>
              <div className="inner_col_wrap margin_right">
                <InputBtnOne
                  checked={defaultToggle.aux2_check}
                  textA="AUX2"
                  name="aux2"
                />
              </div>
              <div className="inner_col_wrap margin_right">
                <InputBtnOne
                  checked={defaultToggle.aux3_check}
                  textA="AUX3"
                  name="aux3"
                />
              </div>
              <div className="inner_col_wrap">
                <InputBtnOne
                  checked={defaultToggle.aux4_check}
                  textA="AUX4"
                  name="aux4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* column 2 */}
      <div className="col">
        <div className="water_wrap_flex">
          <div className="wrap_bg water_wrap water_margin">
            <div className="title">
              <div>청수</div>
            </div>
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
                    <InputBtnOne
                      checked={defaultToggle.freshWater_check}
                      textA="퇴수"
                      name="freshWater"
                    />
                  </div>
                  <div className="water_bottom">
                    <InputBtnOne
                      checked={defaultToggle.water_pump_check}
                      textA="물펌프"
                      name="water_pump"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap_bg water_wrap">
            <div className="title">
              <div>오수</div>
            </div>
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
                    <InputBtnOne
                      checked={defaultToggle.wasteWater_check}
                      textA="퇴수"
                      name="wasteWater"
                    />
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
          <div className="title">
            <div>배터리</div>
          </div>
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
          <div className="title">
            <div>전기장치</div>
          </div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap margin_right">
                <InputBtnOne
                  checked={defaultToggle.refrigerator_check}
                  textA="냉장고"
                  name="refrigerator"
                />
              </div>
              <div className="inner_col_wrap margin_right">
                <InputBtnOne
                  checked={defaultToggle.inverter_check}
                  textA="인버터"
                  name="inverter"
                />
              </div>
              <div className="inner_col_wrap margin_right"></div>
              <div className="inner_col_wrap">
                <InputBtnTwo
                  checked={defaultToggle.Hydraulics_level_check}
                  textA="유압"
                  textB="레벨"
                  name="Hydraulics_level"
                />
              </div>
            </div>
            <div className="row">
              <div className="inner_col_wrap margin_right">
                <InputBtnTwo
                  checked={defaultToggle.restroom_fan_check}
                  textA="화장실"
                  textB="팬"
                  name="restroom_fan"
                />
              </div>
              <div className="inner_col_wrap margin_right"></div>
              <div className="inner_col_wrap margin_right">
                <InputBtnTwo
                  checked={defaultToggle.vehicle_bottom_light_check}
                  textA="차량"
                  textB="하부등"
                  name="vehicle_bottom_light"
                />
              </div>
              <div className="inner_col_wrap">
                <InputBtnTwo
                  checked={defaultToggle.vehicle_start_check}
                  textA="차량"
                  textB="시동"
                  name="vehicle_start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* column 3 */}
      <div className="col">
        <div className="wrap_bg temp_wrap">
          <div className="title">
            <div>에어컨</div>
          </div>
          <div className="row_wrap">
            <div className="row">
              <div className="inner_col_wrap temp_width margin_right">
                <div className="control_top margin_bottom">
                  <div className="control_inner margin_right">
                    <InputBtnThree
                      checked={defaultToggle.aircon_livingroom_check}
                      textA="거실"
                      textB="on"
                      textC="off"
                      name="aircon_livingroom_check"
                    />
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
                    <InputBtnOne
                      checked={defaultToggle.aircon_livingroom_mode}
                      textA="모드"
                      name="aircon_livingroom_mode"
                    />
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
                    <InputBtnThree
                      checked={defaultToggle.aircon_bedroom_check}
                      textA="침실"
                      textB="on"
                      textC="off"
                      name="aircon_bedroom"
                    />
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
                    <InputBtnOne
                      checked={defaultToggle.aircon_bedroom_mode}
                      textA="모드"
                      name="aircon_bedroom_mode"
                    />
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
          <div className="title">
            <div>히터</div>
          </div>
          <div className="row_wrap">
            <div className="heater_row">
              <div className="heater_btns margin_right">
                <InputBtnThree
                  checked={defaultToggle.heaterd2_check}
                  textA="히터D2"
                  textB="on"
                  textC="off"
                  name="heaterd2"
                />
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
                  onClick={() => errorReset("0.1", "heaterd2_reset")}
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
                    type="checkbox"
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
                  onClick={() => errorReset("0.1", "heaterd5_reset")}
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
          <div className="title">
            <div>맥스팬</div>
          </div>
          <div className="row_wrap">
            <div className="row">
              <div className="maxfan_btns margin_right">
                <InputBtnThree
                  checked={defaultToggle.maxfan_check}
                  textA="맥스팬"
                  textB="on"
                  textC="off"
                  name="maxfan"
                />
              </div>
              <div className="maxfan_btns margin_right">
                <InputBtnThree
                  checked={defaultToggle.maxfan_inout_check}
                  textA="맥스팬"
                  textB="in"
                  textC="out"
                  name="maxfan"
                />
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
