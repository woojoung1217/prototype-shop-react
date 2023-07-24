/* eslint-disable */

import React, { useEffect, useState } from "react";
import data from "../data.js";
import data2 from "../data2.js";
import { Link, Route, Router } from "react-router-dom";

const Content = (props) => {
  const { info, info2, finalData, setFinalData } = props;
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const IMG_SIZE = "80%";

  useEffect(() => {
    setFinalData(info.concat(info2));
  }, [info]);

  const handleScroll = () => {
    // scrollY 값이 1000보다 크면 버튼 보여주기
    if (window.scrollY > 1000) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    // scroll 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // 화면을 최상단으로 이동
    window.scrollTo({
      top: 0,
      behavior: "auto", // 부드러운 스크롤
    });
  };

  return (
    <>
      <div className="container" style={{ height: "1000vh" }}>
        <div className="row">
          {finalData.map((item, index) => {
            return (
              <div className="col-md-3" key={index} id="content-item">
                <img src={finalData[index].img} width={IMG_SIZE}></img>
                <p>{finalData[index].title}</p>
                <p>{finalData[index].content}</p>
                <p>{finalData[index].price}원</p>
              </div>
            );
          })}
        </div>
      </div>
      {showScrollToTop && (
        <button
          className="To-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
          }}
        >
          Top
        </button>
      )}
    </>
  );
};
export default Content;
