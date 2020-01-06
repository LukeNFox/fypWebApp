import React, { Component } from "react";
import styled, { css } from "styled-components";

function LogoHeader(props) {
    return (
        <Root {...props}>
            <Text5Stack>
                <Text5>SoS</Text5>
                <Rect8></Rect8>
            </Text5Stack>
        </Root>
    );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text5 = styled.span`
  font-family: Arial;
  top: 0px;
  left: 0px;
  color: rgba(255,255,255,1);
  position: absolute;
  font-size: 36px;
`;

const Rect8 = styled.div`
  top: 38px;
  left: 0px;
  background-color: rgba(5,5,5,1);
  position: absolute;
  right: 5px;
  bottom: 63px;
`;

const Text5Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: -62px;
  margin-right: -24px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default LogoHeader;