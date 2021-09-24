import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Li = () => {
  //horizontal range slider
  const [rangevalue, setRangeValue] = useState({
    li_1_2: 0,
    li_1_3: 0,
    li_1_4: 0,
    li_1_5: 0,
    li_2_2: 0,
    li_2_3: 0,
  });
  const rangdesliderHandle = (e) => {
    const value = e.target.value;
    setRangeValue({
      ...rangevalue,
      [e.target.name]: value,
    });
  };

  return (
    <div className="inner_contents li_wrap">
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
            <div>거실 - 메인</div>
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
              <div>거실 - 상부</div>
              <div>
                <RangeSlider
                  name="li_1_2"
                  value={rangevalue.li_1_2}
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
              <div>거실 - 하부</div>
              <div>
                <RangeSlider
                  name="li_1_3"
                  value={rangevalue.li_1_3}
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
              <div>어닝 - 좌</div>
              <div>
                <RangeSlider
                  name="li_1_4"
                  value={rangevalue.li_1_4}
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
              <div>어닝 - 우</div>
              <div>
                <RangeSlider
                  name="li_1_5"
                  value={rangevalue.li_1_5}
                  step={10}
                  min={0}
                  max={100}
                  onChange={(e) => rangdesliderHandle(e)}
                />
              </div>
            </div>
          </div>
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
            <div>침실 - 메인</div>
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
              <div>침실 - 상부</div>
              <div>
                <RangeSlider
                  name="li_2_2"
                  value={rangevalue.li_2_2}
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
              <div>침실 - 하부</div>
              <div>
                <RangeSlider
                  name="li_2_3"
                  value={rangevalue.li_2_3}
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
              <div>화장실 - 메인</div>
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
              <div>화장실 - 간접등</div>
            </div>
          </div>
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
            <div>벙커 - 메인</div>
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
              <div>벙커 - 간접등</div>
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
              <div>주방</div>
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
              <div>차량 하부등</div>
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
              <div>전체등</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Li;
