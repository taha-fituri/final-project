import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../../DarkMode.css";
const Login = ({ isAuth, setIsAuth }) => {
  const [userNameL, setUserNameL] = useState("");
  const [passwordL, setPasswordL] = useState("");
  const usersL = [
    {
      id: 0,
      email: "tahatiay35@gmail.com",
      photo:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      old: 27,
      adress: "Mhamdia",
      password: "123456",
      gender: "homme",
    },
  ];

  const navigate = useNavigate();

  const LogIn = () => {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userNameL, password: passwordL }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          const token = await response.json();
          localStorage.setItem("token", token.token);
          setIsAuth(true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(r);
    // const objF = usersL.find((el) => el.email);
    // const objem = usersL.find((el) => el.password);
    // // if (objF.password === passwordL && objem.email === userNameL) {
    //   setIsAuth(!isAuth);
    //   navigate("/");
    // } else {
    //   alert("password incorrect");
    // }
  };
  return (
    <div>
      {" "}
      <div>
        <div className="login ">
          <div className="form login1">
            <form noValidate className="login1">
              <span>Login</span>
              <input
                type="email"
                name="email"
                placeholder="Enter email id / username"
                className="form-control inp_text"
                id="email"
                value={userNameL}
                onChange={(e) => setUserNameL(e.target.value)}
              />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
                onChange={(e) => setPasswordL(e.target.value)}
              />

              <button type="button" onClick={() => LogIn()}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
