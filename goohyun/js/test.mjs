import fetch from "../data/node_modules/node-fetch/src/index.js";

const myKey = "ee7a3b7ba216421e17c7cac7539866e9";
const reqURL =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
const reqDate = "20200520";
const url = `${reqURL}?key=${myKey}&targetDt=${reqDate}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 4));
  });
