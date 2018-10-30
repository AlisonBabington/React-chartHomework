import React, { Component } from 'react';

class ChartContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            songs: [],
            currentSong: null
        }
    }

    render() {
        return (
        <h1>I am a container</h1>
        )
    }

}

export default ChartContainer;