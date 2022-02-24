import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

const Test = ({ x, y }) => {
  function NaverMapAPI() {
    return (
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
        style={{
          width: "100%", // 네이버지도 가로 길이
          height: "85vh", // 네이버지도 세로 길이
        }}
        defaultCenter={{ lat: x, lng: y }} // 지도 초기 위치
        defaultZoom={13} // 지도 초기 확대 배율
      />
    );
  }

  return (
    <div className="inner_contents util_wrap">
      <RenderAfterNavermapsLoaded
        ncpClientId={"ra72x5zxbh"} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    </div>
  );
};

export default Test;

//https://console.ncloud.com/naver-service/application

//https://guide.ncloud-docs.com/docs/ko/naveropenapiv3-application

//https://blog.naver.com/plsense/221402878555
