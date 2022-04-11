import axios from "axios";
import { useState } from "react";

function Mockapi(value) {
  if (value.text == "") {
    var datas = {
      text: [],
      Urls: value.Urls,
      date: value.date,
      time: value.time,
    };
  } else {
    var datas = {
      text: [value.text],
      Urls: value.Urls,
      date: value.date,
      time: value.time,
    };
  }
  console.log("datas", datas);
  var endpoint = "https://62299094be12fc4538a1a26a.mockapi.io/message";
  axios
    .post(endpoint, datas)
    .finally(() => alert("Your post uploaded successfully"));
}

export default Mockapi;
