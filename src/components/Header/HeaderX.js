import React, { Image } from "react";
import styled, { css } from "styled-components";
import scubasoslogo from "./scubasoslogo.png";

export default function HeaderX(props) {

    return (
            <Container>
                <Root>
                    <img src={scubasoslogo}
                    style={{
                        width: 200,
                        borderRadius: 10,
                        border: "2px solid black"}}/>
                </Root>
            </Container>
        );
}

const Container = styled.div`
  background-color: rgba(31,178,204,1);
  display: flex;
  justify-content: center;
  height: 150px;
`;

const Root = styled.div`
  margin-bottom: -30px;
  margin-top: 30px;
`;

const Text5 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
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
  margin-bottom: -62px;
  position: relative;
`;
