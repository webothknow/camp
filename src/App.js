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
import { reactLocalStorage } from "reactjs-localstorage";

const wsc = new WebSocketClient(null, 8700, "/ws", 100);
// const wsc = new WebSocketClient("ws://sw.perigee.kr", 8700, "/ws", 100);

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
  const [time, setTime] = useState(tempo);

  //tab
  const [activeTab, setActiveTab] = useState(0);

  //error
  const [errorPg, setErrorPg] = useState(false);

  //websocket
  useEffect(() => {
    wsc.openConn();
    setInterval(getTime, 1000);
    //dataSetting(); //debug

    if (reactLocalStorage) {
      console.log("id? ", reactLocalStorage.get("userId", true));
      console.log("pw?", reactLocalStorage.get("userPw", true));
      sendCmd(
        "bw0.1",
        reactLocalStorage.get("userId", true),
        reactLocalStorage.get("userPw", true)
      );
    }
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

    if (d && d.length !== 0 && d !== null) {
      if (d.target === target) {
        setData(d);
        dataSetting(d);
      }
    }
    return <></>;
  });

  const dataSetting = (d) => {
    console.log("dataSetting : ", d);
    // if (d.t1 && d.t2 && d.t3 && d.t4) {
    //   setHeaderData({
    //     t1: d.t1,
    //     t2: d.t2,
    //     t3: d.t3,
    //     t4: d.t4,
    //   });
    // }
    //debug
    setHeaderData({
      t1: 1,
      t2: 2,
      t3: 3,
      t4: 4,
    });
  };

  function getTime() {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }

  //tab menu
  const menuObj = {
    0: <Home data={data} sendCmd={sendCmd} />, //data props
    1: <Cam />,
    2: <Test x={0} y={0} />,
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
                  ?????? {headerData.t1 ? headerData.t1 : null}
                </div>
                <div className="top_bar_col humid">?????? {headerData.t2}%</div>
                <div className="top_bar_col celsius">?????? {headerData.t3}</div>
                <div className="top_bar_col celsius">
                  ????????? {headerData.t4}
                </div>
              </div>
              {/* <div className="top_bar_col fahrenheit">
                ?????? {t1 ? t1 : "N/A"}
              </div>
              <div className="top_bar_col humid">?????? {t2 ? t2 : "N/A"}%</div>
              <div className="top_bar_col celsius">?????? {t3 ? t3 : "N/A"}</div>
              <div className="top_bar_col celsius">
                ????????? {t4 ? t4 : "N/A"}
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
