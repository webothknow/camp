import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./menu/Home";
import Login from "./menu/Login";
import Test from "./menu/Test";
import Cam from "./menu/Cam";
import Set from "./menu/Set";
import unnamed from "./image/unnamed.png";
import WebSocketClient from "./js/ws/WebSocketClient"; //websocket
import { observer } from "mobx-react"; //observer
import { toJS } from "mobx"; //tojs
// import { apiDefineProperty } from "mobx/dist/internal";

const wsc = new WebSocketClient(null, 8700, "/ws", 100);
// const wsc = new WebSocketClient("ws://sw.perigee.kr", 8700, "/ws", 100);

//send_cmd 수정필요
function App() {
  //data state
  const [data, setData] = useState();
  let na = "N/A";

  //data initial state
  const [headerData, setHeaderData] = useState({
    t1: na,
    t2: na,
    t3: na,
    t4: na,
  });

  //time
  const tempo = new Date().toLocaleTimeString();
  const dia = new Date().toLocaleDateString();
  const [time, setTime] = useState(tempo);
  const [date, setDate] = useState(dia);

  //tab
  const [activeTab, setActiveTab] = useState(0);

  //error
  const [errorPg, setErrorPg] = useState(false);

  //websocket
  useEffect(() => {
    wsc.openConn();
  }, []);

  useEffect(() => {
    setInterval(getTime, 1000);
  }, []);

  //data cmd
  const sendCmd = (target, cmd, status) => {
    let obj = {};
    obj["target"] = target;
    obj["cmd"] = cmd;
    obj["status"] = status;

    wsc.sendMsg(JSON.stringify(obj));
  };

  //data observer
  const DataObserver = observer(({ store }) => {
    let d = store.getLastMsg;
    let target = "data";

    if (d && d.length !== 0) {
      if (d.target === target) {
        setData(d);
        dataSetting(d);
      }
    }

    return <></>;
  });

  const dataSetting = (d) => {
    if (d.t1 && d.t2 && d.t3 && d.t4) {
      setHeaderData(...headerData, {
        t1: d.t1,
        t2: d.t2,
        t3: d.t3,
        t4: d.t4,
      });
    }
  };

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  //tab menu
  const menuObj = {
    0: <Home data={data} sendCmd={sendCmd} />, //data props
    1: <Cam />,
    2: <Test />,
    3: <Login sendCmd={sendCmd} />,
    4: <Set />,
  };

  //tab menu color index
  const navDisplayHandle = (idx) => {
    // console.log("hi!", idx);
    setActiveTab(idx);
    colorchange(idx);
    if (idx === 4) {
      window.close();
    }
  };

  //tab menu color change
  let [bg, setBg] = useState({
    li: "#2c2a2a",
    air: "#555",
    util: "#555",
    cam: "#555",
    set: "#555",
  });
  const colorchange = (idx) => {
    if (idx === 0 && bg.li === "#555") {
      setBg({
        ...bg,
        li: "#2c2a2a",
        air: "#555",
        util: "#555",
        cam: "#555",
        set: "#555",
      });
    } else if (idx === 1 && bg.air === "#555") {
      setBg({
        ...bg,
        air: "#424242",
        li: "#555",
        util: "#555",
        cam: "#555",
        set: "#555",
      });
    } else if (idx === 2 && bg.util === "#555") {
      setBg({
        ...bg,
        util: "#2c2a2a",
        li: "#555",
        air: "#555",
        cam: "#555",
        set: "#555",
      });
    } else if (idx === 3 && bg.cam === "#555") {
      setBg({
        ...bg,
        cam: "#424242",
        li: "#555",
        air: "#555",
        util: "#555",
        set: "#555",
      });
    } else if (idx === 4 && bg.set === "#555") {
      setBg({
        ...bg,
        set: "#2c2a2a",
        li: "#555",
        air: "#555",
        util: "#555",
        cam: "#555",
      });
    }
  };

  return (
    <div className="App">
      <DataObserver store={wsc.store} />
      <div className="wrapper">
        {errorPg ? (
          <>
            <div className="errorpg">
              <div className="pgcenter">
                <div>Error</div>
                <button onClick={wsc.openConn()}>Retry</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="top_bar">
              <div className="top_bar_col time">
                <div>{time}</div>
              </div>
              <div className="top_bar_col logo">
                <img src={unnamed} alt=""></img>
              </div>
              <div className="top_bar_data">
                <div className="top_bar_col fahrenheit">
                  실내 {headerData.t1}
                </div>
                <div className="top_bar_col humid">습도 {headerData.humi}%</div>
                <div className="top_bar_col celsius">실외 {headerData.t2}</div>
                <div className="top_bar_col celsius">
                  오수통 {headerData.t3}
                </div>
              </div>
              {/* <div className="top_bar_col fahrenheit">
                실내 {t1 ? t1 : "N/A"}
              </div>
              <div className="top_bar_col humid">습도 {t2 ? t2 : "N/A"}%</div>
              <div className="top_bar_col celsius">실외 {t3 ? t3 : "N/A"}</div>
              <div className="top_bar_col celsius">
                오수통 {t4 ? t4 : "N/A"}
              </div> */}
            </div>
            <div className="bottom_contents">
              <div className="navi">
                <div
                  className="menu"
                  onClick={() => navDisplayHandle(0)}
                  style={{ backgroundColor: bg.li }}
                ></div>
                <div
                  className="menu"
                  onClick={() => navDisplayHandle(1)}
                  style={{ backgroundColor: bg.air }}
                ></div>
                <div
                  className="menu"
                  onClick={() => navDisplayHandle(2)}
                  style={{ backgroundColor: bg.util }}
                ></div>
                <div
                  className="menu"
                  onClick={() => navDisplayHandle(3)}
                  style={{ backgroundColor: bg.cam }}
                ></div>
                <div
                  className="menu"
                  onClick={() => navDisplayHandle(4)}
                  style={{ backgroundColor: bg.set }}
                ></div>
              </div>
              <div className="contents">{menuObj[activeTab]}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
