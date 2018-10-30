import React from 'react';
import Song from './Song';

const ChartList = (props) => {

    const songs = props.songs.map ((song, index) => {
        return <Song song = {song} key = {index} position = {index + 1}></Song>
    })
    
    return (
    <div>
       <h2>Chart List</h2>
       {songs}
    </div>
    )
}

export default ChartList;