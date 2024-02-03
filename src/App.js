// App.js
// import React, { useState, useEffect } from 'react';
// import AudioPlayer from './Components/AudioPlayer';
// import Playlist from './Components/Playlist';

// const App = () => {
//   const [files, setFiles] = useState([]);
//   const [currentFileIndex, setCurrentFileIndex] = useState(0);


//   useEffect(() => {
//    // const musicFolder = '/music';
//      // Path to the music folder
//     // ...
// const musicFolder = 'C:/Users/acer/Downloads/MusicTesting';
// // ...

//     const musicFiles = [
//       { name: 'song1', url: `${musicFolder}/song1.mpeg` },  // Use ".mpeg" or ".mp3" as appropriate
//       { name: 'song2', url: `${musicFolder}/song2.mpeg` },
//       { name: 'song3', url: `${musicFolder}/song3.mpeg` }
//       // Add more songs as needed
//     ];

//     setFiles(musicFiles);
//     setCurrentFileIndex(0);
//   }, []);

//   const handleFileChange = (file) => {
//     const newFiles = [...files, file];
//     setFiles(newFiles);
//     setCurrentFileIndex(newFiles.length - 1);
//   };

//   const handleFileSelected = (file) => {
//     const newIndex = files.findIndex((f) => f === file);
//     setCurrentFileIndex(newIndex);
//   };

//   const handlePlaybackEnded = () => {
//     // Move to the next file in the playlist
//     setCurrentFileIndex((prevIndex) => (prevIndex + 1) % files.length);
//   };

//   return (
//     <div>
//       <h1>React Audio Player</h1>
//       <AudioPlayer
//         src={files.length > 0 ? files[currentFileIndex].url : null}
//         onEnded={handlePlaybackEnded}
//       />
//       <Playlist files={files} onFileSelected={handleFileSelected} />
//       <input type="file" accept=".mpeg" onChange={(e) => handleFileChange(e.target.files[0])} />
//     </div>
//   );
// };

// export default App;

// App.js
import React, { useState, useEffect } from 'react';
import AudioPlayer from './Components/AudioPlayer';
import Playlist from './Components/Playlist';
import "./styles/main.css";
import img1 from "./Images/img1.jpeg";
import img2 from "./Images/img2.jpeg";
import img3 from "./Images/img3.jpeg";
import img4 from "./Images/img4.jpeg";

//import "./App.css";
//import UserProfile from './Components/UserProfile';

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);

  useEffect(() => {
    const musicFiles = [
      // { name: 'song1.mpeg', url: `${musicFolder}\\song1.mpeg` },
      // { name: 'song2.mpeg', url: `${musicFolder}\\song2.mpeg` },
      // { name: 'song3.mpeg', url: `${musicFolder}\\song3.mpeg` }
      {name:'song1',url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',image:img1},
      {name:'song2',url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',image:img2},
      {name:'song3',url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',image:img3},
      {name:'song4',url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',image:img4}
      // Add more songs as needed
    ];

    setFiles(musicFiles);
    setCurrentFileIndex(0);
  }, []);

  const handleFileChange = (file) => {
    const newFiles = [...files, file];
    setFiles(newFiles);
    setCurrentFileIndex(newFiles.length - 1);
  };

  const handleFileSelected = (file) => {
    const newIndex = files.findIndex((f) => f === file);
    setCurrentFileIndex(newIndex);
    setIsInteracted(true); // Set flag on user interaction
  };

  const handlePlaybackEnded = () => {
    setCurrentFileIndex((prevIndex) => (prevIndex + 1) % files.length);
  };

  const handlePlayButtonClick = () => {
    setIsInteracted(true); // Set flag on user interaction
  };

  return (
    <div className='audio-player-container'>
      <h1 id="audioplayer-heading">React Audio Player</h1>
      <AudioPlayer
        src={files.length > 0 ? files[currentFileIndex].url : null}
        songName={files.length > 0 ? files[currentFileIndex].name : null}
        songImage={files.length > 0 ? files[currentFileIndex].image : null}
        onEnded={handlePlaybackEnded}
        isInteracted={isInteracted}
      /> 
       <Playlist files={files} onFileSelected={handleFileSelected} />
      {/* <input type="file" accept=".mp3" onChange={(e) => handleFileChange(e.target.files[0])} />
      <button onClick={handlePlayButtonClick}>Play</button>  */}
        {/* <h2 className="mb-3">React Play Mp3 Audio File Example</h2>
      <UserProfile /> */}
    </div>
  );
};

export default App;

