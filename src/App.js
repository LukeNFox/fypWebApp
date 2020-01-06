import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "./components/HeaderX";
import './App.css';

function App() {
    return (
        <>
            <HeaderX
                style={{
                    height: 80,
                    marginTop: -3
                }}
            ></HeaderX>
        </>
    );
}

export default App;

const Rect = styled.div`
  height: 658px;
  background-color: rgba(230, 230, 230,1);
  margin-top: 33px;
`;
