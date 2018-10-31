import React, { Component } from 'react';
import ChartList from '../components/ChartList';
import './ChartContainer.css';


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
        <div className = "chart-container">
            <h2>Chart List</h2>
            <ChartList songs = {this.state.songs}/>
        </div>
        )
    }

}

export default ChartContainer;