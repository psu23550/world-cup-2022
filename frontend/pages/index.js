import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Home = ({ token }) => {
  const router = useRouter();
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  // axios
  //   .get(
  //     "https://api.openweathermap.org/data/2.5/onecall?lat=8.403871527730571&lon=98.24652129783247&exclude=hourly,daily&lang=th&appid=2b8e238c52f39a3090db73edfb1da3c5"
  //   )
  //   .then((res) => {
  //     // console.log(res);
  //     setTemp(parseInt(res.data.current.temp) - 273.15);
  //     setWeather(res.data.current.weather[0].description);
  //   })
  //   .catch((error) => {
  //     // console.log(error);
  //   });

  // const weatherData = () => {
  //   if (temp != "") {
  //     return (
  //       <div className={styles.column}>
  //         <p className={styles.temp}>{temp.toFixed(2)} °C</p>
  //         <p className={styles.weather}>{weather}</p>
  //       </div>
  //     );
  //   }
  // };

  return (
    <Layout token={token}>
      <div className="mt-40 flex flex-col justify-center text-center">
        <p className="ml-60 text-5xl text-white font-extrabold">
          WELCOME TO
        </p>
      </div>
    </Layout>
  );
};

export default Home;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
