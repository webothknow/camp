import React, { useState, useEffect } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
// import SemiCircleProgressBar from "react-progressbar-semicircle";

const Air = () => {
  //range slider
  const [rangevalue, setRangeValue] = useState({
    air_2_1: 0,
    air_2_2: 0,
    air_2_3: 0,
    air_2_4: 0,
    air_3_1: 0,
    air_3_2: 0,
  });
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setRangeValue({
      ...rangevalue,
      [e.target.name]: value,
    });
  };

  return (
    <div className="inner_contents air_wrap">
      <div className="col">
        <div className="row">
          <div className="inner_col_wrap_flex">
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
            <div className="toggle_name">거실</div>
          </div>
          <div className="inner_col_wrap_flex">
            <div className="control_wrap">
              <div className="control">
                <button>-</button>온도<button>+</button>
              </div>
              <div className="control">
                <button>-</button>풍량<button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
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
            <div className="toggle_name">침실</div>
          </div>
          <div className="inner_col_wrap_flex">
            <div className="control_wrap">
              <div className="control">
                <button>-</button>온도<button>+</button>
              </div>
              <div className="control">
                <button>-</button>풍량<button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="inner_col_wrap_flex">
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
            <div className="toggle_name">믹스팬</div>
          </div>
          <div className="inner_col_wrap_flex">
            <div className="control_wrap">
              <div className="control">
                <button>-</button>온도<button>+</button>
              </div>
              <div className="control">
                <button>-</button>풍량<button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
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
                <div>침대</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="air_2_1"
                  value={rangevalue.air_2_1}
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
                <div>바닥</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="air_2_2"
                  value={rangevalue.air_2_2}
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
                <div>벙커</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="air_2_3"
                  value={rangevalue.air_2_3}
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
                <div>온풍</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="air_2_4"
                  value={rangevalue.air_2_4}
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
                <div>히터(D2)</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="air_3_1"
                  value={rangevalue.air_3_1}
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
                <div>히터(D5)</div>
              </div>
              <div className="range_slider">
                <RangeSlider
                  name="air_3_2"
                  value={rangevalue.air_3_2}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      <div className="col">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Air;
