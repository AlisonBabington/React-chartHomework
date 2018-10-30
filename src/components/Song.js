import React from 'react';

const Song = ({song, position}) => {

    const title = song['im:name'].label;
    const artist = song['im:artist'].label;
    const genre = song.category.attributes.label;
   
  return (
      <div className = "song ">
      <h5>{position}</h5>
      <h4>Title: {title}</h4>
      <h5>Artist(s): {artist}</h5>
      <h5>Genre: {genre}</h5>
      </div>
  )
}

export default Song;