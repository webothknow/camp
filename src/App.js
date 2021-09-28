import React, { useState, useEffect } from 'react';
import './App.css';
import Ctrl from './menu/Ctrl';
import Air from './menu/Air';
import Test from './menu/Test';
import Cam from './menu/Cam';
import Set from './menu/Set';
import unnamed from './image/unnamed.png';

// const wsc = new WebSocketClient(null, 8700, '/ws', 100);

//웹소켓파일필요
//send_cmd 수정필요

function App() {
  //ws
  useEffect(() => {
    // wsc.openConn();
  }, []);

  //cmd
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

  //tab menu show hide
  const menuObj = {
    0: <Ctrl />,
    1: <Air />,
    2: <Cam />,
    3: <Test />,
    4: <Set />,
  };
  const [activeTab, setActiveTab] = useState(0);
  const navDisplayHandle = (idx) => {
    // console.log("hi!", idx);
    setActiveTab(idx);
    colorchange(idx);
  };

  //tab menu color change
  let [bg, setBg] = useState({
    li: '#888',
    air: '#555',
    util: '#555',
    cam: '#555',
    set: '#555',
  });
  const colorchange = (idx) => {
    if (idx === 0 && bg.li === '#555') {
      setBg({
        ...bg,
        li: '#888',
        air: '#555',
        util: '#555',
        cam: '#555',
        set: '#555',
      });
    } else if (idx === 1 && bg.air === '#555') {
      setBg({
        ...bg,
        air: '#999',
        li: '#555',
        util: '#555',
        cam: '#555',
        set: '#555',
      });
    } else if (idx === 2 && bg.util === '#555') {
      setBg({
        ...bg,
        util: '#888',
        li: '#555',
        air: '#555',
        cam: '#555',
        set: '#555',
      });
    } else if (idx === 3 && bg.cam === '#555') {
      setBg({
        ...bg,
        cam: '#999',
        li: '#555',
        air: '#555',
        util: '#555',
        set: '#555',
      });
    } else if (idx === 4 && bg.set === '#555') {
      setBg({
        ...bg,
        set: '#888',
        li: '#555',
        air: '#555',
        util: '#555',
        cam: '#555',
      });
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
              제어
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
                <div>카메라</div>
              </div>
            </div>
            <div
              className="menu"
              onClick={() => navDisplayHandle(3)}
              style={{ backgroundColor: bg.cam }}
            >
              <div>
                <div>임시</div>
                <div>메뉴</div>
              </div>
            </div>
            <div
              className="menu"
              onClick={() => navDisplayHandle(4)}
              style={{ backgroundColor: bg.set }}
            >
              <div>
                <div>임시</div>
                <div>메뉴</div>
              </div>
            </div>
          </div>
          <div className="contents">{menuObj[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
