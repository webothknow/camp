


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