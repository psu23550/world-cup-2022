import Layout from "../components/Layout";
import Authen from "../components/Authen";
import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost/api",
});

const Knowledge = ({ token }) => {
  const [knowledges, setKnowledges] = useState([]);
  let loginName;
  useEffect(() => {
    loginName = localStorage.getItem("user");
    api.get("/news").then((res) => {
      setKnowledges(res.data.news.news);
    });
  });

  const listItem = knowledges.map((res) => (
    <div key={res.id}>
      <div className="font-promt text-red-800 drop-shadow-2xl rounded-md bg-white p-12 mb-4 w-[60vw]">
        <p className="text-2xl mb-8 tracking-[3px]">
          {res.topic.toUpperCase()}
        </p>
        {res.detail.map((dt, index) => (
          <p key={index} className="mb-3">
            {dt}
          </p>
        ))}
        <div className="flex justify-center">
          {res.image ? <img className="w-[40vw]" src={res.image} /> : <p></p>}
        </div>
      </div>
    </div>
  ));

  return (
    <Layout token={token}>
      <div>
        <p className="mt-4 mb-8 text-center font-bold tracking-[6px] font-promt text-3xl text-white">
          WORLD CUP NEWS
        </p>
        {listItem}
      </div>
    </Layout>
  );
};

export default Authen(Knowledge);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
