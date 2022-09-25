import React from "react";
import styled from "styled-components";

function Apply() {
  const handleClick = (e) => {
    e.target.parentNode.removeChild(e.target);
  };
  return (
    <FormY>
      <h1>Applicants</h1>
      <List>
        <Card>
          <h1>Star Wars Elec.</h1>
          <Identity>
            <h2>Vexee</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
          <Identity>
            <h2>Flakes</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
          <Identity>
            <h2>Chaman</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
        </Card>
        <Card>
          <h1>Moon Wars Elec.</h1>
          <Identity>
            <h2>Vexee</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
          <Identity>
            <h2>Bruno</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
          <Identity>
            <h2>Jack</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
        </Card>
        <Card>
          <h1>Moon Wars Elec.</h1>
          <Identity>
            <h2>Vexee</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
          <Identity>
            <h2>Bruno</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button onClick={handleClick}>Approve</button>
              <button onClick={handleClick}>Decline</button>
            </Game>
          </Identity>
          <Identity>
            <h2>Jack</h2>
            <p>0xCd1EC88e81Ae221518bFbe8590245523ecc43eFd</p>

            <Game>
              <button>Approve</button>
              <button>Decline</button>
            </Game>
          </Identity>
        </Card>
      </List>
    </FormY>
  );
}

const FormY = styled.div`
  height: 100vh;
  width: 80%;
  text-align: center;
  font-size: 6rem;
  padding-top: 3%;
  overflow-y: auto;
`;
const Card = styled.div`
  background-color: #dddada;
  display: block;
  justify-content: space-around;
  padding: 1.3% 4%;
  font-size: 4rem;
  margin: 4rem 6rem;
  text-align: left;
`;
const List = styled.div`
  padding-top: 5%;
  display: block;
  overflow: scroll;
  /* display: grid;
  grid-template-columns: 150rem 150rem;
  grid-gap: 1rem;
  grid-auto-flow: row; */
`;

const Identity = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2%;
`;

const Game = styled.div`
  button {
    width: 20rem;
    height: 9rem;
    background-color: #07a081;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 3.5rem;
    color: white;
    font-weight: 400;
    margin: 0 20px;
    transition: all 0.5s ease;
    :hover {
      letter-spacing: 2px;
    }
    border: none;
    outline: none;
    /* :focus {
      
    } */
  }
`;

export default Apply;
