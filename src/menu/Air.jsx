import React, { useState, useEffect } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'; //slider bar
import RangeSlider from 'react-bootstrap-range-slider'; //slider bar

const Air = () => {
  //range slider
  const [rangevalue, setRangeValue] = useState({
    air_1_temp: 0,
    air_1_bedroom: 0,
    air_1_bed: 0,
    air_1_floor: 0,
    air_2_mixfan: 0,
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

  return (
    <div className="inner_contents air_wrap">
      {/* column 1 */}
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
                  <div>온도</div>
                </p>
                <p class="text_off">
                  <div>온도</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="air_1_temp"
                value={rangevalue.air_1_temp}
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
                </p>
                <p class="text_off">
                  <div>침실</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="air_1_bedroom"
                value={rangevalue.air_1_bedroom}
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
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      {/* column 2 */}
      <div className="col">
        <div className="row">
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
                  <div>믹스팬</div>
                </p>
                <p class="text_off">
                  <div>믹스팬</div>
                </p>
              </span>
            </label>
            <div className="range_slider">
              <RangeSlider
                name="air_2_mixfan"
                value={rangevalue.air_2_mixfan}
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
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
      {/* column 3 */}
      <div className="col">
        <div className="row"></div>
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
                  <div>히터(D2)</div>
                </p>
                <p class="text_off">
                  <div>히터(D2)</div>
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
                  <div>히터(D5)</div>
                </p>
                <p class="text_off">
                  <div>히터(D5)</div>
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
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default Air;
