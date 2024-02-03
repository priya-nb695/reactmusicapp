// Playlist.js
import React from 'react';
//import "../styles/main.css"


const Playlist = ({ files, onFileSelected }) => {
  return (
    <div className="playlist-Container">
      <h2 id="playlist-heading">Playlist</h2>
      <div className="playlist-holder">
        {files.map((file, index) => (
          <div key={index}   className="playlist-song" onClick={() => onFileSelected(file) }>
            {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
