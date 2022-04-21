import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const api = axios.create({
  baseURL: "http://localhost/api",
});

const Login = ({ token }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("login");
  const changeType = async () => {
    if (type === "login") {
      setType("register");
    } else {
      setType("login");
    }
  };
  const submit = async () => {
    if (type === "login") {
      api
        .post(
          "/login",
          {
            username: username,
            password: password,
            remember: false,
            email: email,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          setStatus("Login Success");
          localStorage.setItem("user", res.data.user.username);
          window.location.replace("/");
        })
        .catch((error) => {
          console.log(error);
          setStatus("Login Failed");
        });
    } else {
      api
        .post(
          "/register",
          {
            username: username,
            password: password,
            email: email,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          setStatus("Register Success");
        })
        .catch((error) => {
          console.log(error);
          setStatus("Register Failed");
        });
    }
  };
  const checkType = () => {
    if (type === "login") {
      return "LOGIN";
    } else {
      return "REGISTER";
    }
  };
  return (
    <Layout userName={username} token={token}>
      <div className={styles.inputForm}>
        <p className="text-red-600 font-sans font-meduim tracking-[3px] text-2xl" >{checkType()}</p>
        <input
          placeholder="Username"
          className="mt-7 p-2 w-80 rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="Email"
          className="mt-7 p-2 w-80 rounded-sm"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="mt-7 p-2 w-80 rounded-sm"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="p-3 mt-3 font-sans font-light text-xl text-red-600 hover:text-orange-200" onClick={submit}>
          {checkType()}
        </button>
        <p className="text-white">{status}</p>
        <button
          className="p-3 font-sans font-light text-xs text-red-600 hover:text-orange-200"
          onClick={changeType}
        >
          {checkType() == "LOGIN" ? "REGISTER" : "LOGIN"}
        </button>
      </div>
    </Layout>
  );
};

export default Login;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
