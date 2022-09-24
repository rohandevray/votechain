import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <Box>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <Icons>
        <h1>Add Wallet</h1>
      </Icons>
    </Box>
  );
}

const Box = styled.div`
  height: 20vh;
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div``;
const Icons = styled.div``;

export default Nav;
