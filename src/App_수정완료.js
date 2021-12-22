import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./menu/Home";
import Air from "./menu/Air";
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
  //websocket
  useEffect(() => {
    wsc.openConn();
  }, []);

  //data cmd
  const sendCmd = (target, cmd, status) => {
    let obj = {};
    obj["target"] = target;
    obj["cmd"] = cmd;
    obj["status"] = status;

    wsc.sendMsg(JSON.stringify(obj));
  };

  //data state
  let na = "N/A";
  const [data, setData] = useState();

  //data observer
  const DataObserver = observer(({ store }) => {
    let d = store.getLastMsg;
    let target = "data";

    console.log("d1: ", d);

    if (d && d.length !== 0 && d["data"] === target) {
      console.log("d? ", d);
      d = d["data"];
      if (d["d1"] && d["d2"] && d["d3"] && d["d4"]) {
        setT1(d["d1"]);
        setT2(d["d2"]);
        setT3(d["d3"]);
        setT4(d["d4"]);
      }
    }

    return <></>;
  });

  //data initial state
  const [t1, setT1] = useState();
  const [t2, setT2] = useState();
  const [t3, setT3] = useState();
  const [t4, setT4] = useState();

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
    0: <Home data={data} sendCmd={sendCmd} primarykey="data" />, //data props
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

  const [errorPg, setErrorPg] = useState(false);

  return (
    <div className="App">
      <DataObserver store={wsc.store} />
      <div className="wrapper">
        {errorPg ? (
          <>
            <div className="errorpg">
              <div className="pgcenter">
                <div>Error</div>
                <button>Retry</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="top_bar">
              <div className="top_bar_col time">{time}</div>
              <div className="top_bar_col logo">
                <img src={unnamed} alt=""></img>
              </div>
              <div className="top_bar_col fahrenheit">실내 {t1 ? t1 : na}</div>
              <div className="top_bar_col humid">습도 {t2 ? t2 : na}%</div>
              <div className="top_bar_col celsius">실외 {t3 ? t3 : na}</div>
              <div className="top_bar_col celsius">오수통 {t4 ? t4 : na}</div>
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
