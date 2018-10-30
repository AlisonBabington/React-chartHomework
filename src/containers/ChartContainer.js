import React, { Component } from 'react';

class ChartContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            songs: [],
            currentSong: null
        }
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response =>  response.json())
        .then(data => this.setState({songs: data.feed.entry}))
    }

    render() {
        return (
        <h1>I am a container</h1>
        )
    }

}

export default ChartContainer;