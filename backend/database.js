const bcrypt = require("bcrypt");

let users = {
  users: [
    {
      id: 1,
      username: "admin",
      password: "$2b$10$BIZtQuDc9lVzppq272tOEeKMtez4SYZrfozCfK0ZkvKFra5OodV4e",
      email: "admin@gmail.com",
    },
  ],
};

let news = {
  news: [
    {
      id: 1,
      topic:
        "บราซิล เล็ง “กวาร์ดิโอล่า” คุมบังเหียนทีมชาติ หลังจบฟุตบอลโลก 2022",
      detail: [
        "เป๊ป กวาร์ดิโอล่า ผู้จัดการทีมแมนเชสเตอร์ ซิตี้ ถูกระบุว่าได้รับความสนใจจากทีมชาติบราซิล ในการดึงตัวไปคุมทีมในอนาคต",
        "“เซเลเซา” กำลังจะมีการเปลี่ยนแปลงในตำแหน่งผู้จัดการทีม หลังจาก ติเต้ ผู้จัดการทีมชาติบราซิลคนปัจจุบันกำลังจะหมดสัญญากับทีมหลังจบฟุตบอลโลก 2022 ในช่วงปลายปีนี้ และพวกเขากำลังมองหาคนใหม่เข้ามารับงานนี้แทน ขณะที่ กวาร์ดิโอล่า วัย 51 ปี มีสัญญากับแมนเชสเตอร์ ซิตี้ จนถึงกลางปี 2023 และยังไม่ได้รับการยืนยันว่าจะมีการต่อสัญญาใหม่หรือไม่",
      ],
      image:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_4285,h_2410,x_0,y_130/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_th_international_web/01g03ncmjs4fftd2jjf7.jpg",
    },
    {
      id: 2,
      topic:
        "โรนัลด์ คูมัน เตรียมรับตำแหน่งกุนซือ เนเธอร์แลนด์ ต่อจาก หลุยส์ ฟาน กัล หลังฟุตบอลโลก 2022 - OFFICIAL",
      detail: [
        "ทีมชาติ เนเธอร์แลนด์ ประกาศยืนยันการเข้ารับตำแหน่งกุนซือของ โรนัลด์ คูมัน ต่อจาก หลุยส์ ฟาน กัล หลังจบศึก ฟุตบอลโลก กาตาร์ 2022 เป็นต้นไปเมื่อนายใหญ่คนปัจจุบันของทัพ กังหันลม อยู่ในสภาวะต่อสู้กับโรคมะเร็งต่อมลูกหมาก",
        "ผมยินดีที่จะแชร์ให้ทุกคนทราบว่าหลังจาก เวิลด์คัพ ผมจะเข้ารับตำแหน่งเป็นผู้จัดการทีมชาติ เนเธอร์แลนด์ อีกครั้ง ผมตั้งตารอความท้าทายครั้งใหม่นี้และจะพาทีมประสบความสำเร็จไปด้วยกัน",
      ],
      image:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_3543,h_1992,x_0,y_87/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_th_international_web/01fzz3dd69wqs640t2fr.jpg",
    },
    {
      id: 3,
      topic:
        "อาร์เซนอล-สกอตแลนด์ กุมขมับ คีแรน เทียร์นีย์ เตรียมผ่าเข่าจ่อปิดเทอมซีซันนี้",
      detail: [
        "คีแรน เทียร์นีย์ แบ็คซ้ายคีย์แมนของ สโมสรฟุตบอลอาร์เซนอล แห่งศึก ฟุตบอลพรีเมียร์ลีกอังกฤษ และทีมชาติ สกอตแลนด์ เตรียมขึ้นเขียงผ่าตัดรักษาอาการบาดเจ็บที่หัวเข่า ซึ่งจะทำให้เขาต้องพักฟื้นเป็นระยะเวลาหลายเดือนจนชวดลงเล่นให้กับ ไอ้ปืนใหญ่ ในช่วงเวลาที่เหลือของฤดูกาล รวมไปถึงเกม ฟุตบอลโลก รอบคัดเลือกกับทัพ วิสกี้",
      ],
      image:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_3169,h_1782,x_0,y_212/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_th_international_web/01fzwzzqzpdqd04afg4s.jpg",
    },
  ],
};

const SECRET = "your_jwt_secret";
const NOT_FOUND = -1;

exports.users = users;
exports.SECRET = SECRET;
exports.NOT_FOUND = NOT_FOUND;
exports.news = news;

exports.setUsers = function (_users) {
  users = _users;
};

// === validate username/password ===
exports.isValidUser = async (username, password) => {
  const index = users.users.findIndex((item) => item.username === username);
  return await bcrypt.compare(password, users.users[index].password);
};

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
  return users.users.findIndex((item) => item.username === username);
};
