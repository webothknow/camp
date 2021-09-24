import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Air = () => {
  //range slider
  const [rangevalue, setRangeValue] = useState({
    li_1_2: 0,
    li_1_3: 0,
    li_1_4: 0,
    li_1_5: 0,
    li_2_2: 0,
    li_2_3: 0,
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
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>거실</div>
              <div>
                <div className="control">
                  <div className="control_margin_right">
                    <button>-</button>온도<button>+</button>
                  </div>
                  <div>
                    <button>-</button>풍량<button>+</button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>침실</div>
              <div>
                <div className="control">
                  <div className="control_margin_right">
                    <button>-</button>온도<button>+</button>
                  </div>
                  <div>
                    <button>-</button>풍량<button>+</button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>맥스팬</div>
              <div>
                <div className="control">
                  <div className="control_margin_right">
                    <button>-</button>온도<button>+</button>
                  </div>
                  <div>
                    <button>-</button>풍량<button>+</button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>화장실팬</div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>침대</div>
              <div>
                <RangeSlider
                  name="air_2_1"
                  value={rangevalue.air_2_1}
                  step={10}
                  min={0}
                  max={50}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>바닥</div>
              <div>
                <RangeSlider
                  name="air_2_2"
                  value={rangevalue.air_2_2}
                  step={10}
                  min={0}
                  max={50}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>벙커</div>
              <div>
                <RangeSlider
                  name="air_2_3"
                  value={rangevalue.air_2_3}
                  step={10}
                  min={0}
                  max={50}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>온풍</div>
              <div>
                <RangeSlider
                  name="air_2_4"
                  value={rangevalue.air_2_4}
                  step={10}
                  min={0}
                  max={50}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>히터(D2)</div>
              <div>
                <RangeSlider
                  name="air_3_1"
                  value={rangevalue.air_3_1}
                  step={10}
                  min={0}
                  max={50}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col">
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
          <div className="slider_col">
            <div>
              <div>히터(D5)</div>
              <div>
                <RangeSlider
                  name="air_3_2"
                  value={rangevalue.air_3_2}
                  step={10}
                  min={0}
                  max={50}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
        <div className="row">
          <div class="toggle_col"></div>
          <div className="slider_col"></div>
        </div>
      </div>
    </div>
  );
};

export default Air;
