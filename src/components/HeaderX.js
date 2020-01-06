import React, { Component } from "react";
import styled, { css } from "styled-components";
import LogoHeader from "./LogoHeader";

function HeaderX(props) {
    return (
        <Container {...props}>
            <Group>
                <LogoHeader
                    style={{
                        width: 41,
                        height: 44,
                        marginTop: 6,
                        marginLeft: 650
                    }}
                ></LogoHeader>
            </Group>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(31,178,204,1);
  flex-direction: column;
`;

const Group = styled.div`
  background-color: rgba(31,178,204,1);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -30px;
  margin-top: 30px;
`;

export default HeaderX;
