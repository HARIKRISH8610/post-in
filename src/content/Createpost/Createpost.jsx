import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import "./CreatePost.css";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../preloader.gif";
import { NavLink } from "react-router-dom";
import Mockapi from "./mockapi";

function Createpost() {
  const [result, setResult] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setmessage] = useState("");
  const [Url, setUrl] = useState([]);
  const [loader, setLoader] = useState(true);
  const [count1, setCount2] = useState(0);
  const [path, setpath] = useState(false);
  const dispatch = useDispatch();
  const [date, setDate] = useState([]);

  const fnDate = () => {
    var newdate = new Date();
    var dates = `${newdate.toLocaleString({
      hour12: true,
    })}`;
    var splitDate = dates.split(",");
    setDate(splitDate);
  };
  useEffect(() => {
    fnDate();
  }, [count1]);

  const Loader = () => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  };

  const sendData = {
    text: message,
    Urls: Url,
    date: date[0],
    time: date[1],
  };
  const Urlvalue = useSelector((state) => state);

  useEffect(() => {
    setUrl(Urlvalue.payload);
  }, [Urlvalue.payload]);
  useEffect(() => {
    Loader();
  }, []);

  useEffect(() => {
    if (Url.length == 0 && message.length == 0) {
      setpath(false);
    } else {
      setpath(true);
    }
  }, [message, Url]);

  return (
    <>
      {loader ? (
        <div className="preloader">
          <img src={Preloader} alt="preloader" />
          <br />
          <h5 className="text-light">Loading.....</h5>
        </div>
      ) : (
        <>
          <div className="createPost animate__animated animate__fadeIn">
            <div className="createPostInner p-4">
              <h6>Upload your post:</h6>
              <div className="posting-div">
                <div className="Div-head">
                  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-user-web-flaticons-flat-flat-icons-2.png" />
                  <textarea
                    type="text"
                    value={message}
                    className="form-control"
                    placeholder="Type your post"
                    onChange={(e) => setmessage(e.target.value)}
                  />
                </div>
                {Url &&
                  Url.map((val, index) => (
                    <div className="state-gif" key={index}>
                      <img src={val} alt={"gif" + index + 1} />
                    </div>
                  ))}
              </div>

              <div className="actions">
                <button
                  onClick={() => {
                    setResult(true);
                    setCount(count + 1);
                  }}
                  className="btn btn-dark btn-sm"
                >
                  Gif
                </button>
                {path ? (
                  <NavLink
                    onClick={() => {
                      setCount2(count1 + 1);
                      setUrl([]);
                      setmessage("");
                      dispatch({ type: "Initial", payload: [] });
                      Mockapi(sendData);
                    }}
                    to="/mypost"
                  >
                    <button className="btn btn-outline-dark btn-sm">
                      Post
                    </button>
                  </NavLink>
                ) : (
                  <button
                    onClick={() => alert("Please fill something to post")}
                    className="btn btn-outline-dark btn-sm"
                  >
                    Post
                  </button>
                )}
              </div>
            </div>
          </div>
          {result && <Gif click={count} />}
        </>
      )}
    </>
  );
}

export default Createpost;
