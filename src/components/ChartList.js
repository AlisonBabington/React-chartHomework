import React from 'react';
import Song from './Song';

const ChartList = (props) => {

    const songs = props.songs.map ((song, index) => {
        return <Song song = {song} key = {index} position = {index + 1}></Song>
    })
    
    return (
    <React.Fragment>
       {songs}
    </React.Fragment>
    )
}

export default ChartList;