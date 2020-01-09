import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "./components/Header/HeaderX";
import ReactLoading from 'react-loading';
import './App.css';


export default class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
                error: null,
                isLoaded: false,
                data : null,
                diveId: 1793788534
            };
    }


    componentDidMount(){
        return fetch(`http://140.203.186.181:8050/dive-service/dives?diveId=${this.state.diveId}`, {
            method: 'GET',
        }).then((response) => response.json()).then((result) => {
                this.setState({ isLoaded: true, data : result })
                console.log(this.state.data)
            }) ,
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <HeaderX
                        style={{
                            height: 80,
                            marginTop: -3
                        }}
                    ></HeaderX>
                    <div>
                        {/*component to display data*/}
                        {this.state.data ? <ListComponent data={this.state.data}/> :
                            <ReactLoading type={'spin'} color={'ffffff'} height={'20%'} width={'20%'}/>
                        }
                    </div>
                </div>
            );
        }
    }
    }

class ListComponent extends Component {
    constructor(props){super(props)}
    render() {
        const diveInfo = Object.entries(this.props.data).map(([key,value])=>{
            return (
                <div>{key} : {value.toString()}</div>
            );
        })

            return (
                <div>{diveInfo}</div>
            );
        }
    }


const Rect = styled.div`
  height: 658px;
  background-color: rgba(230, 230, 230,1);
  margin-top: 33px;
`;
