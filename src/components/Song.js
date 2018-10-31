import React from 'react';
import './Song.css';

const Song = ({song, position}) => {

    const image = song['im:image'][2].label;
    const title = song['im:name'].label;
    const artist = song['im:artist'].label;
    const genre = song.category.attributes.label;
    const audio = song.link[1].attributes.href;
   
  return (
      <div className = "song ">
      <h5>Chart Position: {position}</h5>
      <h4>Title: {title}</h4>
      <h5>Artist(s): {artist}</h5>
      <audio controls className='audio'>
        <source src={audio} type = "audio/x-m4a"/>
        </audio>
      <img className = "song-image" src={image} alt={`${title} from ${artist}`} width='40%' height='40%' />
      <h5>Genre: {genre}</h5>
      </div>
  )
}

export default Song;