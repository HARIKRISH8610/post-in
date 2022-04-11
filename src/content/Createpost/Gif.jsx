import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./loading.gif";

function Gif(props) {
  const [input, setInput] = useState("gif");
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState(false);
  const [seaResult, setSeaResult] = useState(false);
  const [search, setSearch] = useState("");
  const [close, setClose] = useState(false);
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const loading = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  useEffect(() => {
    setClose(true);
    loading();
  }, [props.click]);
  useEffect(() => {
    getData(input);
  }, [count]);

  const getData = (Insearch) => {
    var ArrayUrl = [];
    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=qViQsEESzmoI5gc1fVBWavNuCzTjQ7ZS&q=" +
        Insearch +
        "&limit=25&offset=0&rating=g&lang=en"
    )
      .then((resp) => resp.json())
      .then((result) => {
        if (result.data.length !== 0) {
          result.data.forEach((element) => {
            ArrayUrl.push([element.images.original.url]);
          });
          setUrl(ArrayUrl);
          setResult(false);
        } else {
          setUrl(false);
          setResult(true);
        }
        setSeaResult(true);
        setSearch(input);
      });
  };

  return (
    <div
      className={
        close ? "BgGif animate__animated animate__fadeIn" : "loadDisable"
      }
    >
      <div className="GifInner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          onClick={() => setClose(false)}
          fill="currentColor"
          className="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        <div className="inputs">
          <h5 className="ms-4 pt-3">Gif</h5>
          <div className="Inputsgif">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              className="form-control bg-dark text-light"
            />
            <button
              className="btn searchBtn btn-outline-dark btn-sm"
              onClick={() => {
                setCount(count + 1);
                loading();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className={loader ? "loader mt-5 row" : "loadDisable"}>
          <div>
            <div className="w-100 d-flex justify-content-center">
              <img src={Loading} alt="proloading" />
            </div>
            <div className="w-100 d-flex justify-content-center text-dark">
              <h5> Loading....</h5>
            </div>
          </div>
        </div>
        <div className={loader ? "loadDisable" : ""}>
          {seaResult && (
            <h5 className="ms-3">your search Result :"{search}"</h5>
          )}
          <div className="image-div">
            <div className="images ms-1 col-12 w-100 row">
              {url &&
                url.map((val, index) => (
                  <span
                    className="col-lg-3 col-md-3 col-sm-3 mapImage"
                    key={index}
                  >
                    <button
                      onClick={() => {
                        dispatch({ type: "get_url", payload: val });
                        setClose(false);
                      }}
                    >
                      <img src={val} defaultValue={val} alt={"image" + index} />
                    </button>
                  </span>
                ))}
            </div>
          </div>
          {result ? (
            <div className="text-dark mt-5 text-center">
              <h5>Sorry, No result found......</h5>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Gif;
