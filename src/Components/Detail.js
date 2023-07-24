/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ finalData, setFinalData }) => {
  const { id } = useParams();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
            <p>CONTENT</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
