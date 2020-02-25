import React, { Component } from "react";
import styled, { css } from "styled-components";

function HeaderX(props) {
    return (
        <Container {...props}>
                <Root style={{
                    height: 44,
                }}>
                    <Text5Stack>
                        <Text5>ScubaSoS</Text5>
                        <Rect8></Rect8>
                    </Text5Stack>
                </Root>
        </Container>
    );
}

const Container = styled.div`
  background-color: rgba(31,178,204,1);
  display: flex;
  justify-content: center;
`;

const Root = styled.div`
  margin-bottom: -30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
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

export default HeaderX;
