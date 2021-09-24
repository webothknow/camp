import React, { useState, useEffect } from 'react';
import './App.css';
import Li from './menu/Li';
import Air from './menu/Air';
import Util from './menu/Util';
import Cam from './menu/Cam';
import Set from './menu/Set';
import unnamed from './image/unnamed.png';
import Nav from 'react-bootstrap/Nav';

// const wsc = new WebSocketClient(null, 8700, '/ws', 100);
// const sender_id = 140;

//푸트라폰트파일필요
//웹소켓파일필요
//send_cmd 수정필요

function App() {
  useEffect(() => {
    // wsc.openConn();
  }, []);

  //cmd control
  const send_cmd = (target, cmd, grp) => {
    // let obj = {};
    // obj["target"] = target;
    // obj["cmd"] = cmd;
    // obj["sender"] = sender_id;
    // obj["group"] = grp;
    //wsc.sendMsg(JSON.stringify(obj));
  };

  //time
  const tempo = new Date().toLocaleTimeString();
  const dia = new Date().toLocaleDateString();
  const [time, setTime] = useState(tempo);
  const [date, setDate] = useState(dia);
  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }
  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  //nav show hide
  const menuObj = {
    0: <Li />,
    1: <Air />,
    2: <Util />,
    3: <Cam />,
    4: <Set />,
  };

  const [activeTab, setActiveTab] = useState(0);

  const navDisplayHandle = (idx) => {
    console.log('hi!', idx);
    setActiveTab(idx);
    colorchange(idx);
  };

  let [bg, setBg] = useState({
    li: 'green',
    air: 'green',
    util: 'green',
    cam: 'green',
    set: 'green',
  });

  const colorchange = (idx) => {
    if (idx === 0 && bg.li === 'green') {
      setBg({ ...bg, li: 'red', air: 'green', util: 'green', cam: 'green', set: 'green' });
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="top_bar">
          <div className="top_bar_col time">{time}</div>
          <div className="top_bar_col logo">
            <img src={unnamed} alt=""></img>
          </div>
          <div className="top_bar_col fahrenheit">실내 25.5C</div>
          <div className="top_bar_col humid">50%</div>
          <div className="top_bar_col celsius">실외 -10.5C</div>
        </div>
        <div className="bottom_contents">
          <div className="navi">
            <div
              className="menu"
              onClick={() => navDisplayHandle(0)}
              style={{ backgroundColor: bg.li }}
            >
              조명
            </div>
            <div
              className="menu"
              onClick={() => navDisplayHandle(1)}
              style={{ backgroundColor: bg.air }}
            >
              <div>
                <div>공조</div>
                <div>난방</div>
              </div>
            </div>
            <div
              className="menu"
              onClick={() => navDisplayHandle(2)}
              style={{ backgroundColor: bg.util }}
            >
              <div>
                <div>전기</div>
                <div>오폐수</div>
              </div>
            </div>
            <div
              className="menu"
              onClick={() => navDisplayHandle(3)}
              style={{ backgroundColor: bg.cam }}
            >
              카메라
            </div>
            <div
              className="menu"
              onClick={() => navDisplayHandle(4)}
              style={{ backgroundColor: bg.set }}
            >
              설정
            </div>
          </div>
          <div className="contents">{menuObj[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
