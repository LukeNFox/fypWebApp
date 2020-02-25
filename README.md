This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


import React, { Component } from "react";
import HeaderX from "./components/Header/HeaderX";
import ReactLoading from 'react-loading';
import './App.css';

import Async from 'react-async';
import styled from "styled-components";
//
// let url = "ec2-52-212-49-13.eu-west-1.compute.amazonaws.com";
//
// const diveID = window.location.pathname.split('/')[1].toString();

// const getDiveData = () =>
//     fetch(`http://${url}/dive-service/dives?diveId=${diveID}`, {
//         method: 'GET',
//     })
//         .then(res => (res.ok ? res : Promise.reject(res)))
//         .then(res => res.json())

// const getDiverData = () =>
//     fetch(`http://${url}/dive-service/divers?diveId=${diveID}`, {
//         method: 'GET',
//     })
//         .then(res => (res.ok ? res : Promise.reject(res)))
//         .then(res => res.json())

const getDiveData = {
    "maxDepth": "40",
    "totalBottomTime": "30",
    "visibility": "10",
    "environment": "Boat",
    "seaConditions": "Rough",
    "current": "Strong",
    "entryTime": "14:00",
    "exitTime": "14:30",
    "diveDifficulty": "Hard",
    "parking": "Close",
    "hyperbaricLocation": "UHG",
    "hemsLocation": "UHG",
    "emsPhone": "0864162943",
    "coastguardPhone": "0864162943",
    "id": -1073700329
}

const getDiverData = [
    {
        "diverId": 38,
        "name": "Paul",
        "phone": "0863498661",
        "gasBlend": "27% nitrox",
        "exposureSuit": "wetsuit",
        "breathingApparatus": "rebreather",
        "qualifications": "Instructor",
        "medicalHistory": "None",
        "diveId": {
            "maxDepth": "40",
            "totalBottomTime": "30",
            "visibility": "10",
            "environment": "Boat",
            "seaConditions": "Rough",
            "current": "Strong",
            "entryTime": "14:00",
            "exitTime": "14:30",
            "diveDifficulty": "Hard",
            "parking": "Close",
            "hyperbaricLocation": "UHG",
            "hemsLocation": "UHG",
            "emsPhone": "0864162943",
            "coastguardPhone": "0864162943",
            "id": -1073700329
        }
    },
    {
        "diverId": 39,
        "name": "Luke",
        "phone": "0862338661",
        "gasBlend": "Air",
        "exposureSuit": "drysuit",
        "breathingApparatus": "rebreather",
        "qualifications": "open water",
        "medicalHistory": "Heart Condition, diabetic",
        "diveId": {
            "maxDepth": "40",
            "totalBottomTime": "30",
            "visibility": "10",
            "environment": "Boat",
            "seaConditions": "Rough",
            "current": "Strong",
            "entryTime": "14:00",
            "exitTime": "14:30",
            "diveDifficulty": "Hard",
            "parking": "Close",
            "hyperbaricLocation": "UHG",
            "hemsLocation": "UHG",
            "emsPhone": "0864162943",
            "coastguardPhone": "0864162943",
            "id": -1073700329
        }
    }
]


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
        if (this.props.data != null) {
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
        }else{
            return <div></div>
        }
    }
}

class DiverListComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log("Props: ",this.props.data)

        if (this.props.data != null) {
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
        }else{
            return <div></div>
        }
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





