import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = ({ token }) => {
  const router = useRouter();
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");

  return (
    <Layout token={token}>
      <div className="mt-40 flex flex-col justify-center text-center">
        <p className="ml-60 text-5xl text-white font-bold">
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
