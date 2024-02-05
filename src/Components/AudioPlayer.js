import React, { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ src, songName,songImage,onEnded }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

useEffect(() => {
    if (src) {
      audioRef.current.src = src;
     
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [src]);

  const handleEnded = () => {
    setIsPlaying(false);
    onEnded();
  };

  return (
    <div className='audioplayer-container'>
      <img src={songImage} alt="song1Image" className="songImage" />
       {src && <p className='song-Name'>Now Playing: {songName}</p>}
     <audio ref={audioRef} onEnded={handleEnded}  title={src ? `Now Playing: ${songName}` : null}  controls  className='audio-palyer-control'/>
      
    </div>
  );
};

export default AudioPlayer;
