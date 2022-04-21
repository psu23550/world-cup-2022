import Layout from "../components/Layout";
import Authen from "../components/Authen";
import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://localhost/api",
});

const About = ({ token }) => {
  let loginName;
  useEffect(() => {
    loginName = localStorage.getItem("user");
    // console.log(loginName);
  });
  return (
    <Layout token={token}>
      <div className="font-promt mt-20 p-12 text-red-800 drop-shadow-2xl rounded-md bg-white w-[60vw] flex-col">
        <p className="text-3xl font-extrabold tracking-[6px] text-center">
          HISTORY OF WORLD CUP
        </p>
        <p className="mt-10 text-xl font-medium indent-8">
          ฟุตบอลโลก หรือ ฟีฟ่าเวิร์ดคัพ (อังกฤษ: FIFA World Cup)
          เป็นการแข่งขันฟุตบอลระหว่างประเทศโดยมีชุดทีมชาติชายร่วมเข้าแข่งในกลุ่มสมาชิกสหพันธ์ฟุตบอลระหว่างประเทศ
          (ฟีฟ่า) การแข่งขันจัดขึ้นทุก ๆ 4 ปี เริ่มครั้งแรกในปี ค.ศ. 1930 ใน
          ฟุตบอลโลก 1930 ยกเว้นในปี ค.ศ. 1942 และ 1946
          ที่งดเว้นไปในช่วงสงครามโลกครั้งที่สอง
          ทีมชนะเลิศการแข่งขันครั้งล่าสุดคือทีมชาติฝรั่งเศส ในการแข่งขัน
          ฟุตบอลโลก 2018
        </p>
        <p className="mt-10 text-xl font-medium indent-8">
          รูปแบบการแข่งขันในปัจจุบัน การแข่งขันประกอบด้วย 32 ทีม
          เพื่อเข้าร่วมแข่งขันในสถานที่จัดงานของประเทศเจ้าภาพ
          ซึ่งจะจัดขึ้นประมาณ 1 เดือน การแข่งขัน 32 ทีมสุดท้ายนี้เรียกว่า
          การแข่งขันฟุตบอลโลกรอบสุดท้าย ส่วนในรอบคัดเลือกที่แข่งขันก่อนหน้านั้น
          ในปัจจุบันจะต้องใช้เวลาร่วม 3 ปี
          เพื่อตัดสินว่าทีมใดที่จะร่วมเข้าแข่งกับทีมประเทศเจ้าภาพ
        </p>
        <div className="flex justify-center">
          <img
            className="w-[3vw]"
            src="http://assets.stickpng.com/images/5842fe21a6515b1e0ad75b3e.png"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Authen(About);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
