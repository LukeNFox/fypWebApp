import React, {Component} from "react";
import HeaderX from "./components/Header/HeaderX";
import ReactLoading from 'react-loading';
import './App.css';
import Async from 'react-async';
import styled from "styled-components";
import MapContainer from "./components/MapContainer"

let url = "ec2-63-33-233-120.eu-west-1.compute.amazonaws.com";

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
                <OuterContainer>
                <InfoContainer>
                        <Async promiseFn={getDiveData}>
                            {({data, err, isLoading}) => {
                                if (isLoading) {
                                    return (
                                        <ReactLoading type={'spin'} color={'ffffff'} height={'10%'} width={'10%'}/>

                                    );
                                }
                                if (err) return `Something went wrong: ${err.message}`
                                if (data)
                                        return (
                                            <Border>
                                                <h3>Dive Information</h3>
                                                <ListComponent data={data}></ListComponent>
                                            </Border>
                                        );
                            }}
                        </Async>
                        <Async promiseFn={getDiverData}>
                            {({data, err, isLoading}) => {
                                if (isLoading) {
                                    return (
                                        <ReactLoading type={'spin'} color={'ffffff'} height={'10%'} width={'10%'}/>
                                    );
                                }
                                if (err) return `Something went wrong: ${err.message}`

                                if (data) {
                                    return (
                                        <Divers data={data}></Divers>
                                    );
                                }
                            }}
                        </Async>
                </InfoContainer>
                    <MapContainerStyle>
                        <MapContainer/>
                    </MapContainerStyle>
                </OuterContainer>
            </div>
        )
    }
}

class Row extends React.Component {
    render() {
        const key = this.props.keyField;
        const value = this.props.value ? this.props.value : <span style={{color: 'red'}}>Unknown</span>;
        return (
            <div>
                <div><b>{key.toString()}</b> : {value.toString()}</div>
            </div>
        );
    }
}



class Divers extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let count = 0;
        if (this.props.data != null) {
            const divers = Object.entries(this.props.data).map((data) => {
                count++;
                return (
                    <Border>
                        <h3>Diver {count}</h3>
                        <DiverComponent data={data[1]}></DiverComponent>
                    </Border>
                )
            })
            return (
                <div>{divers}</div>
            );
        } else {
            return <div> EMPTY</div>
        }
    }
}

class DiverComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log("Props: ", this.props.data)
        if (this.props.data != null) {
            return (
                <ListComponent data={this.props.data}></ListComponent>
                )
        } else {
            return <div> EMPTY</div>
        }
    }
}


const List = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const Border = styled.div`
    background-color: #eee;
    border: 2px solid black;
    border-spacing: 15px;
    padding: 15px;
    margin: 10px;
    `

const InfoContainer = styled.div`
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const MapContainerStyle = styled.div`
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const OuterContainer = styled.div`
  background-color: rgba(255,255,255,1);
  padding: 15px;
  display: flex;
  flex-flow: column;
`;


class ListComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("listcomp:", this.props)
        if (this.props.data != null) {
            const info = Object.entries(this.props.data).map(([key, value]) => {
                if (value != null) {
                    if(key.toString() == "name") {
                        return (
                            <Row keyField={"Diver Name"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "qualifications") {
                        return (
                            <Row keyField={"Qualifications"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "breathingApparatus") {
                        return (
                            <Row keyField={"Breathing Apparatus"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "exposureSuit") {
                        return (
                            <Row keyField={"Exposure Suit"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "gasBlend") {
                        return (
                            <Row keyField={"Gas Blend"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "medicalHistory") {
                        return (
                            <Row keyField={"Medical History"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "maxDepth") {
                        return (
                            <Row keyField={"Maximum Depth"} value={value + " meters"}></Row>
                        );
                    }
                    if(key.toString() == "totalBottomTime") {
                        return (
                            <Row keyField={"Bottom Time"} value={value + " minutes"} ></Row>
                        );
                    }
                    if(key.toString() == "visibility") {
                        return (
                            <Row keyField={"Visibility"} value={value + " meters"}></Row>
                        );
                    }
                    if(key.toString() == "environment") {
                        return (
                            <Row keyField={"Environment"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "seaConditions") {
                        return (
                            <Row keyField={"Sea Conditions"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "current") {
                        return (
                            <Row keyField={"Current"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "entryTime") {
                        return (
                            <Row keyField={"Time of Entry"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "exitTime") {
                        return (
                            <Row keyField={"Exit Time"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "diveDifficulty") {
                        return (
                            <Row keyField={"Dive Difficulty"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "parking") {
                        return (
                            <Row keyField={"Difficulty of parking"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "hyperbaricLocation") {
                        return (
                            <Row keyField={"Closest HyperBaric Chamber"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "hemsLocation") {
                        return (
                            <Row keyField={"Closest HEMS Unit"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "emsPhone") {
                        return (
                            <Row keyField={"EMS Phone Number"} value={value}></Row>
                        );
                    }
                    if(key.toString() == "coastguardPhone") {
                        return (
                            <Row keyField={"Coastguard Phone Number"} value={value}></Row>
                        );
                    }
                }
            })
            return (
                <div style={List}>
                        {info}
                </div>
            );
        } else {
            return <div></div>
        }
    }
}


//const getDiveData = {
//     "maxDepth": "40",
//     "totalBottomTime": "30",
//     "visibility": "10",
//     "environment": "Boat",
//     "seaConditions": "Rough",
//     "current": "Strong",
//     "entryTime": "14:00",
//     "exitTime": "14:30",
//     "diveDifficulty": "Hard",
//     "parking": "Close",
//     "hyperbaricLocation": "UHG",
//     "hemsLocation": "UHG",
//     "emsPhone": "0864162943",
//     "coastguardPhone": "0864162943",
//     "id": -1073700329
// }
//
// const getDiverData = [
//     {
//         "diverId": 38,
//         "name": "Paul",
//         "phone": "0863498661",
//         "gasBlend": "27% nitrox",
//         "exposureSuit": "wetsuit",
//         "breathingApparatus": "rebreather",
//         "qualifications": "Instructor",
//         "medicalHistory": "None",
//         "diveId": {
//             "maxDepth": "40",
//             "totalBottomTime": "30",
//             "visibility": "10",
//             "environment": "Boat",
//             "seaConditions": "Rough",
//             "current": "Strong",
//             "entryTime": "14:00",
//             "exitTime": "14:30",
//             "diveDifficulty": "Hard",
//             "parking": "Close",
//             "hyperbaricLocation": "UHG",
//             "hemsLocation": "UHG",
//             "emsPhone": "0864162943",
//             "coastguardPhone": "0864162943",
//             "id": -1073700329
//         }
//     },
//     {
//         "diverId": 39,
//         "name": "Luke",
//         "phone": "0862338661",
//         "gasBlend": "Air",
//         "exposureSuit": "drysuit",
//         "breathingApparatus": "rebreather",
//         "qualifications": "open water",
//         "medicalHistory": "Heart Condition, diabetic",
//         "diveId": {
//             "maxDepth": "40",
//             "totalBottomTime": "30",
//             "visibility": "10",
//             "environment": "Boat",
//             "seaConditions": "Rough",
//             "current": "Strong",
//             "entryTime": "14:00",
//             "exitTime": "14:30",
//             "diveDifficulty": "Hard",
//             "parking": "Close",
//             "hyperbaricLocation": "UHG",
//             "hemsLocation": "UHG",
//             "emsPhone": "0864162943",
//             "coastguardPhone": "0864162943",
//             "id": -1073700329
//         }
//     }
// ]
