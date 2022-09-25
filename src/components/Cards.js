import React from "react";
import BGImg from "../images/boxie.jpeg";
import styled from "styled-components";

const Cards = () => {
  return (
    <Boxie>
      <div className="card mx-auto mt-4 bg-gray-100 p-4 rounded-md drop-shadow-xl w-[400px]">
        <img className="mx-auto" src={BGImg} alt="Election Img BG" />
        <div className="content grid grid-cols-2">
          <p className="mb-4 mt-4 ml-4">Name:</p>
          <p className="mb-4 mt-4 ml-4">Test Election</p>
          <p className="mb-4 ml-4">Description:</p>
          <p className="mb-4 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex justify-around ">
          <button className="bg-gray-300 p-4 m-4 rounded-md">Vote</button>
          <button className="bg-gray-300 p-4 m-4 rounded-md">
            Apply as Candidate
          </button>
        </div>
      </div>
      <div className="card mx-auto mt-4 bg-gray-100 p-4 rounded-md drop-shadow-xl w-[400px]">
        <img className="mx-auto" src={BGImg} alt="Election Img BG" />
        <div className="content grid grid-cols-2">
          <p className="mb-4 mt-4 ml-4">Name:</p>
          <p className="mb-4 mt-4 ml-4">Test Election</p>
          <p className="mb-4 ml-4">Description:</p>
          <p className="mb-4 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex justify-around ">
          <button className="bg-gray-300 p-4 m-4 rounded-md">Vote</button>
          <button className="bg-gray-300 p-4 m-4 rounded-md">
            Apply as Candidate
          </button>
        </div>
      </div>
      <div className="card mx-auto mt-4 bg-gray-100 p-4 rounded-md drop-shadow-xl w-[400px]">
        <img className="mx-auto" src={BGImg} alt="Election Img BG" />
        <div className="content grid grid-cols-2">
          <p className="mb-4 mt-4 ml-4">Name:</p>
          <p className="mb-4 mt-4 ml-4">Test Election</p>
          <p className="mb-4 ml-4">Description:</p>
          <p className="mb-4 ml-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="flex justify-around ">
          <button className="bg-gray-300 p-4 m-4 rounded-md">Vote</button>
          <button className="bg-gray-300 p-4 m-4 rounded-md">
            Apply as Candidate
          </button>
        </div>
      </div>
    </Boxie>
  );
};

const Boxie = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
  button {
    padding: 1rem;
    margin: 1rem;
    background-color: #d1d5db;
    border-radius: 0.375rem;
  }
  img {
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
  }
  .card {
    padding: 1rem;
    margin-top: 1rem;
    background-color: #f3f4f6;
    border-radius: 0.375rem;
    /* drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03))
      drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08)); */
    width: 100%;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  p {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`;

// const Boxie = styled.div`
//   width: 100%;
// `;

export default Cards;
