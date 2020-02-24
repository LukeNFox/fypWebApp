import React, { Component } from "react";
import HeaderX from "./components/Header/HeaderX";
import ReactLoading from 'react-loading';
import './App.css';

import Async from 'react-async';
import styled from "styled-components";

let url = "ec2-52-212-49-13.eu-west-1.compute.amazonaws.com";

const diveID = window.location.pathname.split('/')[1].toString();

const getDiveData = () =>
    fetch(`http://${url}/dive-service/dives?diveId=${diveID}`, {
        method: 'GET',
    })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

const getDiverData = () =>
    fetch(`http://${url}/dive-service/divers?diveId=${diveID}`, {
        method: 'GET',
    })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <HeaderX
                        style={{
                            height: 100,
                            marginTop: -3
                        }}
                    ></HeaderX>
                    <DataComponent data={this.state}></DataComponent>
                </div>
            )
    }
}

class DataComponent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <div>
            <Async promiseFn={getDiveData}>
                {({data, err, isLoading}) => {
                    if (isLoading) {
                        return (
                            <Container>
                            <ReactLoading type={'spin'} color={'ffffff'} height={'5%'} width={'5%'}/>
                            </Container>
                        );
                    }
                    if (err) return `Something went wrong: ${err.message}`

                    if (data)
                        return (
                            <Container>
                            <ListComponent data={data}/>
                            </Container>
                        );
                }}
            </Async>
            <BuddyComp>
            <Async promiseFn={getDiverData}>
                {({data, err, isLoading}) => {
                    if (isLoading) {
                        return (
                            <Container>
                                <ReactLoading type={'spin'} color={'ffffff'} height={'5%'} width={'5%'}/>
                            </Container>
                        );
                    }
                    if (err) return `Something went wrong: ${err.message}`

                    if (data) {
                        data = parseDiverData(data)
                        console.log(data)
                        let length = data.length;

                        console.log("first diver: ",data[0])

                        // for(let i = 0; i < length; i++)
                            return (
                                <Container>
                                    <DiverListComponent data={data[0]}/>
                                </Container>
                            );
                    }
                }}
            </Async>
            </BuddyComp>
        </div>
        )}
}

function parseDiverData(data){
    data = JSON.stringify(data)
    let parsedJson = JSON.parse(data)
    return parsedJson;
}

class ListComponent extends Component {
    constructor(props){super(props)}

    render() {
        console.log(this.props)
        const diveInfo = Object.entries(this.props.data).map(([key,value])=>{
            if(value != null) {
                return (
                    <div><b>{key}</b> : {value.toString()}</div>
                );
            }else{
                return (
                    <div><b>{key}</b> : unknown</div>
                );
            }
        })

        return (
            <Border>{diveInfo}</Border>
        );
    }
}

class DiverListComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log("Props: ",this.props.data)

        const buddyInfo = Object.entries(this.props.data).map(([key,value]) => {
                if (value != null) {
                    if(key.toString() == "name") {
                        return (
                            <div><b>Buddy Name</b> : {value.toString()}</div>
                        );
                    }
                    if(key.toString() == "qualifications") {
                        return (
                            <div><b>Qualifications</b> : {value.toString()}</div>
                        );
                    }
                    if(key.toString() == "breathingApparatus") {
                        return (
                            <div><b>Breathing Apparatus</b> : {value.toString()}</div>
                        );
                    }
                    if(key.toString() == "exposureSuit") {
                        return (
                            <div><b>Exposure Suit</b> : {value.toString()}</div>
                        );
                    }
                    if(key.toString() == "gasBlend") {
                        return (
                            <div><b>Gas Blend</b> : {value.toString()}</div>
                        );
                    }
                    if(key.toString() == "medicalHistory") {
                        return (
                            <div><b>Medical History</b> : {value.toString()}</div>
                        );
                    }
                    if(key.toString() == "phone") {
                        return (
                            <div><b>Phone Number</b> : {value.toString()}</div>
                        );
                    }
                }
            }
        )

        return (
            <Border>{buddyInfo}</Border>
        );
    }
}

// breathingApparatus: null
// diveId: {maxDepth: null, totalBottomTime: null, visibility: null, environment: null, seaConditions: null, …}
// diverId: 2
// exposureSuit: null
// gasBlend: null
// medicalHistory: null
// name: null
// phone: null
// qualifications:

const BuddyComp = styled.div`
    display: flex;
    flex-direction: row;
    `

const Border = styled.div`
    background-color: #eee;
    border: 2px solid black;
    border-spacing: 15px;
    padding: 15px;
    `

const Container = styled.div`
  background-color: rgba(255,255,255,1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;



