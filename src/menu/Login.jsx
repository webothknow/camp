import React, { useState, useEffect } from "react";
//import Cookies from "js-cookie"; //jscookie
import { reactLocalStorage } from "reactjs-localstorage";

const Login = ({ sendCmd }) => {
  let [id, setId] = useState("");
  let [password, setPassword] = useState("");

  const loginAlert = () => {
    reactLocalStorage.set("userId", id);
    reactLocalStorage.set("userPw", password);
    alert("welcome");
    console.log("welcome");
    sendCmd("bw0.1", id, password);
  };

  const onChangeId = (e) => {
    //console.log(e.target.value);
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    //console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className="inner_contents set_wrap">
      <div className="login_wrap">
        <form>
          <div className="top_wrap">
            <div className="form-group">
              <label>ID</label>
              <input
                onChange={onChangeId}
                value={id}
                type="text"
                name="id"
                className="form-control"
                placeholder="Enter Id"
              />
            </div>
            <div className="form-group">
              <label>PW</label>
              <input
                onChange={onChangePw}
                value={password}
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                autocomplete="off"
              />
            </div>
          </div>
          <div className="bottom_wrap">
            <div className="form-group">
              <button
                type="submit"
                className="okbtn"
                onClick={(e) => loginAlert(e)}
              >
                OK
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
